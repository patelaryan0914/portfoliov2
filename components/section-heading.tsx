import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  children: React.ReactNode;
};

export default function SectionHeading({
  eyebrow,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
    </div>
  );
}
