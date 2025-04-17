import React from 'react'





interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onFilterChange: (category:string) => void;
}

const FilterSkills : React.FC<FilterProps>  = ({categories,selectedCategory,onFilterChange}) => {
    
  return (
    <div style={styles.filterContainer}>
        {categories.map((category)=>(
            <button key={category} 
                    style={{...styles.filterButton,  borderLeft: selectedCategory === category ? "2px solid #FFD700" : "none",}} 
                    onClick={()=> onFilterChange(category
                    
            )}>
             {category}
            </button>
        )) }

    </div>
  )
}
const styles = {
    filterContainer:{
        display: "flex", 
        flexDirection:"column",
        justifyContent: "center",
        marginBotom: "20px",
        gap: "2rem",
        fontSize: "20px"
    } ,
    filterButton:{
        padding: "0 20px",
        width: "200px",
        display:"flex",
        gap:"10px",
        alignItems:"center",
        border: "none",
        cursor: "pointer",
        BackgroundColor: "transparent",
    }
}

export default FilterSkills