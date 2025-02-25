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
    technologies: ["Mongodb","Express", "React", "NodeJs","Typescript","Tailwind"] ,
    link: "",
    category: "Developpement",
    images: ["src/assets/images/images/projets/SDR.png"]
  },
  {
    id: 2,
    title: "Autocollant ",
    description: "Conception d'un autocollant unique pour Maresamada,un site de réservation en ligne spécialement pour madagascar, reflétant l'identité visuelle de la marque.Elle a été conçue dans le cadre d'un mise en valeur du site afin d'attirer les différents hebergements à s'inscrire dans le plateforme, Cet autocollant à été ",
    technologies: ["Photoshop", "Adobe illustrator"],
    link: "",
    category: "UX/UI",
    images: ["src/assets/images/images/projets/autocollant-maresa.png"]
  },
  {
    id: 3,
    title: "Flyers",
    description: "Ce flyers a été conçu pour les partenaires de Maresamada afin de leur offrir une présentation claire et attrayante du site et de ses missions.L'objectif principale était de communiquer efficacement sur l'identité et les valeurs de Maresamada tout rn mettant en avant ces objectifs et ses services.",
    technologies: ["Photoshop", "Adobe illustrator","Visily"],
    link: "",
    category: "UX/UI",
    images: ["src/assets/images/images/projets/flyers.png"]
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Ce projet fait l'objet de création d'un portfolio pour un client, il montre les postes que le client à occuper et aussi les services que le client a à offrir avec les réalisation de ce dernier dans différent domaine.",
    technologies: ["Html","Css","Bootstrap"],
    link: "",
    category: "Developpement", 
    images: ["src/assets/images/images/projets/portfolio.png"]
  },
  { 
    id: 5, 
    title: "Application pour les investisseur", 
    description: "C'est une application web ,qu'on a développé au cours de notre parcours à l'université, qui a pour but d'attirer les investisseurs à investir à Madagascar en leur proposant toutes les ressources exploitable afin de s'enrichir de leurs investissements, mais aussi, de leurs offrir un support accessible pour mieux les orientés vers le secteur à investir qui leur est adéquat.", 
    technologies: ["Mongodb","Express", "React", "NodeJs","Typescript","Bulma"], 
    link: "https://invest-mada-express-app.vercel.app/", 
    category: "Developpement",
    images: ["src/assets/images/images/projets/invest.png"] 
  },
  { 
    id: 6, 
    title: "Application pour voter ", 
    description: "C'est un projet d'étude qui a pour objectif d'améliorer le vote à madagascar en le digitalisant pour la transparence des votes. pour éviter les corruptions des résultats de vote.", 
    technologies: [], 
    link: "https://vote-chi-sepia.vercel.app/", 
    category: "Developpement", 
    images: ["src/assets/images/images/projets/isafidy.png"] 
  },
  { 
    id: 7, 
    title: "Site e-commerce", 
    description: "C'est une maquette d'un site e-commerce intitulé « Bbmay », c'est un site réserver uniquement pour mères et enfants. C'est un site de vente en ligne d'article pour les bébés et leurs mamans qui se situe à mayotte d'où son nom. ", 
    technologies: ["Visily","Figma","Adbe Illustartor"], 
    link: "", 
    category: "UX/UI", 
    images: ["src/assets/images/images/projets/bbmay.png"] 
  },
  { 
    id: 8, 
    title: "Mon ancien portfolio", 
    description: "Mon ancien portfolio qui à la différence du nouveau a été developpé en Angular. Ce portfolio m'a permis de poser les bases de ma  présence en ligne et de prendre conscience des aspects à améliorer, comme l'esthétique, l'organisation et l'interactivité.", 
    technologies: ["Mongodb","Express", "Angular", "NodeJs","Typescript"], 
    link: "https://portfolio-eosin-sigma-73.vercel.app/", 
    category: "Developpement", 
    images: ["src/assets/images/images/projets/portfolioCyah.png"] 
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