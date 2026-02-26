 

const TextHeading = ({ title, subtitle }) => {
  return (
    <div className="text-heading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default TextHeading;