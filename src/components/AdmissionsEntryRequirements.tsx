import SectionHeading from "@/components/SectionHeading";

const documents = [
  "Completed Application Form",
  "Copy of Birth Certificate / Passport",
  "Copy of Student Passport (if applicable)",
  "Recent Passport Size Photographs",
  "Previous School Reports (last 2 years)",
  "Transfer Certificate (if applicable)",
  "Parent/Guardian ID Copy",
  "Health Records & Immunization Report",
];

const ageGuide = [
  { grade: "KG 1", age: "3 - 4 Years" },
  { grade: "KG 2", age: "4 - 5 Years" },
  { grade: "Grade 1", age: "5 - 6 Years" },
  { grade: "Grade 2", age: "6 - 7 Years" },
  { grade: "Grade 3", age: "7 - 8 Years" },
  { grade: "Grade 4", age: "8 - 9 Years" },
  { grade: "Grade 5", age: "9 - 10 Years" },
  { grade: "Grade 6", age: "10 - 11 Years" },
  { grade: "Grade 7", age: "11 - 12 Years" },
  { grade: "Grade 8", age: "12 - 13 Years" },
  { grade: "Grade 9 (IGCSE 1)", age: "13 - 14 Years" },
  { grade: "Grade 10 (IGCSE 2)", age: "14 - 15 Years" },
];

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-white"
      aria-hidden="true"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12.5l5 5L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const subHeadingClass =
  "font-[family-name:var(--font-poppins)] text-[22px] font-bold leading-none tracking-[-0.02em] text-[#071846] sm:text-[26px] md:text-[28px]";

export default function AdmissionsEntryRequirements() {
  return (
    <section
      id="age-requirements"
      className="scroll-mt-28 bg-white py-12 sm:py-14 md:py-16"
      aria-labelledby="entry-requirements-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading id="entry-requirements-heading">
          Entry Requirements
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h3 className={subHeadingClass}>Eligibility & Requirements</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-slate sm:text-[15px]">
              To ensure a smooth application process, please prepare the
              following documents:
            </p>
            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
              {documents.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] text-[#071846] sm:text-[15px]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-center ${subHeadingClass}`}>
              Age Guide by Grade
            </h3>
            <div className="mt-5 overflow-hidden rounded-lg border border-navy/10 sm:mt-6">
              <table className="w-full border-collapse text-left text-[13px] sm:text-[14px]">
                <thead>
                  <tr className="bg-[#071846] text-white">
                    <th className="px-4 py-3 font-semibold sm:px-5">
                      Grade Level
                    </th>
                    <th className="px-4 py-3 text-right font-semibold sm:px-5">
                      Age Range (as of 31st August)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ageGuide.map((row, index) => (
                    <tr
                      key={row.grade}
                      className={
                        index % 2 === 0 ? "bg-[#f5f6f8]" : "bg-white"
                      }
                    >
                      <td className="border-t border-navy/5 px-4 py-2.5 font-medium text-[#071846] sm:px-5 sm:py-3">
                        {row.grade}
                      </td>
                      <td className="border-t border-navy/5 px-4 py-2.5 text-right text-slate sm:px-5 sm:py-3">
                        {row.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
