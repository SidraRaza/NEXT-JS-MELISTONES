import Link from 'next/link';
import './Header.css';


export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="brand">Portfolio</div>
          <input type="checkbox" id="menu-toggle" className="menu-toggle peer" />
          <label htmlFor="menu-toggle" className="menu-label">
            &#9776;
          </label>
          <ul className="menu-list peer-checked:flex">
            <li className="menu-item">
              <Link href="/" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item mt-2">
              <Link href="/about" className="menu-link">
                About
              </Link>
            </li>
            <li className="menu-item mt-2">
              <Link href="/contact" className="menu-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
