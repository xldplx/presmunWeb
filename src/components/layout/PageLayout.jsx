import Footer from "../Footer";
import Navbar from "../Navbar";

export default function PageLayout({ children }) {
  return (
    <>
    <Navbar />
        <main>
            {children}
        </main>
    <Footer />
    </>
  );
}