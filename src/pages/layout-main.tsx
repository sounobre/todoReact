import Header from "../core-components/header";
import MainContet from "../core-components/main-content";
import Footer from "../core-components/footer";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContet>
        <Outlet />
      </MainContet>
      <Footer />
    </>
  );
}
