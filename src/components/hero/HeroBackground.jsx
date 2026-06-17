// HeroBackground.jsx

function HeroBackground() {
    return (
        <>
            <div
                className="
                absolute
                left-[-150px]
                top-20
                h-96
                w-96
                rounded-full
                bg-red-600/20
                blur-3xl
                "
            />

            <div
                className="
                absolute
                right-[-100px]
                bottom-20
                h-72
                w-72
                rounded-full
                bg-blue-500/10
                blur-3xl
                "
            />
        </>
    );
}

export default HeroBackground;