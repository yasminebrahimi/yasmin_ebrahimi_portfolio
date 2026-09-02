import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact me", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-290 items-center justify-between px-6 py-6 lg:px-0">
      <a
        href="#home"
        className="bg-linear-to-r from-brand to-black/20 bg-clip-text text-[25px] font-bold capitalize text-transparent"
      >
        Yasmin Ebrahimi
      </a>

      <nav className="hidden items-center gap-7.5 text-lg font-bold capitalize text-brand lg:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="transition hover:text-brand-dark"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="/resume.pdf"
        download
        className="hidden shrink-0 rounded-2xl bg-brand px-9.25 py-3.25 text-[15px] font-bold capitalize text-white transition hover:bg-brand-dark lg:block"
      >
        Dw Resume
      </a>

      <button
        className="text-brand lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 flex flex-col items-center gap-5 bg-white py-6 shadow-lg lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold capitalize text-brand"
            >
              {l.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-2xl bg-brand px-9 py-3 text-[15px] font-bold capitalize text-white"
          >
            Dw Resume
          </a>
        </div>
      )}
    </header>
  );
}
