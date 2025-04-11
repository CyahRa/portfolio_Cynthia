import './__button_download.css'
import { FaDownload } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BsSendArrowDownFill } from "react-icons/bs";


const Button_download = () => {
    const handleDownload = () =>{
        const link = document.createElement("a")
        link.href = "/cv.pdf"
        link.download = "Cv_Rakotoarison Cynthia.pdf"
        link.click()

    }

    return (
        <div id="wrap">
            <div className="w-10 h-10 bg-[#ff0450] flex place-content-center items-center rounded-full absolute -left-28"> <BsSendArrowDownFill size={24} color="#fcfcf7" /> </div>
            {/* <a href=""   className="btn-slide">
                <span className="circle text-center"><BiMailSend className='mx-auto my-1' /></span>
                <span className="title">Note et Diplôme</span>
                <span className="title-hover">Clique ici</span>
            </a> */}
            <a href="#" onClick={handleDownload} className="btn-slide2">
                <span className="circle2 text-center"><FaDownload size={24} className='mx-auto my-1' /></span>
                <span className="title2">Télécharger mon CV</span>
                <span className="title-hover2">Clique ici</span>
            </a>
        </div>
    )
}

export default Button_download