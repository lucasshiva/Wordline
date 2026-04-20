import { useTranslation } from 'react-i18next';
import { IconDoor, IconUser, IconUsers } from '@tabler/icons-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import LandingFooter from './LandingFooter';
import LandingHeader from './LandingHeader';
import LandingLobbyOption from './LandingLobbyOption';

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language toggle — fixed top-right corner */}
      <div style={{ position: 'fixed', top: '16px', right: '20px', zIndex: 50 }}>
        <LanguageSwitcher size="md" />
      </div>

      <main className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
        <LandingHeader />

        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
            <LandingLobbyOption
              icon={IconUser}
              title={t('landing.playAlone.title')}
              description={t('landing.playAlone.description')}
              buttonText={t('landing.playAlone.button')}
              cardColor="accent"
              comingSoon
            />

            <LandingLobbyOption
              icon={IconUsers}
              title={t('landing.joinRoom.title')}
              description={t('landing.joinRoom.description')}
              buttonText={t('landing.joinRoom.button')}
              cardColor="success"
              comingSoon
            />

            <LandingLobbyOption
              icon={IconDoor}
              title={t('landing.hostRoom.title')}
              description={t('landing.hostRoom.description')}
              buttonText={t('landing.hostRoom.button')}
              cardColor="warning"
              comingSoon
            />
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
