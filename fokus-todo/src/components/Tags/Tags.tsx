import { useState } from "react";
import "./Tags.css";

type TagsProps = {
  onTagClick: (index: number) => void;
};

const Tags: React.FC<TagsProps> = ({ onTagClick }) => {
  const [activeTag, setActiveTag] = useState(0);

  const handleClick = (index: number) => {
    setActiveTag(index);
    onTagClick(index);
  };

  return (
    <div className="tags">
      {["Foco", "Descanso Curto", "Descanso Longo"].map((tag, index) => (
        <button
          onClick={() => handleClick(index)}
          className={activeTag === index ? "active" : ""}
          key={index}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;