import React, { useEffect, useState } from "react";
import "./__project.css";
import Filter from "../Components_utils/Filter";
import ProjectList from "../Components_utils/ProjectList";
import { useSearchParams } from "react-router-dom";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";



interface Project {
  id: number,
  description: string,
  category: string | string[],
  images: string[],
  
  technologies: string[],
  link: string,
  title: string,
}

const projects: Project[] = [
  {
    id: 1,
    title: "IINB - Immobilier Nosy Be",
    description: "Interface pour un service d'accompagnement immobilier à Madagascar, facilitant l'achat, la gestion locative et la revente de biens d'exception (villas, terrains).",
    technologies: ["Figma", "Marketing Digital"],
    link: "https://www.figma.com/design/KwOv83GdPCfQG26Dm051Gg/Untitled?node-id=0-1&p=f&t=0NzwkQubwTzNUcYR-0",
    category: "UX/UI",
    images: ["assets/images/images/projets/IINB.jpg"]
  },
  {
    id: 2,
    title: "Diafrique",
    description: "Conception d'une plateforme pour un grossiste de produits naturels africains (fruits frais, séchés, épices et féculents) destinée aux professionnels avec système de devis en ligne.",
    technologies: ["Figma", "Design Graphique"],
    link: "https://www.figma.com/design/PXZKAQipVM8xsUpBj149v7/Untitled?node-id=0-1&p=f&t=ruzi10E6jWoiiZT4-0",
    category: "UX/UI",
    images: ["assets/images/images/projets/Afric.jpg"]
  },
  {
    id: 3,
    title: "Application de rencontre",
    description: "Le projet conçu est intitulé « SDR » c’est l’acronyme de « site de rencontre ». Il vise à créer une plateforme moderne et intuitive conçue spécifiquement pour la population malgache afin de favoriser des rencontres authentiques.",
    technologies: ["Mongodb", "Express", "React", "NodeJs", "Typescript", "Tailwind", "Figma"],
    link: "https://www.figma.com/design/Wla11mPOouuAV8YLzNjMkc/Untitled?node-id=0-1&t=SBQvOZUu3XUs1kn5-1",
    category: "UX/UI",
    images: ["assets/images/images/projets/SDR.jpg"]
  },
  {
    id: 4,
    title: "RetailSpot",
    description: "Optimisation de l'expérience utilisateur pour un dashboard d'administration commerciale, simplifiant la gestion des points de vente et des données denses.",
    technologies: ["Figma"],
    link: "https://www.figma.com/design/HAtptZWNZOAulX9doKOTEP/retailspot?t=VxKtMhLRQ6DwkbCh-0",
    category: "UX/UI",
    images: ["assets/images/images/projets/retailspot.jpg"]
  },
  {
    id: 5,
    title: "Conectim",
    description: "Refonte complète de l'interface d'une application de mise en relation de sportifs pour améliorer la lisibilité et la navigation.",
    technologies: ["Figma"],
    link: "https://www.figma.com/design/NLKyCkeXz1oivVYiUu5d3x/Untitled?node-id=0-1&p=f&t=T1VZuk0gtWSa6Ad1-0",
    category: "UX/UI",
    images: ["assets/images/images/projets/conectim.jpg"]
  },
  {
    id: 6,
    title: "Finity - Suivi de Formule 1",
    description: "Application mobile permettant de visualiser les classements, écarts de temps et événements de course en temps réel. Développée pour rendre les données de F1 plus accessibles aux fans.",
    technologies: ["Flutter", "Figma"],
    link: "https://www.figma.com/design/Q0o2t7SUVDU3TqHtM5P4si/Untitled?t=wXVEgtHjevS8iv2j-1",
    category: ["UX/UI", "Developpement"],
    images: ["assets/images/images/projets/mobile.jpg"]
  },
  {
    id: 7,
    title: "Projet PHP",
    description: "Conception et maquettage d'une application web développée en PHP.",
    technologies: ["PHP", "Figma"],
    link: "https://www.figma.com/design/GHFRKjevXXr0XlybGbecS1/projet-php?node-id=0-1&p=f&t=VxKtMhLRQ6DwkbCh-0",
    category: ["UX/UI", "Developpement"],
    images: ["assets/images/images/projets/projet_php.jpg"]
  },
  {
    id: 8,
    title: "Application pour les investisseurs",
    description: "Application web proposant des ressources exploitables et un support d'orientation pour attirer les investissements vers les secteurs adéquats à Madagascar.",
    technologies: ["Mongodb", "Express", "React", "NodeJs", "Typescript", "Bulma"],
    link: "https://invest-mada-express-app.vercel.app/",
    category: "Developpement",
    images: ["assets/images/images/projets/invest.jpg"]
  },
  {
    id: 9,
    title: "Application de vote digital",
    description: "Projet d'étude visant à digitaliser le processus de vote à Madagascar pour garantir la transparence et lutter contre la corruption.",
    technologies: ["React", "NodeJs", "Vercel"],
    link: "https://vote-chi-sepia.vercel.app/",
    category: "Developpement",
    images: ["assets/images/images/projets/isafidy.jpg"]
  },
  {
    id: 10,
    title: "Ancien Portfolio (Angular)",
    description: "Première version de mon portfolio développée avec Angular, ayant servi de base pour l'organisation de ma présence en ligne.",
    technologies: ["Mongodb", "Express", "Angular", "NodeJs", "Typescript"],
    link: "https://portfolio-eosin-sigma-73.vercel.app/",
    category: "Developpement",
    images: ["assets/images/images/projets/portfolioCyah.jpg"]
  },
  {
    id: 11,
    title: "Site pour une université",
    description: "Conception d'une interface intuitive et responsive pour mettre en avant les formations, actualités et services d'une université, tout en respectant son identité visuelle.",
    technologies: ["Figma", "Adobe illustrator"],
    link: "https://www.figma.com/design/QMrBMrNApIu9U3QrrxlG05/Untitled?m=auto&t=CzpE9Z8edhXkrF6J-6",
    category: "UX/UI",
    images: ["assets/images/images/projets/Site university.jpg"]
  }
];


const Project: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous ")
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="c">
      <Filter categories={["Tous ", "UX/UI", "Developpement"]}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      <ProjectList projects={projects} selectedCategory={selectedCategory} />
      <ScrollToTopButton />
    </div>
  )
}

export default Project
