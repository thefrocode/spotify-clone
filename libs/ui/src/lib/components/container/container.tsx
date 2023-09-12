import { container } from "./container.css";

interface ContainerProps {
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  children: React.ReactNode;
}


export function Container({ children, backgroundColor, flexDirection }: ContainerProps) {
  return (
    <div className={`${container}`} style={{ backgroundColor, flexDirection }}>{children}</div>
  );
}
