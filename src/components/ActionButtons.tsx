import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ActionButtons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex flex-col sm:flex-row items-center gap-6", className)}
    >
      <Button size={"lg"}>Work With Us</Button>
      <Button variant={"ghost"} className="group ">
        Explore our services
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default ActionButtons;
