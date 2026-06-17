// AboutBackground.jsx

function AboutBackground() {
    return (
        <>
            <div
                className="
                absolute
                left-0
                top-20
                h-96
                w-96
                rounded-full
                bg-red-600/10
                blur-[140px]
                "
            />

            <div
                className="
                absolute
                bottom-0
                right-0
                h-80
                w-80
                rounded-full
                bg-cyan-500/10
                blur-[120px]
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                bg-[size:40px_40px]
                opacity-30
                "
            />
        </>
    );
}

export default AboutBackground;