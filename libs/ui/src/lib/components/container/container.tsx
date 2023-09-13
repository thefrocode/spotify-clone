import { container } from "./container.css";

interface ContainerProps {
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  children: React.ReactNode;
  gap?: string;
}


export function Container({ children, backgroundColor, flexDirection, gap }: ContainerProps) {
  return (
    <div className={`${container}`} style={{ backgroundColor, flexDirection, gap }}>{children}</div>
  );
}
