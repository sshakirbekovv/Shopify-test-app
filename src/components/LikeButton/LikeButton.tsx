import React from "react";
import { LikeButtonMain } from "./LikeButton.styles";

const LikeButton: React.FC<{
  title: string;
  onClick?: () => void;
  onAnimationEnd?: () => void;
  color?: string;
  background?: string;
  className?: string;
}> = ({ title, onClick, color, background, onAnimationEnd, className }) => {
  return (
    <LikeButtonMain
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
      style={{ color: color, background: background }}
      className={className}
    >
      {title}
    </LikeButtonMain>
  );
};

export default LikeButton;
