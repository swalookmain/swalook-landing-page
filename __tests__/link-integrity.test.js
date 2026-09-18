import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Link Integrity", () => {
    const pagesDir = path.join(process.cwd(), "app");
    const pageFiles = [];

    function collectPages(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                collectPages(fullPath);
            } else if (entry.name === "page.js" || entry.name === "page.tsx") {
                // Route path with forward slashes on every OS (path.join uses "\" on Windows)
                const route = path.relative(pagesDir, dir).split(path.sep).join("/");
                pageFiles.push(route ? `/${route}` : "/");
            }
        }
    }
    collectPages(pagesDir);

    it("discovers 25+ pages", () => {
        expect(pageFiles.length).toBeGreaterThanOrEqual(25);
    });

    it("all Navbar links resolve to existing pages", () => {
        const navbarSource = fs.readFileSync(
            path.join(process.cwd(), "components", "Navbar.js"),
            "utf-8"
        );
        const links = navbarSource.match(/(?:href=|to=)["']([^"']+)["']/g) || [];
        const resolvedLinks = links.map((l) =>
            l.replace(/(?:href=|to=)["']([^"']+)["']/, "$1")
        );

        for (const link of resolvedLinks) {
            if (link.startsWith("/") && !link.startsWith("http")) {
                const normalizedLink = link.replace(/\/$/, "") || "/";
                const matchingPage = pageFiles.some((p) => {
                    const pageRegex = new RegExp(
                        "^" + p.replace(/\[.*?\]/g, "[^/]+") + "$"
                    );
                    return pageRegex.test(normalizedLink);
                });
                expect(matchingPage).toBe(true);
            }
        }
    });

    it("Footer links resolve to existing pages", () => {
        const footerSource = fs.readFileSync(
            path.join(process.cwd(), "components", "Footer.js"),
            "utf-8"
        );
        const links = footerSource.match(/(?:href=|to=)["']([^"']+)["']/g) || [];
        const resolvedLinks = links.map((l) =>
            l.replace(/(?:href=|to=)["']([^"']+)["']/, "$1")
        );

        for (const link of resolvedLinks) {
            if (link.startsWith("/") && !link.startsWith("http")) {
                const normalizedLink = link.replace(/\/$/, "") || "/";
                const matchingPage = pageFiles.some((p) => {
                    const pageRegex = new RegExp(
                        "^" + p.replace(/\[.*?\]/g, "[^/]+") + "$"
                    );
                    return pageRegex.test(normalizedLink);
                });
                expect(matchingPage).toBe(true);
            }
        }
    });

    it("CTA buttons link to conversion pages", () => {
        const homePage = fs.readFileSync(
            path.join(process.cwd(), "app", "page.js"),
            "utf-8"
        );
        const ctaLinks =
            homePage.match(
                /(?:href=|to=)["']\/(book-demo|free-trial|contact)[^"']*["']/g
            );
        expect(ctaLinks.length).toBeGreaterThan(0);
    });

    it("external links have rel=noopener noreferrer", () => {
        const sources = ["components/Navbar.js", "components/Footer.js"];
        sources.forEach((filePath) => {
            const fullPath = path.join(process.cwd(), filePath);
            if (fs.existsSync(fullPath)) {
                const source = fs.readFileSync(fullPath, "utf-8");
                const externalLinks =
                    source.match(/href=["']https?:\/\/[^"']+["']/g) || [];
                externalLinks.forEach((link) => {
                    const linkValue = link.replace(
                        /href=["']([^"']+)["']/,
                        "$1"
                    );
                    if (
                        linkValue.includes("facebook") ||
                        linkValue.includes("twitter") ||
                        linkValue.includes("instagram") ||
                        linkValue.includes("linkedin") ||
                        linkValue.includes("youtube")
                    ) {
                        expect(source).toContain("noopener");
                        expect(source).toContain("noreferrer");
                    }
                });
            }
        });
    });
});
