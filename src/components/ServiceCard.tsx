import { Link } from "react-router-dom";
import { TreePine, Axe, Scissors, CircleDot, AlertTriangle, Mountain, Droplets, Shovel } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "tree-service": <TreePine className="w-10 h-10" />,
  "tree-removal": <Axe className="w-10 h-10" />,
  "tree-pruning": <Scissors className="w-10 h-10" />,
  "stump-grinding": <CircleDot className="w-10 h-10" />,
  "emergency": <AlertTriangle className="w-10 h-10" />,
  "logging": <TreePine className="w-10 h-10" />,
  "land-clearing": <Mountain className="w-10 h-10" />,
  "drainage": <Droplets className="w-10 h-10" />,
  "grading": <Shovel className="w-10 h-10" />,
};

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  iconKey: string;
}

const ServiceCard = ({ title, description, link, iconKey }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
        {iconMap[iconKey] || <TreePine className="w-10 h-10" />}
      </div>
      <h3 className="font-heading text-xl font-bold uppercase text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <span className="text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline">
        View More →
      </span>
    </Link>
  );
};

export default ServiceCard;
