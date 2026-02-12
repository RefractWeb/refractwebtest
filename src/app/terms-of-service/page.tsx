"use client";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing the RefractWeb website or engaging our services, you agree to these Terms of Service. These Terms apply to all visitors, clients, and others who access the service.",
    },
    {
      title: "Services & Engagements",
      content:
        "Specific deliverables, timelines, and fees will be defined in a separate Statement of Work (SOW), Master Services Agreement (MSA), or Retainer Agreement. In the event of a conflict between these Terms and a specific SOW, the terms of the SOW shall control.",
    },
    {
      title: "Payment Terms",
      items: [
        {
          label: "Milestones",
          description:
            "Unless otherwise specified in an SOW, fixed-bid projects are billed on a milestone basis (e.g., 15% upon signing, 15% upon Phase 1 start, etc.).",
        },
        {
          label: "Retainers",
          description:
            "Retainer services are billed in advance on a recurring monthly basis.",
        },
        {
          label: "Invoices",
          description:
            "Invoices are due upon receipt unless net terms are explicitly specified in your contract.",
        },
        {
          label: "Refunds",
          description:
            "Refund policies are governed strictly by your specific SOW or Contract. In the absence of such an agreement, all fees paid are non-refundable.",
        },
      ],
    },
    {
      title: "Intellectual Property (IP) Ownership",
      items: [
        {
          label: "Refract Background Technology",
          description:
            'Refract retains all right, title, and interest in our pre-existing code, libraries, tools, and methodologies ("Background Tech").',
        },
        {
          label: "Client Deliverables",
          description:
            "Upon full and final payment of all fees, Refract grants the Client ownership of the unique front-end design and code created specifically for the Client. Until full payment is received, Refract retains ownership of all deliverables.",
        },
        {
          label: "License",
          description:
            "Refract grants the Client a perpetual, non-exclusive license to use any Background Tech incorporated into the deliverables solely for the operation of the project.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Refract's total liability for any claim arising out of or relating to these Terms or our services—whether in contract, tort, or otherwise—shall be limited to the total amount of fees paid by the Client to Refract in the six (6) months preceding the claim. In no event shall Refract be liable for indirect, incidental, special, or consequential damages (including lost profits or data).",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify and hold Pulse Partners AI LLC harmless from any claims arising out of your use of our deliverables, your content, or your violation of these Terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by the laws of the State of California. Any disputes shall be resolved in the state or federal courts located in San Diego County, California.",
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Header */}
      <div>
        <div className="max-w-3xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Terms of Service
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
              <p className="text-base leading-relaxed mb-4 text-foreground">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="space-y-4">
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
