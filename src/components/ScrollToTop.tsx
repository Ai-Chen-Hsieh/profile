import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-[9999] w-10 h-10 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
      aria-label="回到頂部"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
