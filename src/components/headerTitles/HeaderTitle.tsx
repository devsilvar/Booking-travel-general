import "./headerTitle.css";

const HeaderTitle = ({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="container">
      <h1 className="headerTitle">{title}</h1>
      <p className="headerDesc">{description}</p>
      <button className="headerBtn">{buttonText}</button>
    </div>
  );
};

export default HeaderTitle;
