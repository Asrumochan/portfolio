function FloatingParticles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, idx) => (
        <span key={idx} style={{ animationDelay: `${idx * 0.4}s` }} />
      ))}
    </div>
  );
}

export default FloatingParticles;
