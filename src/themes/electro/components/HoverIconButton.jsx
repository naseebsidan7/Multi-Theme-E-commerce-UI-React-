import { useState } from "react";

const HoverIconButton = ({ iconClass, count = 0, buttonName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="icon-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    > 
      <div className="icon-button">
        <i className={iconClass}></i>
    
        <span className="badge">{count}</span>
      </div>
 
    </div>
  );
};

export default HoverIconButton;