import { Outlet } from "react-router-dom";
// import TopHeader from "./TopHeader";
import Header from "./Header";
import Footer from "./Footer";
import useReveal from "../../hooks/useReveal";
import TopHeader from "./TopHeader";

function Layout() {
   useReveal();
  return (
    <div className="site-shell">
      <TopHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
