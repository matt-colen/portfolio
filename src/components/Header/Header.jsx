import "./Header.css";

export default function Header({children}) {
  return (
    <header className="header outer-container">
      {children}
    </header>
  );
}
