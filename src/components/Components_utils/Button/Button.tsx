import React from 'react';

interface ButtonProps {
    text: string;
    link:string;
}

const Button: React.FC<ButtonProps> = ({ text,link }) => {
  return (
    <a className="flex " href={link}>
      <button className="relative flex items-center group w-52 h-12 bg-transparent cursor-pointer outline-none border-0">
       
        <span className="circle relative block w-12 h-12 bg-[#f9a620] rounded-full transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full items-center justify-center">
          
          <span className="icon-arrow absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-transparent group-hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]">
            <span className="absolute right-0 top-[-2.8px] w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></span>
          </span>
        </span>
        {/* Texte du bouton */}
    <span className="button-text absolute inset-0 flex items-center justify-center pl-8 text-sm text-[#f9a620] font-bold uppercase transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          {text}
        </span>
      </button>
    </a>
  );
};

export default Button;
