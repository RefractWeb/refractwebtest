import BgGrad from "@/components/ui/bg-grad";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="relative overflow-hidden">
      <BgGrad />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10 text-center">
        <h1 className="text-6xl xl:text-9xl font-bold text-grad mb-4">404</h1>
        <p className="text-xl text-muted-foreground/70 mb-8">Page Not Found</p>
        <Link href="/" className="button">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default notFound;
