import React from 'react'


import { FcDribbble, FcGenericSortingDesc, FcMultipleDevices } from "react-icons/fc";




interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onFilterChange: (category:string) => void;
}

const Filter : React.FC<FilterProps>  = ({categories,selectedCategory,onFilterChange}) => {
    const getCategoryIcon = (category:string) => {
        switch (category) {
            case "UX/UI":
                return <FcDribbble/>; 
            case "Developpement":
                return <FcMultipleDevices/>;
            default:
                return <FcGenericSortingDesc/>;
        }
    }
    
  return (
    <div style={styles.filterContainer}>
        {categories.map((category)=>(
            <button key={category} 
                    style={{...styles.filterButton,  borderBottom: selectedCategory === category ? "3px solid #FFD700" : "none",}} 
                    onClick={()=> onFilterChange(category
                    
            )}>
            {getCategoryIcon(category)}
             {category}
            </button>
        )) }

    </div>
  )
}
const styles = {
    filterContainer:{
        display: "flex",
        justifyContent: "center",
        marginBotom: "20px",
        gap: "10px",
        fontSize: "20px"
    } ,
    filterButton:{
        padding: "10px 20px",
        display:"flex",
        gap:"10px",
        alignItems:"center",
        border: "none",
        cursor: "pointer",
        BackgroundColor: "transparent",
    }
}

export default Filter