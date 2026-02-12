"use client";

import BgGrad from "@/components/ui/bg-grad";

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What Are Cookies?",
      content:
        "Cookies are small text files stored on your device that help our website function and allow us to analyze traffic.",
    },
    {
      title: "Cookies We Use",
      items: [
        {
          label: "Essential Cookies",
          description:
            "Necessary for the website to function (e.g., security, load balancing).",
        },
        {
          label: "Analytics Cookies",
          description:
            "We use tools like Google Analytics to understand visitor behavior. These cookies collect anonymous data (e.g., pages visited, time spent on site) to help us engineer a better user experience.",
        },
      ],
    },
    {
      title: "Managing Cookies",
      content:
        "You can disable cookies through your browser settings. Note that disabling essential cookies may affect the functionality of our website.",
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div>
        <div className="max-w-3xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Cookie Policy
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Understand how we use cookies on our website
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {sections.map((section, index) => (
          <section key={index} className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-base leading-relaxed mb-4 text-foreground">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-base leading-relaxed text-foreground"
                  >
                    <span className="font-semibold text-primary">
                      {item.label}:
                    </span>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
