import { container } from "./container.css";

interface ContainerProps {
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  children: React.ReactNode;
  gap?: string;
  margin?:string;
  flex?: 0 | 1;
  flexShrink?: 0 | 1;

}


export function Container({ children, backgroundColor, flexDirection, gap, margin, flex, flexShrink }: ContainerProps) {
  return (
    <div className={`${container}`} style={{ backgroundColor, flexDirection, gap, margin, flex, flexShrink }}>{children}</div>
  );
}
