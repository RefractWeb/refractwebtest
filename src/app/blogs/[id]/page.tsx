import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import type { Metadata } from "next";
import img1 from "@/assets/blogs/1.png";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { isValidElement, type ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { type BlogPost, blogPosts, getBlogPost } from "@/lib/blog-posts";
import Image from "next/image";

type BlogPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

async function getBlogMarkdown(post: BlogPost) {
  const filePath = path.join(process.cwd(), post.contentPath);

  return readFile(filePath, "utf8");
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  const markdown = await getBlogMarkdown(post);
  const sections = getMarkdownSections(markdown);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-18%] top-[-10%] h-192 w-3xl rounded-full bg-primary2/25 blur-[180px] transform-gpu-blur" />
        <div className="absolute right-[-16%] top-32 h-176 w-176 rounded-full bg-primary/30 blur-[190px] transform-gpu-blur" />
        <div className="absolute left-[18%] top-104 h-136 w-136 rounded-full bg-secondary2/25 blur-[170px] blur-gpu" />
      </div>

      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-primary2">
            {post.eyebrow}
          </p>
          <h1 className="text-grad mx-auto max-w-4xl text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {post.excerpt}
          </p>
          {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Work with us</Link>
              </Button>
              <Button asChild variant="ghost" className="group">
                <Link href="/work">
                  Explore our services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div> */}
        </div>

        <HeroVisual title={post.title} eyebrow={post.eyebrow} />
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[5rem_minmax(0,1fr)]">
          <aside className="hidden md:block">
            <div className="sticky top-28 flex flex-col items-center gap-4 text-sm text-muted-foreground">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: X, label: "X", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-card/40 transition-colors hover:text-primary2"
                  aria-label={`Share on ${label}`}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </aside>

          <article className="mx-auto w-full max-w-3xl">
            <div className="mb-12 border-l border-white/10 pl-5 text-sm text-muted-foreground">
              <p>
                Written by {post.author} · {post.date} · {post.readTime}
              </p>
            </div>

            <nav
              className="mb-12 rounded-lg border border-white/10 bg-card/40 p-5"
              aria-label="Contents"
            >
              <p className="mb-3 text-sm font-medium text-foreground">
                Contents
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {sections.map((section) => (
                  <li key={section.slug}>
                    <a
                      href={`#${section.slug}`}
                      className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-primary2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="blog-markdown">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const heading = extractText(children);
                    const slug = slugify(heading);

                    return <h2 id={slug}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const heading = extractText(children);
                    const slug = slugify(heading);

                    return <h3 id={slug}>{children}</h3>;
                  },
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function HeroVisual({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-background/80 shadow-2xl shadow-black/40">
      <Image
        src={img1}
        alt={`${title} - ${eyebrow}`}
        width={1200}
        height={630}
        className="size-full object-cover"
      />
    </div>
  );
}

function getMarkdownSections(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace(/^##\s+/, "").trim();

      return {
        title,
        slug: slugify(title),
      };
    });
}

function extractText(value: ReactNode): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(extractText).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(value)) {
    return extractText(value.props.children);
  }

  return "";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
