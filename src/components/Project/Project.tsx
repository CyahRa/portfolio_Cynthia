import React, { useEffect, useState } from "react";
import "./__project.css";
import Filter from "../Components_utils/Filter";
import ProjectList from "../Components_utils/ProjectList";
import { useSearchParams } from "react-router-dom";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";

interface Project { id: number; description: string; category: string | string[]; images: string[]; technologies: string[]; link: string; title: string; }

const projects: Project[] = [
  { id: 1, title: "IINB — Immobilier Nosy Be", description: "Interface pour un service d'accompagnement immobilier à Madagascar, facilitant l'achat, la gestion locative et la revente de biens d'exception.", technologies: ["Figma", "Marketing Digital"], link: "https://www.figma.com/design/KwOv83GdPCfQG26Dm051Gg/Untitled?node-id=0-1&p=f&t=0NzwkQubwTzNUcYR-0", category: "UX/UI", images: ["assets/images/images/projets/IINB.jpg"] },
  { id: 2, title: "Diafrique", description: "Plateforme pensée pour un grossiste de produits naturels africains destinée aux professionnels, avec un parcours de demande de devis en ligne.", technologies: ["Figma", "Design Graphique"], link: "https://www.figma.com/design/PXZKAQipVM8xsUpBj149v7/Untitled?node-id=0-1&p=f&t=ruzi10E6jWoiiZT4-0", category: "UX/UI", images: ["assets/images/images/projets/Afric.jpg"] },
  { id: 3, title: "SDR — Application de rencontre", description: "Conception d'une plateforme moderne et intuitive pensée pour favoriser des rencontres authentiques au sein de la population malgache.", technologies: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Tailwind", "Figma"], link: "https://www.figma.com/design/Wla11mPOouuAV8YLzNjMkc/Untitled?node-id=0-1&t=SBQvOZUu3XUs1kn5-1", category: "UX/UI", images: ["assets/images/images/projets/SDR.jpg"] },
  { id: 4, title: "RetailSpot", description: "Optimisation de l'expérience utilisateur d'un dashboard d'administration commerciale pour simplifier la gestion des points de vente et des données denses.", technologies: ["Figma"], link: "https://www.figma.com/design/HAtptZWNZOAulX9doKOTEP/retailspot?t=VxKtMhLRQ6DwkbCh-0", category: "UX/UI", images: ["assets/images/images/projets/retailspot.jpg"] },
  { id: 5, title: "Conectim", description: "Refonte de l'interface d'une application de mise en relation de sportifs afin d'améliorer la lisibilité, la navigation et l'expérience globale.", technologies: ["Figma"], link: "https://www.figma.com/design/NLKyCkeXz1oivVYiUu5d3x/Untitled?node-id=0-1&p=f&t=T1VZuk0gtWSa6Ad1-0", category: "UX/UI", images: ["assets/images/images/projets/conectim.jpg"] },
  { id: 6, title: "Finity — Suivi de Formule 1", description: "Application mobile permettant de visualiser classements, écarts de temps et événements de course en temps réel, pour rendre les données F1 plus accessibles.", technologies: ["Flutter", "Figma"], link: "https://www.figma.com/design/Q0o2t7SUVDU3TqHtM5P4si/Untitled?t=wXVEgtHjevS8iv2j-1", category: ["UX/UI", "Developpement"], images: ["assets/images/images/projets/mobile.jpg"] },
  { id: 7, title: "Projet PHP", description: "Conception et maquettage d'une application web développée en PHP, de la réflexion sur les écrans à la réalisation de l'interface.", technologies: ["PHP", "Figma"], link: "https://www.figma.com/design/GHFRKjevXXr0XlybGbecS1/projet-php?node-id=0-1&p=f&t=VxKtMhLRQ6DwkbCh-0", category: ["UX/UI", "Developpement"], images: ["assets/images/images/projets/projet_php.jpg"] },
  { id: 8, title: "Application pour les investisseurs", description: "Application web proposant des ressources et un accompagnement pour orienter les investissements vers les secteurs adéquats à Madagascar.", technologies: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Bulma"], link: "https://invest-mada-express-app.vercel.app/", category: "Developpement", images: ["assets/images/images/projets/invest.jpg"] },
  { id: 9, title: "Application de vote digital", description: "Projet d'étude visant à digitaliser le processus de vote à Madagascar avec une expérience simple et transparente.", technologies: ["React", "Node.js", "Vercel"], link: "https://vote-chi-sepia.vercel.app/", category: "Developpement", images: ["assets/images/images/projets/isafidy.jpg"] },
  { id: 10, title: "Ancien Portfolio — Angular", description: "Première version de mon portfolio développée avec Angular, qui a servi de base à l'organisation de ma présence en ligne.", technologies: ["MongoDB", "Express", "Angular", "Node.js", "TypeScript"], link: "https://portfolio-eosin-sigma-73.vercel.app/", category: "Developpement", images: ["assets/images/images/projets/portfolioCyah.jpg"] },
  { id: 11, title: "Site pour une université", description: "Conception d'une interface intuitive et responsive pour présenter formations, actualités et services d'une université tout en respectant son identité visuelle.", technologies: ["Figma", "Adobe Illustrator"], link: "https://www.figma.com/design/QMrBMrNApIu9U3QrrxlG05/Untitled?m=auto&t=CzpE9Z8edhXkrF6J-6", category: "UX/UI", images: ["assets/images/images/projets/Site university.jpg"] },
];

const Project: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  useEffect(() => {
    const category = searchParams.get("category");
    if (["UX/UI", "Developpement", "Tous"].includes(category || "")) setSelectedCategory(category!);
  }, [searchParams]);

  return (
    <main className="projectsPage">
      <section className="projectsContent" aria-label="Liste des projets">
        <div className="projectsHero">
          <div className="projectsHeroTop">
            <p className="projectsEyebrow">MON TRAVAIL</p>
            <Filter categories={["Tous", "UX/UI", "Developpement"]} selectedCategory={selectedCategory} onFilterChange={setSelectedCategory} />
          </div>
          <h1>Projects<span>.</span></h1>
          <p className="projectsIntro">Une sélection de projets où je mêle <strong>UX/UI design</strong>, réflexion produit et développement pour créer des expériences utiles, claires et intuitives.</p>
        </div>
        <ProjectList projects={projects} selectedCategory={selectedCategory} />
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Project;
