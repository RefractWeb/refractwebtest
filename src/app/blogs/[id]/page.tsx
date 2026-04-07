import { readFile } from "node:fs/promises";
import path from "node:path";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { isValidElement, type ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { type BlogPost, blogPosts, getBlogPost } from "@/lib/blog-posts";
import SmoothContainer from "@/lib/SmoothContainer";

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
    <SmoothContainer>
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
                {["ig", "in", "x", "f", "p"].map((item) => (
                  <a
                    key={item}
                    href="https://refractweb.com"
                    className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-card/40 uppercase transition-colors hover:text-primary2"
                    aria-label={`Share on ${item}`}
                  >
                    {item}
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
    </SmoothContainer>
  );
}

function HeroVisual({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-lg border border-white/10 bg-background/80 p-4 shadow-2xl shadow-black/40 md:p-8">
      <div className="relative h-68 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_30%_30%,var(--primary)_0%,transparent_26%),radial-gradient(circle_at_70%_45%,var(--secondary2)_0%,transparent_28%),linear-gradient(135deg,var(--card),var(--background)_68%)] md:h-104">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute left-1/2 top-1/2 flex w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="-mr-8 rotate-[-13deg] rounded-lg border border-white/20 bg-[radial-gradient(circle_at_35%_25%,var(--primary2),var(--primary))] p-8 shadow-2xl shadow-black/40 md:p-12">
            <span className="block text-4xl font-bold text-white md:text-7xl">
              R
            </span>
          </div>
          <div className="z-10 rounded-lg border border-white/20 bg-[radial-gradient(circle_at_50%_25%,var(--primary2),var(--primary)_72%)] p-8 shadow-2xl shadow-black/50 md:p-12">
            <span className="block text-4xl font-bold text-white md:text-7xl">
              AI
            </span>
          </div>
          <div className="-ml-8 rotate-13 rounded-lg border border-white/20 bg-[radial-gradient(circle_at_40%_20%,#ffffff,var(--primary2)_42%,var(--primary))] p-8 shadow-2xl shadow-black/40 md:p-12">
            <span className="block text-4xl font-bold text-background md:text-7xl">
              *
            </span>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-1 rounded-lg border border-white/10 bg-background/55 p-4 backdrop-blur-md md:left-8 md:right-auto md:w-80">
          <span className="text-xs uppercase tracking-[0.24em] text-primary2">
            {eyebrow}
          </span>
          <span className="line-clamp-2 text-sm font-medium text-white">
            {title}
          </span>
        </div>
      </div>
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
