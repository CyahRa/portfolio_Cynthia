import { motion } from "framer-motion";
import { FaArrowRight, FaFigma, FaCode, FaLightbulb, FaLayerGroup } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import photo from "/assets/images/images/sary.jpeg";
import "./__homePage.css";
import NavigationRoute from "../../NavigationRoutes";
import ScrollToTopButton from "../Components_utils/Button/Button_backTop";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="portfolio-home">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">UX/UI DESIGNER · CREATIVE DEVELOPER</p>
          <h1>
            Je transforme les idées en
            <span> expériences numériques.</span>
          </h1>
          <p className="hero-description">
            Je conçois des interfaces claires, sensibles et fonctionnelles, à la rencontre
            du design d’expérience et du développement web.
          </p>
          <div className="hero-actions">
            <button className="primary-cta" onClick={() => navigate(NavigationRoute.PROJECTS)}>
              Découvrir mes projets <FaArrowRight />
            </button>
            <button className="secondary-cta" onClick={() => navigate(NavigationRoute.ABOUT)}>
              En savoir plus
            </button>
          </div>
          <div className="hero-meta">
            <span><i /> Disponible pour de nouvelles opportunités</span>
            <span>Basée en Île-de-France</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait de Cynthia">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-frame">
            <img src={photo} alt="Cynthia" />
          </div>
          <div className="floating-note note-top"><FaFigma /> <span>Design</span></div>
          <div className="floating-note note-bottom"><FaCode /> <span>Development</span></div>
          <span className="visual-number">01</span>
        </div>
      </section>

      <motion.section className="intro-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div>
          <p className="section-kicker">MON APPROCHE</p>
          <h2>Design avec intention, développement avec précision.</h2>
        </div>
        <p>
          Mon parcours me permet de comprendre un produit de l’idée jusqu’à sa réalisation.
          Je m’intéresse particulièrement à l’ergonomie, aux interactions et à la façon dont
          chaque détail peut rendre une expérience plus naturelle.
        </p>
      </motion.section>

      <motion.section className="focus-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
        <div className="focus-heading">
          <div>
            <p className="section-kicker">CE QUE JE FAIS</p>
            <h2>Deux univers qui se complètent.</h2>
          </div>
          <p>Une approche hybride pour créer des produits cohérents, utiles et agréables à utiliser.</p>
        </div>
        <div className="focus-grid">
          <button className="focus-card design-card" onClick={() => navigate("/projects?category=UX/UI")}>
            <span className="card-icon"><FaLightbulb /></span>
            <span className="card-index">01</span>
            <h3>UX / UI Design</h3>
            <p>Recherche, architecture, wireframes, prototypes et interfaces visuelles pensées pour les utilisateurs.</p>
            <span className="card-link">Voir les projets <FaArrowRight /></span>
          </button>
          <button className="focus-card dev-card" onClick={() => navigate("/projects?category=Developpement")}>
            <span className="card-icon"><FaLayerGroup /></span>
            <span className="card-index">02</span>
            <h3>Développement web</h3>
            <p>Interfaces responsives et applications modernes, avec une attention portée à la qualité du produit final.</p>
            <span className="card-link">Voir les projets <FaArrowRight /></span>
          </button>
        </div>
      </motion.section>

      <motion.section className="statement-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <span className="statement-mark">“</span>
        <p>Un bon design ne se remarque pas seulement. Il se ressent.</p>
        <span className="statement-line" />
        <span className="statement-caption">Cynthia · UX/UI &amp; Creative Development</span>
      </motion.section>

      <section className="home-footer-cta">
        <div>
          <p className="section-kicker">UN PROJET EN TÊTE ?</p>
          <h2>Créons quelque chose qui a du sens.</h2>
        </div>
        <button onClick={() => navigate(NavigationRoute.ABOUT)}>Me découvrir <FaArrowRight /></button>
      </section>

      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
