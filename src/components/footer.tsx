const FOOTER_SECTIONS = [
  {
    title: "Community",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Events", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learning Paths", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Join Discord", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Partnership", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: "𝕏", href: "#" },
  { icon: "in", href: "#" },
  { icon: "📷", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                &lt;/&gt;
              </span>
              <span className="text-lg font-semibold text-gray-900">
                GDGOC LDCE
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Google Developer Groups on Campus at L.D. College of Engineering,
              Ahmedabad. Empowering students through technology.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:mt-10 sm:pt-8">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p>
                © 2025 Google Developer Groups on Campus - LDCE. All rights
                reserved.
              </p>
              <p className="mt-1 text-xs md:mt-0">
                Made with ❤️ by GDGOC LDCE Team
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="text-sm hover:text-gray-900">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
