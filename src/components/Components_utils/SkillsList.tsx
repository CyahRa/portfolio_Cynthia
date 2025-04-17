import React from 'react'
0

interface Skill {
  id: number;
  icon: JSX.Element[];
  description: string;
  category: string;
}

interface SkillProps {
  Skills: Skill[];
  selectedCategory: string;
}

const SkillsList: React.FC<SkillProps> = ({ Skills, selectedCategory }) => {
  const filteredSkills =
    selectedCategory === "Design "
      ? Skills.filter((s) => s.category === "Design")
      : Skills.filter((s) => s.category === selectedCategory);
  return (
    <div className="SkillContainer flex mt-10">
      {filteredSkills.map((skill, index) => (
      
         <div
          key={index}
            className="SkillCard group flex overflow-hidden transition-all duration-500 ease-in-out"           
          > 
            {/* Partie gauche avec l’icône */}
            <div className="flex l w-[50%]">
              {skill.icon.map((icon, i) => (
                <div
                  key={i}
                  className="text-[34px]"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Partie droite avec description (apparaît au hover) */}
          </div>
      ))}
    </div>
  );
};

export default SkillsList;
