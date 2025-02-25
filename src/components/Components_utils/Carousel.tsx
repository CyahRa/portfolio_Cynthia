import React, { useState } from 'react'
import bbmay from "../../assets/images/images/projets/bbmay.jpg";
import SDR from "../../assets/images/images/projets/SDR.jpg";
import portfolio from "../../assets/images/images/projets/portfolio.jpg";
import invest from "../../assets/images/images/projets/invest.jpg";
import isafidy from "../../assets/images/images/projets/isafidy.jpg";
import CardProduct from "../Components_utils/CardProduct";
import "./__carousel.css";
import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled} from "react-icons/tb";

const Carousel: React.FC = () => {
    const images = [
        bbmay,
        SDR,
        portfolio,
        invest,
        isafidy
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    const goToPrevious = () =>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length-1: prevIndex-1)
    }
    const goToNext = () =>{
        setCurrentIndex((prevIndex) => prevIndex === images.length-1 ? 0 : prevIndex+1)
    }
  return (
    <div>
        <div className="card-product ">

        <CardProduct  title="Bbmay" 
                        details="C'est un site e-commerce conçu pour la vente de produits et articles pour bébé" 
                        photo={images[currentIndex]}
          />
        </div>
        <div className="dotsContainer">
            {images.map((_, index) => (
                <span key={index} className='dot' style={{backgroundColor: currentIndex=== index ? "#000": "#ccc"}} onClick={()=> setCurrentIndex(index)}></span>
            ))}
        </div>
        <div className="flex justify-around">
            <button className="button" onClick={goToPrevious}><TbArrowBadgeLeftFilled/></button>
            <button  className="button"  onClick={goToNext}><TbArrowBadgeRightFilled/></button>
        </div>
        
         
    </div>
    
  )
}

export default Carousel;