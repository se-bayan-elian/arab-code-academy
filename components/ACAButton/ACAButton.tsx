"use client";

import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  icon?: React.ReactNode;
  weight?: "400" | "500" | "600" | "700" | "900";
  bg?: "tomato" | "cyan";
  size?: "lg" | "md" | "sm";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode
  disabled?: boolean
}

const ACAButton: React.FC<Props> = ({
  text,
  bg,
  icon,
  weight,
  size,
  type,
  children,
  disabled
}) => {
  return (
    <Button
      disabled = {disabled}
      fontWeight={weight}
      bg={`aca_${bg}.400`}
      _hover={{
        bg: `aca_${bg}.500`,
      }}
      size={size}
      type={type}
    >
      {icon}
      {text}
      {children}
    </Button>
  );
};

export default ACAButton;
