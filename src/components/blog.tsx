const blogStyles = {
  border: "1px solid white",
  padding: "20px",
  margin: "20px",
};

export default function Blog({ title, html }) {
  return (
    <div style={blogStyles}>
      <h1>{title}</h1>
      {html}
    </div>
  );
}
