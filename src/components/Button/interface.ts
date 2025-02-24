import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  appearance?: "borderRadius" | "borderRadiusLeft" | "borderRadiusRight" | "borderRight" | "authorize";

}