import { useState } from "react";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";


const jobs = [
  {
    company: "HAMK Tech Research Unit",
    role: "Thesis Worker",
    logo: <HiBuildingOffice2 size={40} className="text-muted-2" />,
    title: "Thesis Worker",
    period: "Jan 2026 - March 2026",
    location: "Hämeenlinna, Finland",
    employment: "HAMK Tech Research Unit · Full-time",
    bullets: [
      "Trained and evaluated convolutional neural network (CNN) models using PyTorch for multi-target biomass regression tasks.",
      "Applied data preprocessing, augmentation, model optimization, and evaluation techniques to improve model performance and reliability.",
      "Implemented and compared multiple deep learning architectures, including DenseNet, MobileNetV3, ConvNeXt, and InceptionResNetV2.",
      "Containerized and deployed machine learning services using Docker and Hugging Face Spaces to support scalable cloud inference.",
      "Built a cross-platform Flutter mobile application for image upload, prediction visualization, and cloud-based inference workflows.",
    ],
  },

  {
    company: "HAMK Tech Research Unit",
    role: "Software Developer Intern",
    logo: <HiBuildingOffice2 size={40} className="text-muted-2" />,
    title: "Software Developer Intern",
    period: "March 2025 - Aug 2025",
    location: "Hämeenlinna, Finland",
    employment: "HAMK Tech Research Unit · Full-time",
    bullets: [
      "Developed and maintained web and mobile applications using modern frontend technologies.",
      "Built a web portal based on an existing UI/UX design, integrating existing APIs and external data sources.",
      "Developed an admin web tool for resource management on top of an existing API without a predefined UI design, contributing to both frontend structure and functionality planning.",
      "Implemented authentication and login functionality integrated with backend APIs to support secure admin access.",
    ],
  },
];



export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-290 flex-col items-center gap-16 px-6 py-24 lg:px-0"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-[36px] font-bold capitalize sm:text-[50px] lg:text-[70px]">
          Work <span className="text-brand">experience</span>
        </h2>

        {/* <p className="max-w-191 text-base capitalize text-muted sm:text-[17px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p> */}
      </div>

      <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full flex-col divide-y divide-[#e9e9e9] lg:w-98.5">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              onClick={() => setActive(i)}
              className={`flex flex-col gap-6 py-6 text-left transition ${
                i === 0 ? "pt-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {j.logo}

                  <span
                    className={`text-2xl font-extrabold ${
                      i === active ? "text-brand" : "text-muted-2"
                    }`}
                  >
                    {j.company}
                  </span>
                </div>

                <HiArrowRight
                  size={22}
                  className={i === active ? "text-brand" : "text-muted-2"}
                />
              </div>

              <p
                className={`text-xl font-medium ${
                  i === active ? "text-ink" : "text-muted-2"
                }`}
              >
                {j.role}
              </p>
            </button>
          ))}
        </div>

        <div className="w-full rounded-[25px] bg-brand p-6 text-white sm:p-9 lg:w-167.5">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
            <div className="flex flex-col gap-1.5">
              <p className="text-base font-bold">{job.title}</p>
              <p className="text-sm font-medium">{job.period}</p>
              <p className="text-sm font-medium">{job.location}</p>
            </div>

            <p className="text-base font-bold">{job.employment}</p>
          </div>

          <div className="mt-6 flex flex-col gap-4 capitalize">
            <p className="text-justify text-xs leading-relaxed">
              {job.description}
            </p>

            <ul className="list-disc space-y-3 pl-5 text-sm">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
