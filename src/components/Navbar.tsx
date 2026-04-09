import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (item: string) => {
    const id = item.toLowerCase();
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 md:px-16">
      <button
        onClick={handleLogoClick}
        className="text-sm font-medium tracking-[0.3em] text-foreground hover:opacity-60 transition-opacity"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        POSI DESIGN
      </button>

      <div className="hidden gap-10 md:flex">
        {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="text-xs font-light tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;