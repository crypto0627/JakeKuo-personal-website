import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden hover:glow transition-all duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-black/50 backdrop-blur-sm text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex-1" />
        <div className="flex justify-between mt-2">
          <Button variant="outline" size="sm" className="rounded-3xl" asChild>
            <Link href={project.github} target="_blank">
              <Github className="mr-1 h-3 w-3" /> Code
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-3xl" asChild>
            <Link href={project.demo} target="_blank">
              <ExternalLink className="mr-1 h-3 w-3" /> Demo
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
