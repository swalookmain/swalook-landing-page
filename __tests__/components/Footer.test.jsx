import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock next/link
function MockLink({ children, href, className }) {
  return <a href={href} className={className}>{children}</a>;
}

function MockPhoneIcon() {
  return <span data-testid="phone-icon" />;
}
function MockMailIcon() {
  return <span data-testid="mail-icon" />;
}
function MockMapPinIcon() {
  return <span data-testid="map-pin-icon" />;
}
function MockFacebookIcon() {
  return <span data-testid="facebook-icon" />;
}
function MockYoutubeIcon() {
  return <span data-testid="youtube-icon" />;
}
function MockLinkedinIcon() {
  return <span data-testid="linkedin-icon" />;
}
function MockInstagramIcon() {
  return <span data-testid="instagram-icon" />;
}

vi.mock("next/link", () => ({
  default: MockLink,
}));

// Mock react-icons
vi.mock("react-icons/fi", () => ({
  FiPhone: MockPhoneIcon,
  FiMail: MockMailIcon,
  FiMapPin: MockMapPinIcon,
}));

vi.mock("react-icons/fa6", () => ({
  FaFacebookF: MockFacebookIcon,
  FaYoutube: MockYoutubeIcon,
  FaLinkedinIn: MockLinkedinIcon,
  FaInstagram: MockInstagramIcon,
}));

import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Swalook")).toBeTruthy();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByLabelText("Facebook")).toBeTruthy();
    expect(screen.getByLabelText("YouTube")).toBeTruthy();
    expect(screen.getByLabelText("LinkedIn")).toBeTruthy();
    expect(screen.getByLabelText("Instagram")).toBeTruthy();
  });

  it("renders the tagline and link columns", () => {
    render(<Footer />);
    expect(screen.getByText("The CRM Built to Grow Your Salon")).toBeTruthy();
    for (const heading of ["Product", "Growth", "Company", "Resources", "Legal"]) {
      expect(screen.getByText(heading)).toBeTruthy();
    }
    expect(screen.getByText("Swalook CRM")).toBeTruthy();
    expect(screen.getByText("Mobile App")).toBeTruthy();
    expect(screen.getByText("Customer Acquisition")).toBeTruthy();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/All rights reserved/)).toBeTruthy();
  });

  it("renders policy links", () => {
    render(<Footer />);
    expect(screen.getByText("Terms & Conditions")).toBeTruthy();
    expect(screen.getByText("Privacy Policy")).toBeTruthy();
    expect(screen.getByText("Cancellation Policy")).toBeTruthy();
    expect(screen.getByText("Shipping Policy")).toBeTruthy();
  });

  it("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("+91 98701 03761")).toBeTruthy();
    expect(screen.getByText("info@swalook.in")).toBeTruthy();
    expect(screen.getByText(/Greater Noida/)).toBeTruthy();
  });
});
