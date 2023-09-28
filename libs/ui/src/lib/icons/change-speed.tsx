import { vars } from "../styles/theme.css";

export function ChangeSpeed({
    color=vars.colors.accent
}:{color?:string}) {
  return (
    <svg
      role="img"
      height="20"
      width="20"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      fill={color}
    >
      <path d="M4.485 2.37c0 .734-.759 1.533-1.957 1.533h-.417v1.5h2.374v7.992h1.5V2.37h-1.5zm9.935 6.043-1.97 1.97 1.97 1.97-1.061 1.06-1.97-1.97-1.97 1.97-1.06-1.06 1.97-1.97-1.97-1.97 1.06-1.06 1.97 1.969 1.97-1.97 1.06 1.061z"></path>
    </svg>
  );
}
