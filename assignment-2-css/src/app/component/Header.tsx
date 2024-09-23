import Link from 'next/link';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    Portfolio
                </div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">
                    &#9776;
                </label>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
