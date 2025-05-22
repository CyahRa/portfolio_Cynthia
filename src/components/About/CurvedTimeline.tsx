import "./__about.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { GiVote } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { motion } from "framer-motion";

const TimelineCurved = () => {
    const points = [
        { year: "2025",color:"#ff0450" ,icon: <FaGraduationCap />, title: "Formation en design Graphique",description:"Formation chez Orange Digital Center Madagascar en Design grahique", x: 300, y: 50 },
        { year: "2024",color:"#ffc107" ,icon: <MdWork />, title: "Stage chez LIEL Mada",description:"Développement d'une plateforme de rencontre spécifiquement conçue pour la population malgache.", x: 100, y: 200 },
        { year: "2023", icon: <GiVote/>,color:"#efa666", title: "Développement d'un projet d'étude",description:"Développement d'un site pour l'amélioration du vote à madagascar en le digitalisant pour la transparence des votes.  ", x: 300, y: 350 },
        { year: "2022", icon: <ImStatsDots />,color:"#cd2c2c", title: "Développement d'un projet d'étude",description:" Site dedié aux investisseurs à investir à Madagascar en leur proposant toutes les ressources exploitable afin de s'enrichir de leurs investissementst.", x: 100, y: 500 },
        { year: "2021",color:"#000", icon: <FaGraduationCap />, title: "ISPM", description:"Obtention du diplôme de Licence en Informatique de Gestion Génie Logiciel et Intelligence Artificielle",x: 300, y: 650 },
        { year: "2020",color:"#41d3bd" , icon:<MdWork /> , title: "Stage chez MGBI ", description :"Refonte d'un site e-commerce dédié à la vente de produits pour bébés.",x: 100, y: 800 },
    ];

    const pathData = points
        .map((point, i) => {
            if (i === 0) return `M ${point.x} ${point.y}`;
            const prev = points[i - 1];

            // Points de contrôle pour un effet "carré arrondi"

            const cp1x = prev.x;
            const cp1y = prev.y + 150;
            const cp2x = point.x;
            const cp2y = prev.y * 2 / 2;

            return `C  ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
        })
        .join(" ");

    return (
        <div className="wrap">
            <div className="timeline"></div>

            {/* SVG Timeline */}
            <svg width="800" className="timeline-item" >
                <motion.path
                    d={pathData}
                    stroke=" #e6e9ed"
                    fill="none"
                    strokeWidth="5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: false }}
                />
                {points.map((point, index) => (
                    <motion.g
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: false }}
                    >
                        <circle cx={point.x} cy={point.y} r="10" fill="#ffc107" />
                        <text x={index % 2 === 0 ? point.x + 30 : point.x - 80} y={point.y} fontSize="14">{point.year}</text>
                    </motion.g>
                ))}
            </svg>

            {/* Events */}
            {points.map((point, index) => (
                <motion.div
                    key={index}
                    className="content-box"
                    style={{ left: `${index % 2 === 0 ? point.x + 200 : point.x - 500}px`, top: `${point.y - 100}px` }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: false }}
                >
                    <div className="rounded-full icon  " style={{backgroundColor:  `${point.color}`}}>{point.icon}</div>
                    <h3 className="text-gray-800 text-xl mt-4 text-center ">{point.title}</h3>
                    <text className="text-gray-800 text-sm mt-4 text-center">{point.description}</text>
                </motion.div>
            ))}
        </div>
    );
};

export default TimelineCurved;
