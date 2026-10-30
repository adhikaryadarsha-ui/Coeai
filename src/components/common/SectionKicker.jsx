function SectionKicker({ number, label, light = false }) {
  return (
    <div className={`section-kicker reveal ${light ? "light" : ""}`}>
      <span>
        {number} / {label}
      </span>
      <span className="kicker-line" />
    </div>
  );
}

export default SectionKicker;
