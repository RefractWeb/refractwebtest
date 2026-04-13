import type { StaticImageData } from "next/image";
import Work2 from "@/assets/blogs/Frame 2147225119.png";
import Work1 from "@/assets/blogs/Frame 2147225119(1).png";
import Work3 from "@/assets/blogs/Frame 2147225119(2).png";
import Work4 from "@/assets/blogs/Frame 2147225119(3).png";
import Work5 from "@/assets/blogs/Frame 2147225119(4).png";

export type BlogPost = {
  id: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  contentPath: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "geo-visibility",
    title: 'GEO Is Changing What "Visibility" Means',
    eyebrow: "GEO",
    excerpt:
      "Ranking is not the goal anymore. Being included in the answer is what actually drives visibility now.",
    author: "Adam Guarino",
    date: "April 2026",
    readTime: "6 min read",
    image: Work2,
    contentPath: "src/content/blogs/geo-visibility.md",
  },
  {
    id: "website-losing-leads",
    title: "Your Website Is Losing You Leads Before Anyone Fills Out a Form",
    eyebrow: "Conversion & Design",
    excerpt:
      "The leak is not always at the top of the funnel. It is often in the middle, where visitors leave before your offer gets a chance.",
    author: "Adam Guarino",
    date: "April 2026",
    readTime: "9 min read",
    image: Work1,
    contentPath: "src/content/blogs/website-losing-leads.md",
  },
  {
    id: "design-craft",
    title: "Most Agencies Stop at Good Enough. We Don't Know Where That Is.",
    eyebrow: "Design & Craft",
    excerpt:
      "Fine websites are everywhere. The sites that perform are built through hundreds of better decisions, not a template with better colors.",
    author: "Adam Guarino",
    date: "April 2026",
    readTime: "7 min read",
    image: Work5,
    contentPath: "src/content/blogs/design-craft.md",
  },
  {
    id: "mobile-traffic",
    title: "64% of Your Visitors Are on Their Phone. Is Your Site Ready?",
    eyebrow: "Mobile & Performance",
    excerpt:
      "Mobile optimization is not a bonus feature. It is the baseline, and most websites are still failing it.",
    author: "Adam Guarino",
    date: "April 2026",
    readTime: "8 min read",
    image: Work3,
    contentPath: "src/content/blogs/mobile-traffic.md",
  },
  {
    id: "site-credibility",
    title: "Your Site Has 50 Milliseconds to Prove It's Worth Trusting",
    eyebrow: "GEO & Web Credibility",
    excerpt:
      "Before visitors read a single word, visual credibility has already shaped whether they will stay, trust, and keep listening.",
    author: "Adam Guarino",
    date: "April 4, 2026",
    readTime: "8 min read",
    image: Work4,
    contentPath: "src/content/blogs/site-credibility.md",
  },
];

export function getBlogPost(id: string) {
  return blogPosts.find((post) => post.id === id);
}
