import photo from "/assets/images/images/sary.jpeg";
import photo1 from "/assets/images/images/photo.jpeg";
import "./__homePage.css";
import Card from "./Card";
import { IoIosImages} from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import SvgBackground from "../Components_utils/SVG/SvgBackground";
import SvgPage from "../Components_utils/SVG/SvgPage";
import SvgComponent from "../Components_utils/SVG/Svg";
import BackgroundRight from "./BackgroundRight";
import { motion } from "framer-motion"; // Import framer-motion
import Button from "../Components_utils/Button/Button";
import Carousel from "../Components_utils/Carousel";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";



// Configuration de l'animation de défilement
const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const HomePage = () => {
  
  const navigate = useNavigate();
  const handleCardClick = (filter: string) =>{
    navigate(`/projects?category=${filter}`)
  }
  return (
    <div className="flex flex-col main gap-40">
      <SvgComponent />
      <SvgPage />
      <motion.div 
        className="grid grid-cols-1 gap-10 m-0 px-8" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <div className="flex flex-col ml-8 mt-32 gap-5 h-72">
          <div className="contain">
            <div className="container-text">
              <p className="static-text">Hi, Je suis</p>
              <ul className="dynamic-text">
                <li className="item">développeuse web</li>
                <li className="item">designer UX/UI</li>
                <li className="item">motivée</li>
                <li className="item">fullstack</li>
                <li className="item">développeuse web</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <p className="container-text text-base w-2/4 flex flex-col text-gray-700 ">
              Créez l'exceptionnel : plongez dans mon univers créatif, <br />
              un espace où l'imagination s'épanouit et où chaque idée prend vie. <br />
              Ici, la créativité rencontre la technologie pour donner naissance à des projets innovants et captivants. <br />
              Je suis ravi de vous accueillir dans cet espace d'inspiration et d'exploration. <br />
              <h1 className="text-5xl text">Bienvenue !</h1>
            </p>
          </div>
        </div>
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{
          position: "absolute",
          right: "-5%",
          top: 0,
          width: "600px",
          height: "600px",
          borderRadius: "16px"
        }}>
          <defs>
            <mask id="mask">
              <path d="M168.75,292.86666866225585C206.99186162304102,293.28307689925157,244.46894383779772,278.0492240016054,268.15400592594705,248.0220494742516C291.69408195056246,218.17868370439922,293.7934651194671,179.0866599623379,288.14748557536956,141.49830305882986C281.7352120245313,98.80831013389817,273.0984187825711,51.369872001658344,235.44454204512485,30.25735640870502C195.92784079374644,8.100355758567243,148.07675848526225,21.466994578357316,106.60692418150494,39.70857341407798C62.748024501886334,59.00104442550034,13.299159531310657,84.20586444847169,5.373010288092087,131.4602682327503C-2.309271651263132,177.26077508764644,38.98707513133277,213.24800159069696,72.0239792800688,245.8864275366331C98.85111611475571,272.3899859505326,131.04104506282815,292.4560631431229,168.75,292.86666866225585" fill="white" />
            </mask>
          </defs>
          <image href={photo} x="-50" y="15" width="100%" height="100%" mask="url(#mask)" />
        </svg>
      </motion.div>
      
      <motion.div
        className=" mx-4 relative h-72"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <div className="card-container flex justify-around mt-4">
          <div onClick={()=> handleCardClick("Developpement")}>
            <Card
              iconBgColor="#FFD700"
              icon={FaLaptopCode}
              title="développement web"
              description="Les sites que j'ai développé."
            />
          </div>
          <div onClick={()=> handleCardClick("UX/UI")}>
            <Card
              iconBgColor="#41d3bd"
              icon={IoIosImages}
              title="Designer UX/UI"
              description="Les maquettes que j'ai conçu."
            />
          </div>
       
        </div>
        
        <SvgBackground />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-10 m-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <div className="relative h-72 mt-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
            position: "absolute",
            left: "5%",
            top: "-150px",
            width: "800px",
            height: "800px",
            borderRadius: "16px"
          }}>
            <defs>
              <mask id="mask1">
                <path d="M29.2,-40.4C34.4,-30.5,32.7,-18,36.6,-5.1C40.5,7.8,50,21.1,49.4,34.6C48.8,48,38.1,61.7,22.9,70.7C7.7,79.6,-12.2,83.7,-22,74.1C-31.8,64.6,-31.7,41.4,-36.2,25C-40.7,8.7,-49.9,-0.9,-51,-11.5C-52.2,-22.2,-45.3,-34,-35.4,-43.1C-25.6,-52.2,-12.8,-58.7,-0.4,-58.3C12,-57.8,24,-50.4,29.2,-40.4Z"   transform="translate(100 100)" fill="white" />
              </mask>
            </defs>
            <image href={photo1} x="-15" y="30"  width="100%" height="100%" mask="url(#mask1)" />
          </svg>
        </div>
        
        <div className="mx-auto my-10 z-10 relative">
          <p className="text-lg text-gray-700 my-10 z-20 relative mr-20">
            À travers mes créations, 
            je m’efforce de capturer l’essence de chaque projet de manière authentique et inspirante. 
            Mon approche vise à allier innovation et esthétique, 
            en apportant une attention particulière aux détails et à l’harmonie visuelle, 
            pour transformer des concepts abstraits en expériences tangibles. 
            Mon objectif est de donner vie à des idées uniques qui résonnent avec les utilisateurs, 
            en alliant fonctionnalité et beauté dans chaque projet, 
            tout en mettant en avant une créativité qui reflète l'âme du design moderne.
          </p>
          <Button link="/about" text="À propos de moi"/>
          <BackgroundRight />
        </div>
        
      </motion.div>
      <motion.div
        className="flex flex-col mx-2 my-36 self-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow animations on scroll up and down
        variants={scrollAnimation}
      >
        <h1 className="mb-20 text-center">Mes réalisations ? </h1>
        <div className="card-product ">
          
          <Carousel/>
        </div>
        
      </motion.div>
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
