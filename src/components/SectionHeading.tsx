type SectionHeadingProps = {
  id?: string;
  children: React.ReactNode;
};

function TitleOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <span className="flex shrink-0 items-center gap-1.5 sm:gap-2" aria-hidden="true">
      {flip ? (
        <>
          <span className="h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
          <span className="h-px w-6 bg-gold sm:w-14 md:w-20" />
        </>
      ) : (
        <>
          <span className="h-px w-6 bg-gold sm:w-14 md:w-20" />
          <span className="h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
        </>
      )}
    </span>
  );
}

/** Centered Poppins section title with gold line + circle ornaments */
export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <TitleOrnament />
      <h2
        id={id}
        className="whitespace-nowrap text-center font-[family-name:var(--font-poppins)] text-[22px] font-bold leading-none tracking-[-0.02em] text-[#071846] sm:text-[32px] md:text-[40px]"
      >
        {children}
      </h2>
      <TitleOrnament flip />
    </div>
  );
}
