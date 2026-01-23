import React, { useState, useEffect } from "react";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleScroll = () => {
      // Use a slightly larger threshold for stability
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { name: "ডিজিটাল কৌশল", slug: "digital-strategy" },
    { name: "ইউআই/ইউএক্স ডিজাইন", slug: "ui-ux-design" },
    { name: "ওয়েব ডেভেলপমেন্ট", slug: "web-development" },
    { name: "অ্যাপ সল্যুশন", slug: "app-solution" },
    { name: "ব্র্যান্ড গ্রোথ", slug: "brand-growth" },
    { name: "ই-কমার্স সল্যুশন", slug: "ecommerce-solution" },
  ];

  const navItems = [
    { name: "হোম", href: "/" },
    { name: "আমাদের কথা", href: "/about" },
    {
      name: "সার্ভিস",
      href: "/#services",
      submenu: serviceItems,
    },
    { name: "পোর্টফোলিও", href: "/portfolio" },
    { name: "ব্লগ", href: "/blog" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6">
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "auto" : "100%",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "rgba(255, 255, 255, 0)",
          padding: isScrolled ? "0.6rem 1.25rem" : "1rem 0rem",
          borderRadius: isScrolled ? "100px" : "0px",
          boxShadow: isScrolled
            ? "0 20px 40px -15px rgba(0, 0, 0, 0.12)"
            : "none",
          borderColor: isScrolled
            ? "rgba(228, 228, 231, 0.8)"
            : "rgba(228, 228, 231, 0)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`flex justify-between items-center backdrop-blur-xl border pointer-events-auto ${isScrolled ? "gap-12 md:gap-20" : "gap-0"}`}
        style={{ maxWidth: "1280px" }}
      >
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer group px-2 shrink-0"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          <div
            className={`
              bg-red-600 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
              ${isScrolled ? "w-8 h-8" : "w-10 h-10"}
            `}
          >
            <Rocket
              className="text-white fill-current"
              size={isScrolled ? 16 : 20}
            />
          </div>
          <span
            className={`
              font-display font-bold tracking-tight text-slate-900 uppercase whitespace-nowrap transition-all duration-300
              ${isScrolled ? "text-base" : "text-xl"}
            `}
          >
            UDDOKTA<span className="text-red-600">.</span>STUDIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <div
          className={`hidden lg:flex items-center ${isScrolled ? "gap-6" : "gap-10"}`}
        >
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.submenu && pathname.startsWith("/services"));

              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`text-sm font-bold tracking-wide flex items-center gap-1 transition-colors ${isActive ? "text-red-600" : "text-slate-600 hover:text-red-600"}`}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 pt-4 w-64"
                        >
                          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-4 flex flex-col gap-1">
                            {item.submenu.map((sub) => (
                              <a
                                key={sub.slug}
                                href={`/services/${sub.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-bold tracking-wide relative group whitespace-nowrap transition-colors ${isActive ? "text-red-600" : "text-slate-600 hover:text-red-600"}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </a>
              );
            })}
          </div>
          <a
            href="/contact"
            className={`
              bg-slate-900 text-white rounded-full font-bold hover:bg-red-600 transition-all shadow-lg shadow-black/10 whitespace-nowrap flex items-center justify-center
              ${isScrolled ? "px-5 py-2 text-[11px] ml-2" : "px-8 py-3 text-sm ml-4"}
            `}
          >
            শুরু করুন
          </a>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden px-2 flex items-center h-full">
          <button
            className="text-slate-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-[60] flex flex-col pointer-events-auto"
          >
            <div className="p-10 flex flex-col h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-16 shrink-0">
                <span className="text-2xl font-display font-bold text-slate-900 uppercase">
                  UDDOKTA<span className="text-red-600">.</span>STUDIO
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="space-y-6 flex-grow">
                {navItems.map((item, i) => (
                  <div key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      {item.submenu ? (
                        <div className="space-y-4">
                          <p className="text-xs font-bold text-red-600 uppercase tracking-widest">
                            {item.name}
                          </p>
                          <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-red-50">
                            {item.submenu.map((sub) => (
                              <a
                                key={sub.slug}
                                href={`/services/${sub.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-display font-bold text-slate-900"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block text-4xl font-display font-bold text-slate-900 hover:text-red-600"
                        >
                          {item.name}
                        </a>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-red-600 text-white py-6 rounded-3xl text-xl font-bold shadow-xl shadow-red-600/20 text-center mt-10 shrink-0"
              >
                কন্সালটেশন নিন
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
