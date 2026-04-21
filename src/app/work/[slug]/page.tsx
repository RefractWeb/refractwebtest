import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <div className="absolute hidden md:block inset-0 -z-10 pointer-events-none">
        <div className="absolute pointer-events-none top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[200px] transform-gpu-blur" />
        <div className="absolute pointer-events-none top-[-14%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#d6795a] opacity-45 blur-[230px] transform-gpu-blur" />
        <div className="absolute pointer-events-none -bottom-40 left-[10%] size-150 rounded-full bg-[#d6795a] opacity-40 blur-[200px] blur-gpu" />
      </div>

      <div
        className="absolute inset-0 -z-10 mask-radial-at-top mask-radial-to-60% opacity-60 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />

      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="flex flex-col items-center justify-center gap-[33px] text-center">
          <h1
            className="bg-clip-text font-bold text-transparent text-4xl md:text-[61px] tracking-[-2px] md:tracking-[-4.27px] leading-[1.05] md:leading-[normal] md:whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(126.858deg, rgb(255, 255, 255) 0%, rgb(152, 152, 152) 43.851%, rgb(255, 255, 255) 72.748%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {study.title}
          </h1>

          <p
            className="bg-clip-text font-normal text-transparent text-base md:text-[25px] tracking-[-0.5px] md:tracking-[-1.75px] leading-snug md:leading-[normal] max-w-2xl md:max-w-none"
            style={{
              backgroundImage:
                "linear-gradient(126.858deg, rgb(255, 255, 255) 0%, rgb(152, 152, 152) 43.851%, rgb(255, 255, 255) 72.748%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {study.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[10px] p-[10px]">
            {study.siteUrl && (
              <Link
                href={study.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-[51px] items-center justify-center rounded-[40px] border border-solid border-white px-[50px] py-[10px] text-[16px] tracking-[-1.12px] text-white shadow-[0px_4px_83.9px_0px_rgba(245,151,104,0.3),0px_4px_6px_0px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-[2px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 105%, rgba(245,151,104,1) 0%, rgba(211,122,85,1) 50%, rgba(176,93,65,1) 100%)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[-1px] rounded-[inherit] shadow-[inset_0px_-6px_4px_0px_rgba(0,0,0,0.2),inset_0px_1px_0px_0px_rgba(255,255,255,0.4)]"
                />
                <span className="relative">Check out the site</span>
              </Link>
            )}

            <Link
              href="/work"
              className="inline-flex h-[51px] items-center justify-center gap-[5px] rounded-[10px] p-[10px] text-[16px] tracking-[-1.12px] text-white transition-colors hover:text-primary2"
            >
              Explore other projects
              <ChevronRight className="size-[12px] h-[24px] w-[12px]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
