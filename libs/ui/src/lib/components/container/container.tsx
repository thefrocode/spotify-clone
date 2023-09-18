import { container } from "./container.css";

interface ContainerProps {
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  children: React.ReactNode;
  gap?: string;
  margin?:string
}


export function Container({ children, backgroundColor, flexDirection, gap, margin }: ContainerProps) {
  return (
    <div className={`${container}`} style={{ backgroundColor, flexDirection, gap, margin }}>{children}</div>
  );
}
