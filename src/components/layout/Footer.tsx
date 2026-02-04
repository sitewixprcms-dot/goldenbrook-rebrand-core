import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="gb-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg 
                viewBox="0 0 40 40" 
                className="w-12 h-12 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 5 L20 20 M20 20 L8 12 M20 20 L32 12 M20 20 L20 35" />
                <circle cx="20" cy="20" r="15" />
              </svg>
              <div>
                <p className="font-serif text-xl tracking-widest">GOLDEN</p>
                <p className="font-serif text-sm tracking-[0.3em] -mt-1">BROOK</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Quality construction and development services across the Midlands. From extensions to complete fit-outs, we deliver excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Approach", path: "/our-approach" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "Inspiration", path: "/inspiration" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Residential Projects", path: "/our-approach/residential" },
                { name: "Commercial Projects", path: "/our-approach/commercial" },
                { name: "Extensions", path: "/our-approach/residential" },
                { name: "Fit Outs", path: "/our-approach/commercial" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  The Midlands, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  Contact for details
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@goldenbrook.co.uk"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  info@goldenbrook.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Golden Brook Developments Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/50 hover:text-secondary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
