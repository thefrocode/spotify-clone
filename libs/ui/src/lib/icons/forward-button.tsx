import { vars } from "../styles/theme.css";

export function ForwardButton() {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      fill={vars.colors.accent}
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
}
