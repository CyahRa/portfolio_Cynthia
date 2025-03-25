import React from 'react'
import "./__projectList.css";


import { motion } from 'framer-motion';
interface Project {
    id:number,
    images:string[],
    description: string,
    category:string,
    technologies: string[],
    link: string,
    title: string,

}
interface ProjectListProps {
    projects: Project[],
    selectedCategory: string
}
const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

const ProjectList: React.FC<ProjectListProps> = ({projects,selectedCategory}) => {
    const filteredProjects = selectedCategory === "Tous " ? projects : projects.filter((projects)=>projects.category === selectedCategory)
    
    return (
    <div className= "projectContainer w-full flex flex-col mt-10 ">
        
        {filteredProjects.map((project, index)=>( 
           <motion.div 
            className="grid grid-cols-1 m-0 px-8" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
            variants={scrollAnimation}
          > 
            <div key={index} className='projectCard gap-20' style={{flexDirection: `${index % 2 !== 0 ? 'row' : 'row-reverse'}`}}>
                    <div className='flex w-[50%]  h-[450px] overflow-hidden'>
                        {project.images.map((image, index) => (
                            <motion.div
                            className=' relative flex items-center w-[900px] h-[400px] overflow-hidden'
                            key={index}
                            style={{ left: `${index % 2 === 0 ? 0 : 0}px`}}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: false }}
                        >
                            <div className=' relative border-8  w-[540px] h-[320px]' style={{borderColor:  '#ccc3af'}}></div>
                            <img key={index} src={image} className='absolute left-4 -mt-12 w-[95%] h-[340px] bg-slate-900 border rounded-lg object-cover object-top ' alt="" />
                        </motion.div>
                          
                                

                          
                        ))}           
                    </div>
                    <div className='flex flex-col w-[50%] h-[450px] my-10 mx-8'>
                        <h3 className='mb-2'>{project.title}</h3>
                        <span>
                            {project.technologies.map((technologie, index) => (
                                <span key={index} >
                                    <span className='text-sm m-2 bg-[#ccc3af] p-1 rounded-lg text-white'>{technologie}</span> 
                                </span>
                            ))}
                        </span>
                        <p className='text-base my-8'>{project.description}</p>
                        
                        
                        <a className='text-lg text-[#ffc107]' href={project.link} target='_blank' rel='noopenernoreferrer'>
                            {project.category === "UX/UI" ? 'Voir la maquette': 'Voir le site'}
                        </a>
                        

                    </div>
                

            </div> 
        </motion.div>
    ))}
        
    </div>
  )
}



export default ProjectList;