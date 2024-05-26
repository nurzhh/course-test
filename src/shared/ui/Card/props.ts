import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children: ReactNode | string;
  cardStyle: "first" | "second";
  cardColor?: string;
  imageCard?: string;
}
