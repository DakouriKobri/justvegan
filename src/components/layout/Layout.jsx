import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
}
