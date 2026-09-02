import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiJavascript,
  SiDocker,
  SiKaggle,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";

const floatIcons = [
  {
    Icon: SiReact,
    color: "#61DAFB",
    className: "left-[-4%] top-[38%] lg:top-[36%]",
  },
  {
    Icon: SiPython,
    color: "#3776AB",
    className: "left-[14%] top-[-20%] lg:left-[16%] lg:top-[-20%]",
  },
  {
    Icon: SiNextdotjs,
    color: "#000000",
    className: "left-1/2 top-[-12%] -translate-x-1/2",
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    className: "right-[14%] top-[-20%] lg:right-[16%] lg:top-[-20%]",
  },
  {
    Icon: SiDocker,
    color: "#2496ED",
    className: "right-[-4%] top-[46%] lg:top-[44%]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-290 flex-col items-center gap-16 px-6 pb-24 pt-40 text-center lg:px-0"
    >
      <div className="relative flex w-full flex-col items-center gap-8">
        {floatIcons.map(({ Icon, color, className }, i) => (
          <div
            key={i}
            className={`absolute hidden size-19.25 items-center justify-center rounded-[10px] bg-brand/15 sm:flex ${className}`}
          >
            <Icon size={36} color={color} />
          </div>
        ))}

        <div className="flex flex-col items-center gap-8 pt-2 sm:pt-16">
          <h1 className="text-[42px] font-bold capitalize leading-tight text-brand sm:text-[64px] lg:text-[80px]">
            Yasmin Ebrahimi
          </h1>

          <p className="text-[26px] font-medium leading-tight sm:text-[36px] lg:text-[45px]">
            <span className="bg-linear-to-r from-brand from-30% to-brand-dark to-54% bg-clip-text font-black text-transparent">
              {"<full stack/>"}
            </span>{" "}
            <span className="text-brand">developer</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <p className="max-w-169.75 text-base capitalize text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://github.com/yasminebrahimi"
              target="_blank"
              rel="noreferrer"
              className="flex h-15 w-44 items-center justify-center gap-2.25 rounded-2xl border border-brand bg-brand/35 font-bold text-[#6879d9] transition hover:bg-brand/50"
            >
              <FaGithub size={26} />
              <span className="text-xl">GitHub</span>
            </a>

            <a
              href="https://www.kaggle.com/yasminebrahimi/code"
              target="_blank"
              rel="noreferrer"
              className="flex h-15 w-44 items-center justify-center gap-2.25 rounded-2xl bg-panel-2 font-bold text-ink transition hover:bg-[#e9eaee]"
            >
              <SiKaggle size={24} color="#20BEFF" />
              <span className="text-xl">Kaggle</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
