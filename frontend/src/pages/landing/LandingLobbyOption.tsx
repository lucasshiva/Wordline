import { useTranslation } from 'react-i18next';
import { Button, Card } from "@heroui/react";
import type { Icon } from "@tabler/icons-react";

interface LandingLobbyOptionProps {
  icon: Icon;
  title: string;
  description: string;
  buttonText: string;
  cardColor: "accent" | "success" | "warning";
  comingSoon: boolean;
}

export default function LandingLobbyOption({
  icon,
  cardColor,
  title,
  description,
  buttonText,
  comingSoon,
}: LandingLobbyOptionProps) {
  const { t } = useTranslation();
  // Convert to uppercase so that we can use it as a component
  const Icon = icon;

  // We do this because Tailwind doesn't understand dynamic classes (e.g `text-${color}`).
  // See https://tailwindcss.com/docs/detecting-classes-in-source-files
  const colorStyles = {
    accent: {
      border: "hover:border-accent",
      bgSoft: "bg-accent/10",
      text: "text-accent",
      button: "bg-accent text-accent-foreground",
    },
    success: {
      border: "hover:border-success",
      bgSoft: "bg-success/10",
      text: "text-success",
      button: "bg-success text-success-foreground",
    },
    warning: {
      border: "hover:border-warning",
      bgSoft: "bg-warning/10",
      text: "text-warning",
      button: "bg-warning text-warning-foreground",
    },
  };
  const styles = colorStyles[cardColor];

  return (
    <div className="flex flex-col items-center gap-2">
      <Card
        className={`w-full max-w-3xs sm:max-w-2xs min-h-60 sm:min-h-65 border ${!comingSoon && styles.border} flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <div
            className={`p-1.5 sm:p-2 rounded-lg ${styles.bgSoft} ${styles.text} flex items-center gap-2`}
          >
            <Icon className="size-5" />
            <Card.Header>{title}</Card.Header>
          </div>

          <Card.Description className="text-foreground text-sm sm:text-[0.95rem]">
            {description}
          </Card.Description>
        </div>

        <Card.Footer>
          <Button
            className={`${styles.button} w-full mt-auto md:text-[1rem]`}
            isDisabled={comingSoon}
          >
            {buttonText}
          </Button>
        </Card.Footer>
      </Card>

      {comingSoon && <p className="text-muted">{t('landing.comingSoon')}</p>}
    </div>
  );
}
