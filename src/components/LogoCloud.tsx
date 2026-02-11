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

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full pb-6 pt-10 max-w-8xl mx-auto">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="group relative mt-6 flex gap-6 overflow-hidden p-2 mask-x-from-80%">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-5 md:gap-8"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-8 w-28 px-2"
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
