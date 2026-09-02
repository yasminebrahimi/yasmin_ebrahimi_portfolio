import { PiGraduationCapDuotone } from "react-icons/pi";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-16 px-6 py-24 lg:px-0"
    >
      <h2 className="text-center text-[32px] font-bold capitalize tracking-wide sm:text-[48px] lg:text-[70px]">
        Let&apos;s work <span className="text-brand">Education!</span>
      </h2>

      <div className="relative w-full">
        <div
          className="relative flex min-h-[186px] items-center justify-center overflow-hidden rounded-[25px] bg-brand px-8 py-8 text-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 22px)",
          }}
        >
          <p className="max-w-[764px] text-base font-medium capitalize text-white sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            inry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="relative mx-auto -mt-16 w-[95%] rounded-[25px] bg-white p-6 shadow-[0px_0px_2px_rgba(150,133,231,0.24)] sm:p-10 lg:w-[1072px]">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex size-[89px] shrink-0 items-center justify-center rounded-2xl bg-brand/10">
              <PiGraduationCapDuotone size={52} className="text-brand" />
            </div>
            <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
              <p className="text-[15px] font-bold text-brand">
                Bachelor&apos;s of Business Information Technology
              </p>
              <p className="text-base text-ink sm:text-[17px]">
                August 2023 - May 2026
              </p>
              <p className="text-xs text-muted-2">
                Grade: Associate&apos;s degree
              </p>
              <p className="text-sm font-semibold text-ink">
                HAMK — Häme University of Applied Sciences
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm capitalize leading-relaxed text-ink sm:text-left sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            inry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting inry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </section>
  );
}
