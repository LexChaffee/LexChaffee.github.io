import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Calorie Burn Prediction Model",
      description: [
        "Developed predictive models using R to estimate calorie expenditure based on activity data",
        "Analyzed exercise metrics including duration, intensity, heart rate, and activity type",
        "Built and compared multiple regression models to identify key predictors of calorie burn",
        "Created visualizations in R to communicate model performance and insights",
      ],
      tags: ["R", "Regression", "Data Analysis", "Data Visualization"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="section-spacing container-width">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of data science and analytics projects showcasing expertise in machine learning, data visualization, and statistical modeling.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
