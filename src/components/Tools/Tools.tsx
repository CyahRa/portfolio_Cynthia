import React, { useEffect, useState } from "react";
import "./__tools.css";
import SkillsList from "../Components_utils/SkillsList";
import { useSearchParams } from "react-router-dom";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";
import FilterSkills from "../Components_utils/FilterSkills";

interface Skill {
  id: number,
  description: string,
  category: string,
  icon: JSX.Element[];
}
const FigmaIcon = () => <img src="/assets/icon/figma.svg" alt="Figma" style={{ width: '80px' }} />;
const PsIcon = () => <img src="/assets/icon/photoshop.svg" alt="Photoshop" style={{ width: '80px' }} />;
const AiIcon = () => <img src="/assets/icon/illustrator.svg" alt="illustrator" style={{ width: '80px' }} />;
const VisilyIcon = () => <img src="/assets/icon/visily.svg" alt="visily" style={{ width: '80px' }} />;
const AngularIcon = () => <img src="/assets/icon/AngularJS.svg" alt="Angular" style={{ width: '80px' }} />;
const ReactIcon = () => <img src="/assets/icon/React.svg" alt="react" style={{ width: '80px' }} />;
const VueIcon = () => <img src="/assets/icon/vue.svg" alt="vue" style={{ width: '80px' }} />;
const JsIcon = () => <img src="/assets/icon/JavaScript.svg" alt="JavaScript" style={{ width: '80px' }} />;
const CssIcon = () => <img src="/assets/icon/CSS3.svg" alt="CSS3" style={{ width: '80px' }} />;
const HtmlIcon = () => <img src="/assets/icon/HTML5.svg" alt="HTML5" style={{ width: '80px' }} />;
const SassIcon = () => <img src="/assets/icon/Sass.svg" alt="Sass" style={{ width: '80px' }} />;
const BulmaIcon = () => <img src="/assets/icon/Bulma.svg" alt="Bulma" style={{ width: '80px' }} />;
const BootsIcon = () => <img src="/assets/icon/Bootstrap.svg" alt="Bootstrap" style={{ width: '80px' }} />;
const TailwindIcon = () => <img src="/assets/icon/Tailwind CSS.svg" alt="Tailwind CSS" style={{ width: '80px' }} />;
const NodeIcon = () => <img src="/assets/icon/Node.js.svg" alt="Node.js" style={{ width: '80px' }} />;
const PHPIcon = () => <img src="/assets/icon/PHP.svg" alt="" style={{ width: '80px' }} />;
const LaravelIcon = () => <img src="/assets/icon/Laravel.svg" alt="Laravel" style={{ width: '80px' }} />;
const ExpressIcon = () => <img src="/assets/icon/Express.svg" alt="Express" style={{ width: '80px' }} />;
const MysqlIcon = () => <img src="/assets/icon/MySQL.svg" alt="MySQL" style={{ width: '80px' }} />;
const MongoIcon = () => <img src="/assets/icon/MongoDB.svg" alt="MongoDB" style={{ width: '80px' }} />;
const PostgreIcon = () => <img src="/assets/icon/PostgresSQL.svg" alt="PostgresSQL" style={{ width: '80px' }} />;


const Skills: Skill[] = [
  {
    id: 1,
    description: "Figma",
    category: "Design" ,
    icon: [<FigmaIcon />]
  },
  {
    id: 2,
    description: "Photoshop",
    category: "Design" ,
    icon: [<PsIcon />]
  },
  {
    id: 3,
    description: "illustrator",
    category: "Design" ,
    icon: [<AiIcon />]
  },
  {
    id: 4,
    description: "visily",
    category: "Design" ,
    icon: [<VisilyIcon />]
  },
  {
    id: 5,
    description: "Angular",
    category: "Front-end" ,
    icon: [<AngularIcon />]
  },
  {
    id: 6,
    description: "React",
    category: "Front-end" ,
    icon: [<ReactIcon />]
  },{
    id: 7,
    description: "Vue",
    category: "Front-end" ,
    icon: [<VueIcon />]
  },{
    id: 8,
    description: "Javascript",
    category: "Front-end" ,
    icon: [<JsIcon />]
  },{
    id: 9,
    description: "css",
    category: "Front-end" ,
    icon: [<CssIcon />]
  },{
    id: 10,
    description: "Html",
    category: "Front-end" ,
    icon: [<HtmlIcon />]
  },{
    id: 11,
    description: "Sass",
    category: "Front-end" ,
    icon: [<SassIcon />]
  },{
    id: 12,
    description: "Bulma",
    category: "Front-end" ,
    icon: [<BulmaIcon />]
  },{
    id: 13,
    description: "Bootstrap",
    category: "Front-end" ,
    icon: [<BootsIcon />]
  },
  {
    id: 14,
    description: "Tailwind CSS",
    category: "Front-end" ,
    icon: [<TailwindIcon />]
  },
  {
    id: 15,
    description: "Node",
    category: "Back-end" ,
    icon: [<NodeIcon />]
  },
  {
    id: 16,
    description: "Express",
    category: "Back-end" ,
    icon: [<ExpressIcon />]
  },
  {
    id: 17,
    description: "PHP",
    category: "Back-end" ,
    icon: [<PHPIcon />]
  },
  {
    id: 18,
    description: "Laravel",
    category: "Back-end" ,
    icon: [<LaravelIcon />]
  },
  {
    id: 19,
    description: "Mysql",
    category: "Base de donnée" ,
    icon: [<MysqlIcon />]
  }, {
    id:20,
    description: "Laravel",
    category: "Base de donnée" ,
    icon: [<MongoIcon />]
  }, {
    id: 21,
    description: "Laravel",
    category: "Base de donnée" ,
    icon: [<PostgreIcon />]
  },

]


const Tools: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>("Design ")
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
    <main>
    <div className="tool-content">
   
      <div className="tool-content-text">
        <h3 className="mb-10">Mes Compétences?</h3>
        <p className="text-lg  text-gray-700 my-2 ml-7">Entre deux bugs et trois cafés, j’ai accumulé quelques compétences plutôt utiles </p>
        <div className="filter">
          <FilterSkills categories={["Design ", "Front-end", "Back-end","Base de donnée"]}
            selectedCategory={selectedCategory}
            onFilterChange={handleFilterChange}
          />
          <SkillsList Skills={Skills} selectedCategory={selectedCategory} />
        </div>
        
      </div>
    </div>
    
    
    <ScrollToTopButton />
    
  </main>
  )
}

export default Tools
