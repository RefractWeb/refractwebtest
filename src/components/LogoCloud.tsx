import { cn } from "@/lib/utils";

const logos = [
  {
    name: "Vercel",
    url: "/techs/vercel.svg",
  },
  {
    name: "AWS",
    url: "/techs/aws.svg",
  },
  {
    name: "React",
    url: "/techs/react.svg",
  },
  {
    name: "Hotjar",
    url: "/techs/hotjar.svg",
  },
  {
    name: "Blender",
    url: "/techs/blender.svg",
  },

  {
    name: "Figma",
    url: "/techs/figma.svg",
  },
  {
    name: "Hostinger",
    url: "/techs/hostinger.svg",
  },
  {
    name: "GSAP",
    url: "/techs/gsap.svg",
  },
  {
    name: "Notion",
    url: "/techs/notion.svg",
  },
];

const AnimatedLogoCloud = ({ className }: { className?: string }) => {
  return (
    <div
      draggable={false}
      className={cn(
        "w-full pb-6 pt-10 max-w-8xl mx-auto select-none",
        className,
      )}
    >
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="group relative mt-6 flex gap-6 overflow-hidden p-2 mask-x-from-80%">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                draggable={false}
                key={index}
                className="flex cursor-pointer shrink-0 animate-logo-cloud flex-row justify-around gap-5 md:gap-8"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    draggable={false}
                    className="h-8 w-30 select-none px-2 hover:scale-110 transition-all duration-700 pointer-events-none"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
