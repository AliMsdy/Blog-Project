import Appbar from "../Appbar";
import Footer from "../Footer"
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Appbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
