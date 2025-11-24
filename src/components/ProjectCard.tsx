import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string[];
  tags?: string[];
  imageSrc?: string;
}

const ProjectCard = ({ title, description, tags, imageSrc }: ProjectCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-6 p-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <ul className="space-y-3 mb-6">
            {description.map((item, index) => (
              <li key={index} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Button>View Project</Button>
        </div>
        <div className="flex items-center justify-center">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
          ) : (
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Project Visualization</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
