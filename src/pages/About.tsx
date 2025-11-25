import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    "Python", "R", "SQL", "XGBoost", "Random Forests",
    "Decision Trees", "Clustering", "Data Visualization",
    "Fraud Detection", "Predictive Modeling", "Machine Learning"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="section-spacing container-width">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">👤</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Education</span>
                  <span className="text-muted-foreground">M.S. Analytics, NC State</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Focus</span>
                  <span className="text-muted-foreground">User-Centered Insights</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Experience</span>
                  <span className="text-muted-foreground">Data Science & ML</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Background</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a data scientist and analytics student pursuing a Master's degree in Analytics from NC State University. My focus is on transforming complex datasets into clear, actionable insights that drive decision-making.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With strong foundations in modeling, optimization, and data engineering, I specialize in fraud detection, clustering algorithms, and predictive modeling. I combine technical expertise with leadership experience gained through student organization presidency.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in user-centered analytics—creating visualizations and models that not only solve technical problems but communicate insights effectively to stakeholders. My goal is to bridge the gap between complex data and actionable business intelligence.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
