import React, { useEffect, useState } from "react";
import "./__project.css";
import Filter from "../Components_utils/Filter";
import ProjectList from "../Components_utils/ProjectList";
import { useSearchParams } from "react-router-dom";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";



interface Project {
  id: number,
  description: string,
  category: string,
  images: string[],
  
  technologies: string[],
  link: string,
  title: string,
}

const projects: Project[] = [
  {
    id: 1,
    title: "Application de rencontre",
    description: "Le projet conçu est intitulé « SDR » c’est l’acronyme de « site de rencontre », comme son nom l’explique déjà, le projet vise à créer une plateforme moderne et intuitive où les utilisateurs peuvent se connecter et interagir de manière significative. Conçu pour favoriser des rencontres authentiques,spécifiquement conçue pour la population malgache.",
    technologies: ["Mongodb","Express", "React", "NodeJs","Typescript","Tailwind","Figma"] ,
    link: "https://www.figma.com/design/Wla11mPOouuAV8YLzNjMkc/Untitled?node-id=0-1&t=SBQvOZUu3XUs1kn5-1",
    category: "UX/UI" ,
    images: ["assets/images/images/projets/SDR.jpg"]
  },
  {
    id: 2,
    title: "Site pour un université ",
    description: "Conception d'un site pour un université pour mettre en avant les formations, les actualités et les services à destination des étudiants, enseignants et partenaires institutionnels. L’objectif principal était de créer une interface intuitive, responsive et visuellement cohérente avec l’identité de l’université. ",
    technologies: ["Figma", "Adobe illustrator"],
    link: "https://www.figma.com/design/QMrBMrNApIu9U3QrrxlG05/Untitled?m=auto&t=CzpE9Z8edhXkrF6J-6",
    category: "UX/UI",
    images: ["assets/images/images/projets/Site university.jpg"]
  },
  { 
    id: 6, 
    title: "Application pour les investisseur", 
    description: "C'est une application web ,qu'on a développé au cours de notre parcours à l'université, qui a pour but d'attirer les investisseurs à investir à Madagascar en leur proposant toutes les ressources exploitable afin de s'enrichir de leurs investissements, mais aussi, de leurs offrir un support accessible pour mieux les orientés vers le secteur à investir qui leur est adéquat.", 
    technologies: ["Mongodb","Express", "React", "NodeJs","Typescript","Bulma"], 
    link: "https://invest-mada-express-app.vercel.app/", 
    category: "Developpement",
    images: ["assets/images/images/projets/invest.jpg"] 
  },
  { 
    id: 7, 
    title: "Application pour voter ", 
    description: "C'est un projet d'étude qui a pour objectif d'améliorer le vote à madagascar en le digitalisant pour la transparence des votes. pour éviter les corruptions des résultats de vote.", 
    technologies: [], 
    link: "https://vote-chi-sepia.vercel.app/", 
    category: "Developpement", 
    images: ["assets/images/images/projets/isafidy.jpg"] 
  },
  { 
    id: 8, 
    title: "Site e-commerce", 
    description: "C'est une maquette d'un site e-commerce intitulé « Bbmay », c'est un site réserver uniquement pour mères et enfants. C'est un site de vente en ligne d'article pour les bébés et leurs mamans qui se situe à mayotte d'où son nom. ", 
    technologies: ["Visily","Figma","Adobe Illustartor"], 
    link: "", 
    category: "UX/UI", 
    images: ["assets/images/images/projets/bbmay.jpg"] 
  },
  { 
    id: 9, 
    title: "Mon ancien portfolio", 
    description: "Mon ancien portfolio qui à la différence du nouveau a été developpé en Angular. Ce portfolio m'a permis de poser les bases de ma  présence en ligne et de prendre conscience des aspects à améliorer, comme l'esthétique, l'organisation et l'interactivité.", 
    technologies: ["Mongodb","Express", "Angular", "NodeJs","Typescript"], 
    link: "https://portfolio-eosin-sigma-73.vercel.app/", 
    category: "Developpement", 
    images: ["assets/images/images/projets/portfolioCyah.jpg"] 
  },
  { 
    id: 10, 
    title: "Design d'une application mobile de Formule 1", 
    description: "C'est une application mobile qui montre tous les actualités, et tous ce qu'il faut savoir sur la formule 1. Il y a aussi les courses direct et les positions en temps réel des pilotes. ", 
    technologies: ["Figma","Adobe Illustartor","Photoshop"], 
    link: "https://www.figma.com/design/Q0o2t7SUVDU3TqHtM5P4si/Untitled?t=wXVEgtHjevS8iv2j-1", 
    category: "UX/UI", 
    images: ["assets/images/images/projets/mobile.jpg"] 
  },

]


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
