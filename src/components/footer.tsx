import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaHeart,
  FaWhatsapp,
} from "react-icons/fa6";

const FOOTER_SECTIONS = [
  // {
  //   title: "Community",
  //   links: [
  //     { label: "About Us", href: "/#about" },
  //     { label: "Our Team", href: "/team" },
  //     { label: "Events", href: "/events" },
  //     { label: "Blog", href: "#" },
  //   ],
  // },
];

const SOCIAL_LINKS = [
  { icon: FaWhatsapp, href: "https://chat.whatsapp.com/Ektdos2rW7TFn6cv0bGVKy" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/gdgoc-ldce/posts/?feedView=all",
  },
  { icon: FaInstagram, href: "https://instagram.com/gdgoc_ldce" },
];

export default function Footer() {
  return (
    <footer className="relative z-999 border-t border-gray-200 bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-6 text-center sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div>
            <div className="mb-4 flex items-center justify-center gap-2 text-center">
              <span className="text-2xl font-bold text-gray-900">
                &lt;&gt;
              </span>
              <span className="text-center text-lg font-semibold text-gray-900">
                GDGOC LDCE
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Google Developer Groups on Campus at L.D. College of Engineering,
              Ahmedabad. Empowering students through technology.
            </p>
            <div className="flex justify-center gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold tracking-widest text-gray-900 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:mt-10 sm:pt-8">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-center">
            <div className="text-center">
              <p>
                © 2026 Google Developer Groups on Campus - LDCE. All rights
                reserved.
              </p>
              <p className="mt-1 flex items-center justify-center gap-1 text-center text-xs md:mt-0">
                Made with <FaHeart className="text-red-500" /> by GDGOC LDCE
                Team
              </p>
            </div>
            {/* <div className="flex items-center gap-4">
              <Link href="#" className="text-sm hover:text-gray-900">
                Privacy
              </Link>
              <Link href="#" className="text-sm hover:text-gray-900">
                Terms
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
