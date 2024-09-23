import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-yellow-400 to-orange-700 shadow-lg">
        <nav className="flex justify-between items-center p-5 relative">
          <div className="text-white text-3xl font-bold flex items-center">
            Portfolio
          </div>
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="text-white text-3xl cursor-pointer md:hidden absolute right-6 top-6"
          >
            &#9776;
          </label>
          <ul className="flex-col list-none md:flex md:flex-row md:static absolute right-4 top-[70px] bg-gray-800 md:bg-transparent w-48 md:w-auto p-4 md:p-0 hidden peer-checked:flex z-10 rounded-md shadow-lg md:shadow-none">
            <li className="md:ml-6">
              <Link href="/" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                Home
              </Link>
            </li>
            <li className="md:ml-6 mt-2 md:mt-0">
              <Link href="/About" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                About
              </Link>
            </li>
            <li className="md:ml-6 mt-2 md:mt-0">
              <Link href="/Contact" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}