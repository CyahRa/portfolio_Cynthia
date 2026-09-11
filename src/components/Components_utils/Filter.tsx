import React from "react";
import { FcDribbble, FcGenericSortingDesc, FcMultipleDevices } from "react-icons/fc";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onFilterChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, selectedCategory, onFilterChange }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "UX/UI": return <FcDribbble />;
      case "Developpement": return <FcMultipleDevices />;
      default: return <FcGenericSortingDesc />;
    }
  };

  return (
    <div className="projectsFilter" role="tablist" aria-label="Filtrer les projets">
      {categories.map((category) => (
        <button
          key={category}
          className={`projectsFilterButton ${selectedCategory === category ? "isActive" : ""}`}
          onClick={() => onFilterChange(category)}
          type="button"
          role="tab"
          aria-selected={selectedCategory === category}
        >
          {getCategoryIcon(category)}
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
