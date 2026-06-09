export default function CastleRoomDivider({ label = 'A little deeper into the castle' }) {
  return (
    <div className="castle-divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-rose">✦</span>
      <span className="divider-label">{label}</span>
      <span className="divider-rose">✦</span>
      <span className="divider-line" />
    </div>
  );
}
