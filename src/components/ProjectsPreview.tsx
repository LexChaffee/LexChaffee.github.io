import ProjectCard from "./ProjectCard";

const ProjectsPreview = () => {
  const featuredProject = {
    title: "Elevate — Anomaly Detection & Fraud Modeling (Practicum)",
    description: [
      "Cleaned and merged 7 datasets (200k+ rows, 1500+ variables)",
      "Developed tree-based models: decision trees, random forests, XGBoost",
      "Built clustering workflows to uncover fraud linkages",
      "Created visualizations to communicate model and network insights to stakeholders",
    ],
    tags: ["Python", "XGBoost", "Clustering", "Data Visualization"],
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
