import type { BaseSyntheticEvent, HTMLInputTypeAttribute, ReactNode } from "react";

export interface IFormLabelProps{
  htmlFor?: string, 
  className?: string, 
  children: ReactNode
}
export interface ITextInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  className?: string;
  errMsg?: string;
  handleChange(e: BaseSyntheticEvent):void
}