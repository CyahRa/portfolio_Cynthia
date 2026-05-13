import React, { useState } from 'react'
import CardProduct from "../Components_utils/CardProduct";
import "./__carousel.css";
import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled} from "react-icons/tb";

// Utilisation de import.meta.glob pour récupérer toutes les images du dossier
// eager: true permet d'importer les modules immédiatement
const imagesModules = import.meta.glob("../../assets/images/images/projets/*.{png,jpg,jpeg,SVG}", { eager: true });

// Transformation de l'objet en tableau d'URLs
const allImages = Object.values(imagesModules).map((mod: any) => mod.default);

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? allImages.length - 1 : prevIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === allImages.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div>
            <div className="card-product">
                {/* On vérifie qu'il y a des images avant d'afficher le composant */}
                {allImages.length > 0 ? (
                    <CardProduct 
                        title="" 
                        details="" 
                        photo={allImages[currentIndex]}
                    />
                ) : (
                    <p>Aucune image trouvée dans le dossier assets.</p>
                )}
            </div>

            <div className="dotsContainer">
                {allImages.map((_, index) => (
                    <span 
                        key={index} 
                        className='dot' 
                        style={{ backgroundColor: currentIndex === index ? "#000" : "#ccc" }} 
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            <div className="flex justify-around">
                <button className="button" onClick={goToPrevious}><TbArrowBadgeLeftFilled/></button>
                <button className="button" onClick={goToNext}><TbArrowBadgeRightFilled/></button>
            </div>
        </div>
    );
};

export default Carousel;