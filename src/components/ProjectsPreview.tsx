import ProjectCard from "./ProjectCard";

const ProjectsPreview = () => {
  const featuredProject = {
    title: "Calorie Burn Prediction Model",
    description: [
      "Developed predictive models using R to estimate calorie expenditure based on activity data",
      "Analyzed exercise metrics including duration, intensity, heart rate, and activity type",
      "Built and compared multiple regression models to identify key predictors of calorie burn",
      "Created visualizations in R to communicate model performance and insights",
    ],
    tags: ["R", "Regression", "Data Analysis", "Data Visualization"],
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <ProjectCard {...featuredProject} />
      </div>
    </section>
  );
};

export default ProjectsPreview;
