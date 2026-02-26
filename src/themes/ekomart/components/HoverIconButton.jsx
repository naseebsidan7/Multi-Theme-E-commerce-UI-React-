import { useState } from "react";

const HoverIconButton = ({ iconClass, count = 0, buttonName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="icon-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    > 
      <div className="icon-buttonH">
        <i className={iconClass}></i>
        <p>{buttonName}</p>
        <span className="badge">{count}</span>
      </div>

      {isOpen && <div className="dropdown">{children}</div>}
    </div>
  );
};

export default HoverIconButton;