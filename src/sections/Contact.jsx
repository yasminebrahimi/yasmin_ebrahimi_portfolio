import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiGmail } from "react-icons/si";

const links = [
  {
    label: "Email",
    value: "yasminebrahimi54@gmail.com",
    href: "mailto:yasminebrahimi54@gmail.com",
    icon: SiGmail,
    color: "#EA4335",
  },
  {
    label: "Git",
    value: "github.com/yasminebrahimi",
    href: "https://github.com/yasminebrahimi",
    icon: FaGithub,
    color: "#181717",
  },
  {
    label: "Kaggle",
    value: "kaggle.com/yasminebrahimi",
    href: "https://www.kaggle.com/yasminebrahimi",
    icon: SiKaggle,
    color: "#20BEFF",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yasmin-ebrahimi",
    href: "https://linkedin.com/in/yasmin-ebrahimi",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );

    window.location.href = `mailto:yasmebrah54@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-290 flex-col items-center gap-16 px-6 py-24 lg:px-0"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-[32px] font-bold capitalize tracking-wide sm:text-[48px] lg:text-[70px]">
          Let&apos;s work <span className="text-brand">together!</span>
        </h2>

        <p className="max-w-191 text-base capitalize text-muted sm:text-[17px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-end lg:justify-center">
        <div className="grid w-full max-w-143 grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {links.map((l) => {
            const Icon = l.icon;

            return (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel={l.label === "Email" ? undefined : "noreferrer"}
                className="flex items-center gap-3.75"
              >
                <Icon size={40} color={l.color} className="shrink-0" />

                <div className="flex flex-col items-start gap-2">
                  <span className="text-lg font-bold text-brand sm:text-[22px]">
                    {l.label}
                  </span>

                  <span className="text-sm text-ink underline">{l.value}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex w-full max-w-129 flex-col items-center gap-9">
          <h3 className="text-3xl font-bold tracking-tight text-brand sm:text-[40px]">
            Get in touch
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 rounded-[25px] bg-panel p-6"
          >
            <input
              required
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-14.25 rounded-lg bg-white px-4 text-brand placeholder:text-brand/70 focus:outline-none focus:ring-2 focus:ring-brand"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-14.25 rounded-lg bg-white px-4 text-brand placeholder:text-brand/70 focus:outline-none focus:ring-2 focus:ring-brand"
            />

            <textarea
              required
              placeholder="Write your message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="h-44.5 resize-none rounded-lg bg-white px-4 py-3 text-brand placeholder:text-brand/70 focus:outline-none focus:ring-2 focus:ring-brand"
            />

            <button
              type="submit"
              className="w-45.25 rounded-2xl bg-brand py-3.5 font-bold text-white transition hover:bg-brand-dark"
            >
              Send message
            </button>

            {sent && (
              <p className="text-sm text-brand">
                Thanks! Your email app should have opened — feel free to send it
                over.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
