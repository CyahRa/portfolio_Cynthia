import CurvedTimeline from "./CurvedTimeline"
import styled from 'styled-components';
import image_about from "../../assets/images/images/image.jpg";
import { GoGoal } from "react-icons/go";
import { FaHandHoldingHeart } from "react-icons/fa";

import Button_download from "../Components_utils/Button/Button_download";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";
import MasonryGallery from "../Components_utils/MasonryGallery";
import { motion } from "framer-motion";


const Image = styled.img`
  object-fit: cover;
  object-position: top;
  position: relative;
  border-radius:100%;
  width:400px;
  height:400px;
 
`;

const About = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  return (

    <div className="mx-20 ">
      <motion.div
        className="grid grid-cols-2 gap-10 m-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <div className="flex flex-row gap-60">
          <Image src={image_about} />
          <div className="texte relative">
            <div className="absolute -left-24 top-10 h-4/5 w-1.5 bg-[#ff0450]"></div>
            <div>
              <div className="w-10 h-10 bg-[#ff0450] flex place-content-center items-center rounded-full absolute -left-28"> <FaHandHoldingHeart size={30} color="#fcfcf7" /> </div>
              <h1 className="text-[#3b3b3baf] my-10 flex justify-center items-center " >
                Je suis là pour vous aider !
              </h1>
              <p className="text-lg w-[500px]  text-gray-700">Passionné par la création d'expériences numériques, j'allie design et développement
                pour donner vie à des interfaces intuitives et engageantes. Chaque projet est une opportunité de repousser mes limites
                et d'explorer de nouvelles approches.

              </p >
            </div>
            <div>
              <div className="w-10 h-10 bg-[#ff0450] flex place-content-center items-center rounded-full absolute -left-28"> <GoGoal size={30} color="#fcfcf7" /> </div>
              <h1 className="text-[#3b3b3baf] flex justify-center items-center my-14">Mon objectif ? <br /></h1>
              <p className="text-lg w-[500px] text-gray-700"> Transformer des idées en solutions concrètes, en mettant l'accent sur l'ergonomie, l'accessibilité et l'innovation.
                Que ce soit pour concevoir un site web, une application ou un prototype interactif, je mets mon expertise au service de vos ambitions.
              </p>

            </div>


            <Button_download />
          </div>

        </div>
      </motion.div>
      <motion.div
        className=" grid-cols-2  m-0 my-32 flex gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >

        <div>
          <h1 className="text-[#ff0450]  mb-10 ">Qui suis-je ? </h1>
          <p className="text-lg  text-gray-700 ml-7">
            Je m’appelle Rakotoarison Holiarisoa Cynthia,
            jeune diplômée de l’Institut Supérieure Polytechnique de Madagascar dans le domaine de
            l’Informatique de Gestion Génie logiciel et Intelligence Artificielle, j’ai un fort intérêt pour l’UX/UI et le design interactif.
          </p>
          <p className="text-lg  text-gray-700 my-2 ml-7">
            J’ai exploré  d’avantage les interactions homme-machine, le design d’expérience afin de pouvoir me perfectionner dans
            ce domaine dans le but de créer des interfaces intuitives et concevoir des expériences digitales qui marquent les esprits.
          </p >
          <p className="text-lg  text-gray-700 my-2 ml-7">
            J’ai participé à des challenges de développement qui m’as permi de repousser mes limites et d’avoir un réel intérêt pour le design
            comme :
            <ul className="list-disc ml-20 mt-5">
              <li>
                <span className="font-bold text-[#ff0450] italic">Hackathon interuniversitaire de 2022</span>  (1er prix)
              </li>
              <li>
                <span className="font-bold text-[#ff0450] italic">Frontend award 2023</span>
              </li>
            </ul>
          </p>
        </div>
        <div>
          <MasonryGallery />
        </div>
      </motion.div>
      <motion.div
        className=" grid-cols-2  m-0 my-28 flex gap-20 min-h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <CurvedTimeline />
      </motion.div>


      <ScrollToTopButton />
    </div>
  )
}

export default About