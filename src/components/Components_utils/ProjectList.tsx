import React from "react";
import "./__projectList.css";
import { motion } from "framer-motion";

interface Project { id: number; images: string[]; description: string; category: string | string[]; technologies: string[]; link: string; title: string; }
interface ProjectListProps { projects: Project[]; selectedCategory: string; }

const scrollAnimation = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const hasCategory = (project: Project, category: string) => Array.isArray(project.category) ? project.category.includes(category) : project.category === category;

const ProjectList: React.FC<ProjectListProps> = ({ projects, selectedCategory }) => {
  const filteredProjects = selectedCategory === "Tous" ? projects : projects.filter((project) => hasCategory(project, selectedCategory));
  return (
    <div className="projectContainer">
      {filteredProjects.map((project, index) => {
        const isDesignOnly = hasCategory(project, "UX/UI") && !hasCategory(project, "Developpement");
        return (
          <motion.article key={project.id} className="projectCard" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={scrollAnimation} transition={{ delay: Math.min(index * 0.04, 0.2) }}>
            <div className="projectVisual">
              <span className="projectNumber">0{project.id}</span>
              <img src={project.images[0]} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
            </div>
            <div className="projectBody">
              <h3>{project.title}</h3>
              <div className="projectTags" aria-label="Technologies utilisées">
                {project.technologies.map((technology) => <span className="projectTag" key={technology}>{technology}</span>)}
              </div>
              <p className="projectDescription">{project.description}</p>
              <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer">
                {isDesignOnly ? "Voir la maquette" : "Voir le projet"} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default ProjectList;
