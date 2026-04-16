import { IconDoor, IconUser, IconUsers } from "@tabler/icons-react";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import LandingLobbyOption from "./LandingLobbyOption";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
        <LandingHeader />

        {/* Mode selection */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Mode selection options. Maybe move this to its own components? */}
          <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
            <LandingLobbyOption
              icon={IconUser}
              title="Play Alone"
              description="Classic Wordle experience. Play unlimited random words at your own pace."
              buttonText="Play"
              cardColor="accent"
              comingSoon
            />

            <LandingLobbyOption
              icon={IconUsers}
              title="Join Room"
              description="Play with friends in real time. Compete to see who can guess the secret word first."
              buttonText="Join"
              cardColor="success"
              comingSoon
            />

            <LandingLobbyOption
              icon={IconDoor}
              title="Host Room"
              description="Create a room and invite friends. Start a multiplayer match and see who solves it first."
              buttonText="Host"
              cardColor="warning"
              comingSoon
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
