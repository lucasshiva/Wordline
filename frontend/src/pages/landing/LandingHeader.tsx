import { useTranslation } from 'react-i18next';

export default function LandingHeader() {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl text-center">

      <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
        <span className="text-success">W</span>ord
        <span className="text-warning">L</span>ine
      </p>
      <p className="text-base md:text-lg mt-4">
        {t('landing.header.subtitle')}{' '}
        <a
          className="text-accent underline hover:opacity-65"
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{' '}
        {t('landing.header.and')}{' '}
        <a
          className="text-accent underline hover:opacity-65"
          href="https://term.ooo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termo
        </a>
        .
      </p>
    </div>
  );
}
