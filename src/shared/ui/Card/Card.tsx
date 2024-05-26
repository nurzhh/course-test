import React from "react";
import { CardProps } from "./props";
import cn from "classnames";
import "./styles.scss";

export default function Card({
  className,
  children,
  cardStyle = "first",
  cardColor,
  imageCard,
}: CardProps) {
  return (
    <div className={cn(`card__${cardStyle}`, className)}>
      {cardStyle == "first" ? (
        <div
          className="flex py-[9px] items-center justify-center rounded-[18px]"
          style={{
            backgroundColor: cardColor,
          }}
        >
          <div
            className="w-[144px] h-[144px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageCard})`,
            }}
          />
        </div>
      ) : null}
      {children}
    </div>
  );
}
