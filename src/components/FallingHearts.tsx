export default function FallingHearts() {
    const hearts = Array.from({ length: 80 }); // más corazones

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {hearts.map((_, i) => {
                const delay = 0.1 + Math.random() * 2.5;
                const duration = 3 + Math.random() * 3;
                const left = Math.random() * 100;

                return (
                    <div
                        key={i}
                        className="absolute text-pink-400 animate-fall text-xl"
                        style={{
                            left: `${left}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                            fontSize: `${16 + Math.random() * 24}px`,
                        }}
                    >
                        💗
                    </div>
                );
            })}
        </div>
    );
}
