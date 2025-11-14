import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/somali-post-logo.png"
                alt="Somali Post logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold">Somali Post</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Our mission is to connect people and businesses across Somalia
              and the world with reliable, efficient, and secure postal and
              logistics services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white text-slate-300 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/government-directory" className="hover:text-white text-slate-300 transition-all duration-300">
                  Government Directory
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white text-slate-300 transition-all duration-300">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white text-slate-300 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white text-slate-300 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="block">General Post Office (GPO) Address</span>
                <span className="block">Mogadishu, Somalia</span>
              </li>
              <li>
                <span>Phone: +252 (xxx) xxx-xxxx</span>
              </li>
              <li>
                <span>Email: info@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-6 md:flex-row">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-accent-orange transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.07L15 11h-2v-1.5c0-.28.22-.5.5-.5Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-accent-orange transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7.55 20c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.4-.01-.6A9.18 9.18 0 0 0 22 3.92a9.06 9.06 0 0 1-2.6.71 4.55 4.55 0 0 0 1.99-2.51 9.11 9.11 0 0 1-2.88 1.1A4.54 4.54 0 0 0 11.1 7.5a12.88 12.88 0 0 1-9.35-4.74 4.54 4.54 0 0 0 1.4 6.06A4.51 4.51 0 0 1 1.6 8.3v.06A4.54 4.54 0 0 0 4.52 12a4.54 4.54 0 0 1-2.05.08 4.54 4.54 0 0 0 4.24 3.15A9.1 9.1 0 0 1 1 17.64 12.84 12.84 0 0 0 7.55 20Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-accent-orange transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.5v11.75H3.5V8.75Zm6 0h3.36v1.6h.05c.47-.9 1.61-1.86 3.32-1.86 3.56 0 4.22 2.34 4.22 5.38v6.63h-3.5v-5.88c0-1.4-.02-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.98H9.5V8.75Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-accent-orange transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17.5 7A1 1 0 1 1 16 7a1 1 0 0 1 1.5 0Z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Somali Post. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
