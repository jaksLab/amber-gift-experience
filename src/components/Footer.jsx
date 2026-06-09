export default function Footer({ content }) {
  return (
    <footer className="site-footer">
      <p>{content.text}</p>
      <span>{content.signature}</span>
    </footer>
  );
}
