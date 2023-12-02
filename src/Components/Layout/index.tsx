import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//components
import Appbar from "../Appbar";
import Footer from "../Footer";
function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-col h-screen">
      <Appbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
