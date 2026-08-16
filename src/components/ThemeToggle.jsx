export function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        borderRadius: 100,
        padding: '0.35rem 0.7rem',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'var(--fg)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.2s',
        lineHeight: 1,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}