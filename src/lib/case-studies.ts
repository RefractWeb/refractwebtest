import type { StaticImageData } from "next/image";
import img1 from "@/assets/works/Screenshot_2026-04-13_22-43-36.png";
import img2 from "@/assets/works/Screenshot_2026-04-13_22-43-50.png";
import img3 from "@/assets/works/Screenshot_2026-04-13_22-44-09.png";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  video?: string;
  siteUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "left-coast-design-studio",
    title: "Left Coast Design Studio",
    category: "Branding",
    description:
      "Breaking down what drives modern brands across design, systems, and digital experience.",
    image: img1,
    video: "/thumbnail.webm",
    siteUrl: "#",
  },
  {
    slug: "cobe-construction",
    title: "Cobe Construction",
    category: "Branding",
    description:
      "Premier Bay Area commercial construction for high performance spaces.",
    image: img2,
    video: "/thumbnail.webm",
  },
  {
    slug: "kirusushi",
    title: "Kirusushi",
    category: "Branding",
    description: "Precision Crafted Sushi for Elevated Dining Experiences.",
    image: img3,
    video: "/thumbnail.webm",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
