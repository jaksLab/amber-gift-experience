const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 9) % 100}%`,
  delay: `${(index % 6) * 1.3}s`,
  duration: `${12 + (index % 5) * 2}s`
}));

export default function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden="true">
      <div className="mist mist-one" />
      <div className="mist mist-two" />
      {particles.map((particle) => (
        <span
          className="particle"
          key={particle.id}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}
