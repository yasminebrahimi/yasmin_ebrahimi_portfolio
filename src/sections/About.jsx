const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "FastAPI",
  "Docker",
  "SQL",
  "Git",
  "AWS",
  "PyTorch",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Spark",
  "MongoDB",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-290 flex-col items-center gap-16 px-6 py-24 lg:px-0"
    >
      <h2 className="text-center text-[42px] font-bold capitalize sm:text-[56px] lg:text-[70px]">
        About <span className="text-brand">ME</span>
      </h2>

      <p className="text-justify text-base capitalize leading-relaxed text-muted sm:text-[19px]">
        I&apos;m passionate about creating seamless software solutions and
        pushing the boundaries of technology. Based in Finland, I&apos;m a
        second-year Business Information Technology student with a deep love for
        software development. Beyond coding, I&apos;m driven by a vision to
        create. I thrive on envisioning and implementing innovative solutions
        that not only meet but exceed expectations. Whether it&apos;s designing
        intuitive user interfaces, optimizing backend processes, or integrating
        cutting-edge technologies, I&apos;m committed to delivering excellence
        in every project I undertake.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6.75">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-2xl border border-brand px-8 py-5 text-lg font-medium text-brand transition-colors hover:bg-brand hover:text-white sm:text-[20px]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
