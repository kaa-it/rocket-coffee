import "./Card.css";

function Card({ children, highlight }) {
  const cardClassName = highlight ? "card sale" : "card";
  return <div className={cardClassName}>{children}</div>;
}

export default Card;
