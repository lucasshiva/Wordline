import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  size?: 'sm' | 'md';
}

export default function LanguageSwitcher({ size = 'md' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const toggle = (lang: 'en' | 'pt') => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  const isSmall = size === 'sm';

  return (
    <div
      role="group"
      aria-label="Language switcher"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'oklch(18% 0.0126 255.48)',
        borderRadius: '9999px',
        padding: isSmall ? '3px' : '4px',
        gap: isSmall ? '2px' : '3px',
        border: '1px solid oklch(30% 0.0126 255.48)',
      }}
    >
      <LangOption
        lang="en"
        flag="🇺🇸"
        label="EN"
        isActive={currentLang === 'en'}
        isSmall={isSmall}
        onClick={() => toggle('en')}
      />
      <LangOption
        lang="pt"
        flag="🇧🇷"
        label="PT"
        isActive={currentLang === 'pt'}
        isSmall={isSmall}
        onClick={() => toggle('pt')}
      />
    </div>
  );
}

// ─── Internal sub-component ───────────────────────────────────────────────────

interface LangOptionProps {
  lang: string;
  flag: string;
  label: string;
  isActive: boolean;
  isSmall: boolean;
  onClick: () => void;
}

function LangOption({ lang, flag, label, isActive, isSmall, onClick }: LangOptionProps) {
  return (
    <button
      id={`lang-${lang}`}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${label}`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: isSmall ? '4px' : '6px',
        padding: isSmall ? '3px 8px' : '5px 12px',
        borderRadius: '9999px',
        border: 'none',
        cursor: isActive ? 'default' : 'pointer',
        fontSize: isSmall ? '0.7rem' : '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        transition: 'background-color 180ms ease, color 180ms ease',
        backgroundColor: isActive
          ? 'oklch(28% 0.0189 255.48)'
          : 'transparent',
        color: isActive
          ? 'oklch(99% 0.0126 255.48)'
          : 'oklch(60% 0.0252 255.48)',
        boxShadow: isActive
          ? '0 1px 3px oklch(0% 0 0 / 40%)'
          : 'none',
      }}
    >
      <span role="img" aria-hidden="true" style={{ fontSize: isSmall ? '0.9em' : '1em' }}>
        {flag}
      </span>
      <span>{label}</span>
    </button>
  );
}
