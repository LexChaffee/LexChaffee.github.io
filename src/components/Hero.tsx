import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 container-width">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Data Scientist/Analyst Focused on User-Centered Insights
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Transforms complex data into clear, actionable visual intelligence through Python, R, and SQL.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link to="/projects">
            <Button size="lg" className="font-medium">
              View Projects
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="font-medium">
              About Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
