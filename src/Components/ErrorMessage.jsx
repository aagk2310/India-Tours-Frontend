function ErrorMessage({ error }) {
  return (
    <span style={{ color: "maroon", fontSize: "0.8rem" }}>&times; {error}</span>
  );
}

export default ErrorMessage;
