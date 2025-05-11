import { TiSocialFacebook,TiSocialGithub,TiSocialLinkedin} from "react-icons/ti";
const footer = () => {
   
    const handleRedirectFacebook = (event:any) =>{
        event.preventDefault();
        window.open("https://www.facebook.com/cynthia.rakotoarson", '_blank', 'noopener,noreferrer')
    }
    const handleRedirectGit = (event:any) =>{
        event.preventDefault();
        window.open("https://www.github.com/CyahRa", '_blank', 'noopener,noreferrer')
    }
    
     const handleRedirectLinkedin = (event:any) =>{
        event.preventDefault();
        window.open("https://www.linkedin.com/in/cynthia-rakotoarison", '_blank', 'noopener,noreferrer')
    }

  return (
    <div className="bg-neutral-800 text-center p-8"> 
        <h3 className="text-white">N'hésitez pas à me contacter</h3> 
        <div className="flex items-center justify-center gap-20 text-center my-8 ">
            <button onClick={handleRedirectFacebook}>
            <span className="bg-white text-center w-12 h-12 rounded-full flex items-center justify-center"><TiSocialFacebook size={40}/></span>
            </button>
            <button onClick={handleRedirectGit}>
            <span className="bg-white text-center w-12 h-12 rounded-full flex items-center justify-center"><TiSocialGithub size={40}/></span>

            </button >
            <button onClick={handleRedirectLinkedin}>
            <span className="bg-white text-center w-12 h-12 rounded-full flex items-center justify-center"><TiSocialLinkedin size={40}/> </span>

            </button >
        </div> 
        
    </div>
  )
}

export default footer