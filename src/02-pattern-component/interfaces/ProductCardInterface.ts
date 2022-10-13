import { ReactElement } from "react";

export interface ProductCardChildrenProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductCardProps {
  Title?: JSX.Element | JSX.Element[];
  Image?: JSX.Element | JSX.Element[];
  Buttons?: JSX.Element | JSX.Element[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleCounter: (value: number) => void;
  product: Product;
}

export interface ProductImageProps {
  image?: string;
}

export interface ProductTitleProps {
  title?: string;
}

export interface ProductButtons {
  initialValue?: number;
  counter: number;
  handleCounter: (value: number) => void;
}
