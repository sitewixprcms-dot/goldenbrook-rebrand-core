import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Approach",
    path: "/our-approach",
    children: [
      { name: "Residential", path: "/our-approach/residential" },
      { name: "Commercial", path: "/our-approach/commercial" },
    ],
  },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Contact Us", path: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (item: typeof navLinks[0]) => {
    if ('children' in item && item.children) {
      return item.children.some(child => location.pathname === child.path) || location.pathname === item.path;
    }
    return isActive(item.path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="gb-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <svg 
                viewBox="0 0 40 40" 
                className="w-10 h-10 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 5 L20 20 M20 20 L8 12 M20 20 L32 12 M20 20 L20 35" />
                <circle cx="20" cy="20" r="15" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-primary-foreground font-serif text-lg tracking-[0.25em]">GOLDEN</p>
              <p className="text-primary-foreground font-serif text-xs tracking-[0.35em] -mt-0.5">BROOK</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => 'children' in item && item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    isParentActive(item)
                      ? "text-secondary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {item.name}
                  {'children' in item && item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {'children' in item && item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 w-48 bg-card rounded-sm shadow-xl border border-border overflow-hidden z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isActive(child.path)
                                ? "bg-secondary/10 text-secondary"
                                : "text-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <nav className="gb-container py-4 space-y-1">
              {navLinks.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => !('children' in item && item.children) && setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      isParentActive(item)
                        ? "text-secondary"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {'children' in item && item.children && (
                    <div className="ml-4 border-l border-primary-foreground/20 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? "text-secondary"
                              : "text-primary-foreground/60 hover:text-primary-foreground"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
