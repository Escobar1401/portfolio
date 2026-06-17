import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
    return (
        <section 
            id="home" 
            className="
            relative 
            min-h-screen 
            overflow-hidden
            "
        >
            <HeroBackground />

            <div 
                className="
                relative 
                z-10 
                mx-auto 
                flex 
                min-h-screen 
                max-w-7xl 
                flex-col 
                items-center 
                justify-center 
                gap-12 
                px-6 
                lg:flex-row
                "
            >
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}

export default Hero;