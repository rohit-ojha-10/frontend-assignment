import React from "react";
import { StyledButton } from "./styles";
// Define your styles in a separate object

type ButtonProps = {
  color?: string;
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ color, label, onClick }) => {
  return (
    <StyledButton style={{ backgroundColor: color || "#2980b9" }} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
