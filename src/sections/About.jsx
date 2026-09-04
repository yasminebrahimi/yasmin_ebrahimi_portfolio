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
      className="mx-auto flex w-full max-w-290 flex-col items-center gap-12 px-6 pb-14 pt-28 lg:px-0"
    >
      <h2 className="text-center text-[42px] font-bold capitalize sm:text-[56px] lg:text-[70px]">
        About <span className="text-brand">ME</span>
      </h2>

      <div className="space-y-6 text-justify text-base leading-relaxed text-gray-400 sm:text-[19px]">
        <p>
          I’m a software developer specializing in{" "}
          <strong>full-stack development</strong>, with a strong interest in{" "}
          <strong>artificial intelligence and machine learning</strong>. I enjoy
          building complete software solutions, from intuitive user interfaces
          to reliable backend systems and APIs.
        </p>

        <p>
          My full-stack experience includes technologies such as{" "}
          <strong>
            React, JavaScript, TypeScript, Python, SQL, REST APIs, Docker, and
            AWS
          </strong>
          . I enjoy working across different layers of an application and
          turning ideas into functional, polished products.
        </p>

        <p>
          Alongside software development, I have a strong interest in building{" "}
          <strong>machine learning </strong>
           solutions. My experience includes working with{" "}
          <strong>PyTorch and TensorFlow</strong>, developing and training
          neural networks, and applying deep learning techniques to real-world
          problems.
        </p>

        <p>
          What motivates me most is creating technology that is both technically
          meaningful and genuinely useful. I enjoy solving complex problems,
          exploring new technologies, and continuously improving the way I build
          software.
        </p>

        <p>
          For me, development is about more than writing code. it’s about{" "}
          <strong>
            understanding problems, designing effective solutions, and turning
            ideas into experiences that work.
          </strong>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6.75">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="animate-float-sm rounded-2xl border border-brand px-8 py-5 text-lg font-medium text-brand transition-colors hover:bg-brand hover:text-white sm:text-[20px]"
            style={{
              animationDelay: `${(i % 6) * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
