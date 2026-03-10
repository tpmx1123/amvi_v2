import './Stats.css';

const stats = [
  { value: '30+', label: 'Dehydrated SKUs' },
  { value: '3', label: 'Product Categories' },
  { value: '100%', label: 'Natural & Pure' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
