export interface MainMenuType {
  id?: number;
  title?: string;
}

export interface LogoPartnersType {
  src: string | undefined;
  alt?: string;
  width?: number;
}

export interface ImageCarouselType {
  src: string;
  alt: string;
  key?: null | undefined;
  id: number;
}

export interface LogoCarouselType {
  id: number;
  src: string;
  alt: string;
  text: string;
}
