import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./assets/icons";

export default function Footer() {
  return (
    <footer className="bg-black px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & copyright */}
        <div className="md:col-span-2">
          <h1 className="text-white text-2xl font-bold tracking-widest">
            MAKETA
          </h1>
          <p className="mt-4 text-sm">Copyright © 2025 | All Rights Reserved</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about/story"
                className="hover:text-primaryYellow transition"
              >
                Story
              </Link>
            </li>
            <li>
              <Link
                href="/about/team"
                className="hover:text-primaryYellow transition"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/about/clients"
                className="hover:text-primaryYellow transition"
              >
                Our Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/services/marketing"
                className="hover:text-primaryYellow transition"
              >
                Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services/branding"
                className="hover:text-primaryYellow transition"
              >
                Branding & Design
              </Link>
            </li>
            <li>
              <Link
                href="/services/media-production"
                className="hover:text-primaryYellow transition"
              >
                Media Production
              </Link>
            </li>
            <li>
              <Link
                href="/services/web-app"
                className="hover:text-primaryYellow transition"
              >
                Web & App Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryYellow transition flex items-center gap-1"
              >
                <FacebookIcon /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryYellow transition flex items-center gap-1"
              >
                <InstagramIcon className={"w-4 h-4"} /> <span>instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryYellow transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
