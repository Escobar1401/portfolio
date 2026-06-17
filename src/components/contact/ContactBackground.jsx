// ContactBackground.jsx

function ContactBackground() {
    return (
        <>
            <div
                className="
                absolute
                left-1/2
                top-0
                h-96
                w-96
                -translate-x-1/2
                rounded-full
                bg-red-500/10
                blur-[150px]
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
        </>
    );
}

export default ContactBackground;