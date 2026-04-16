import { IconBrandGithub } from "@tabler/icons-react";

export default function LandingFooter() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 text-sm">
      {/* Attribution */}
      <p>
        Built by{" "}
        <a
          href="https://github.com/lucasshiva"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          lucasshiva
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/alyssiatavares"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          alyssiatavares
        </a>
      </p>

      {/* Source link */}
      <a
        href="https://github.com/lucasshiva/Wordline"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 text-xs opacity-80 hover:opacity-100 text-accent"
      >
        <IconBrandGithub size={14} />
        <span>View source</span>
      </a>
    </div>
  );
}
