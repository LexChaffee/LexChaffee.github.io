import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Elevate — Anomaly Detection & Fraud Modeling (Practicum)",
      description: [
        "Cleaned and merged 7 datasets (200k+ rows, 1500+ variables)",
        "Developed tree-based models: decision trees, random forests, XGBoost",
        "Built clustering workflows to uncover fraud linkages",
        "Created visualizations to communicate model and network insights to stakeholders",
      ],
      tags: ["Python", "XGBoost", "Clustering", "Data Visualization"],
    },
    {
      title: "Customer Segmentation Analysis",
      description: [
        "Applied K-means and hierarchical clustering to segment 50k+ customer records",
        "Identified 5 distinct customer personas for targeted marketing",
        "Reduced customer acquisition cost by 23% through targeted campaigns",
        "Created interactive dashboards for real-time segment monitoring",
      ],
      tags: ["Python", "Scikit-learn", "Tableau", "SQL"],
    },
    {
      title: "Predictive Maintenance System",
      description: [
        "Built LSTM and Random Forest models for equipment failure prediction",
        "Achieved 87% accuracy in predicting failures 48 hours in advance",
        "Processed time-series sensor data from 200+ industrial devices",
        "Reduced unplanned downtime by 34% in pilot implementation",
      ],
      tags: ["Python", "TensorFlow", "Time Series", "IoT"],
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
