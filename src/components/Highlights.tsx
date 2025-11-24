import { TrendingUp, Plus, ArrowUpRight, Target } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "M.S. in Analytics",
    subtitle: "(NC State)",
  },
  {
    icon: Plus,
    title: "Strong modeling, optimization, and data engineering foundation",
    subtitle: "",
  },
  {
    icon: ArrowUpRight,
    title: "Experience with fraud detection, clustering, and predictive modeling",
    subtitle: "",
  },
  {
    icon: Target,
    title: "Leadership and communication through student-organization presidency",
    subtitle: "",
  },
];

const Highlights = () => {
  return (
    <section className="py-16 md:py-20 container-width">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-accent">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold mb-1">{highlight.title}</h3>
              {highlight.subtitle && (
                <p className="text-sm text-muted-foreground">{highlight.subtitle}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
