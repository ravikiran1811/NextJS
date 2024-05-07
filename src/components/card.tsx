const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  };
  return <div style={cardStyle}>{children}</div>;
};
export default Card;
