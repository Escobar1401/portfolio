import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
            </main>

            <Projects />

            <Experience />

            <About />

            <Contact />
            
            <Footer />
        </>
    );
}

export default MainLayout;