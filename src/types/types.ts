import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ComponentType } from "react";

export interface MainMenuType {
  id?: number;
  title?: string;
}

export interface LogoPartnersType {
  src: string | undefined;
  alt?: string;
  width?: number;
}

export interface SocialMediaType{
  title?: string;
  icon: ComponentType<IconProps>;
  url?: string; 
}