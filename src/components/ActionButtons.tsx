import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ActionButtons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex flex-col sm:flex-row items-center gap-6", className)}
    >
      <Link href="/contact">
        <Button size={"lg"}>Work With Us</Button>
      </Link>
      <Link href="/#services">
        <Button variant={"ghost"} className="group ">
          Explore our services
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
