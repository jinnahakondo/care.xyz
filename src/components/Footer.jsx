import React from "react";
import Link from "next/link";
import Logo from "./logo/Logo";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content text-sm">
      {/* footer main container */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* brand section */}
        <div className="space-y-4">
          <Logo />

          <p className="text-sm opacity-70">
            Dedicated to providing professional, empathetic, and reliable care
            for your loved ones at home.
          </p>

          {/* social icons */}
          <div className="flex gap-3 pt-2">
            <button className="btn btn-circle btn-sm">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle btn-sm">
              <FiGlobe />
            </button>
            <button className="btn btn-circle btn-sm">
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* services links */}
        <div>
          <h6 className="footer-title text-lg ">Services</h6>

          <ul className="space-y-2">
            <li>
              <Link href="/babysitting" className="link link-hover">
                Babysitting
              </Link>
            </li>
            <li>
              <Link href="/nanny-services" className="link link-hover">
                Nanny Services
              </Link>
            </li>
            <li>
              <Link href="/elderly-care" className="link link-hover">
                Elderly Care
              </Link>
            </li>
            <li>
              <Link href="/post-surgery-care" className="link link-hover">
                Post-Surgery Care
              </Link>
            </li>
            <li>
              <Link href="/special-needs-care" className="link link-hover">
                Special Needs Care
              </Link>
            </li>
          </ul>
        </div>

        {/* company links */}
        <div>
          <h6 className="footer-title text-lg">Company</h6>

          <ul className="space-y-2">
            <li>
              <Link href="/about" className="link link-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="link link-hover">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="link link-hover">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/safety-center" className="link link-hover">
                Safety Center
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link link-hover">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* subscribe section */}
        <div className="space-y-4 ">
          <h6 className="footer-title text-lg">Stay Updated</h6>

          <p className="text-sm opacity-70">
            Subscribe to get care tips and platform updates.
          </p>

          {/* email form */}
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered bg-neutral-900 w-full"
            />

            <button className="btn btn-primary w-full">Subscribe</button>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="border-t border-neutral-content/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* copyright */}
          <p className="opacity-70">
            © 2026 Care.xyz Inc. All rights reserved.
          </p>

          {/* legal links */}
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="link link-hover">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="link link-hover">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
