export default function Footer() {
  return (
    <footer
      className="w-full text-center py-3 bg-transparent fixed bottom-0 text-sm"
      style={{ color: "#A7A7A7" }}
    >
      <p>Vylar &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
