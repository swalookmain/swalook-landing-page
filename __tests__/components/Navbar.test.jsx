import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next/link
function MockLink({ children, href, className }) {
  return <a href={href} className={className}>{children}</a>;
}

function MockChevronDown() {
  return <span data-testid="chevron-down" />;
}

vi.mock("next/link", () => ({
  default: MockLink,
}));

// Mock react-icons
vi.mock("react-icons/fi", () => ({
  FiChevronDown: MockChevronDown,
}));

import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Swalook")).toBeTruthy();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    for (const label of ["Product", "Solutions", "Resources"]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
    expect(screen.getAllByText("Salon CRM").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Customer Retention").length).toBeGreaterThan(0);
  });

  it("renders Login and Book a Demo on desktop and mobile", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Login").length).toBeGreaterThan(0);
    // desktop CTA, always-visible mobile bar CTA, and mobile menu CTA
    expect(screen.getAllByText("Book a Demo").length).toBe(3);
  });

  it("renders mobile menu toggle button", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText("Open navigation menu");
    expect(toggle).toBeTruthy();
  });

  it("opens mobile menu when toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByLabelText("Open navigation menu");
    await user.click(toggle);
    const mobileMenu = screen.getByRole("navigation");
    expect(mobileMenu).toBeTruthy();
  });
});
