"use client";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        'Pulse Partners AI LLC dba RefractWeb ("Refract," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or engage our services.',
    },
    {
      title: "Information We Collect",
      items: [
        {
          label: "Personal Information",
          description:
            "We collect information you voluntarily provide, such as your name, email address, phone number, and project details via our contact forms or scheduling tools.",
        },
        {
          label: "Usage Data",
          description:
            "We use third-party analytics tools (including Google Analytics) to collect non-personal information about your device, browser, IP address, and how you interact with our site.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      items: [
        "Provide and manage our services (e.g., responding to inquiries, project management).",
        "Improve our website performance and user experience.",
        "Send administrative information (e.g., invoices, contract updates).",
        "Comply with legal obligations.",
      ],
    },
    {
      title: "Data Sharing & Third Parties",
      content:
        "We do not sell your personal data. We may share data with trusted third-party service providers solely for the purpose of operating our business (e.g., hosting providers, analytics services, CRM tools). These providers are contractually obligated to keep your data confidential.",
    },
    {
      title: "California Privacy Rights (CCPA/CPRA)",
      content: "If you are a California resident, you have the right to:",
      items: [
        "Know what personal information we have collected about you.",
        "Delete your personal information.",
        "Opt-Out of the sale or sharing of your personal information. To exercise these rights, contact us at: legal@refractweb.com.",
      ],
    },
    {
      title: "Contact Us",
      content: `Pulse Partners AI LLC dba RefractWeb\n6977 Navajo Rd. #520\nSan Diego, CA 92115\nEmail: legal@refractweb.com`,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground py-20">
      {/* Header */}
      <div>
        <div className="max-w-3xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Last Updated: February 2, 2026
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
              <p className="text-base leading-relaxed whitespace-pre-line mb-4 text-foreground">
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
                    {typeof item === "string" ? (
                      <span>
                        <span className="font-semibold text-primary">•</span>{" "}
                        {item}
                      </span>
                    ) : (
                      <>
                        <span className="font-semibold text-primary">
                          {item.label}:
                        </span>{" "}
                        {item.description}
                      </>
                    )}
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
