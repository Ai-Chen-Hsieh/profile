const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary py-4 px-4">
      <nav>
        <ul className="flex gap-4 justify-end">
          <li>
            <a href="#about" className="text-sm text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-sm text-white hover:underline"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="text-sm text-white hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm text-white hover:underline">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
