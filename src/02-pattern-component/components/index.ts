import { ProductCardProps } from "../interfaces/ProductCardInterface";
import { ProductCard as ProductCardParent } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardParent, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage,
});

export default ProductCard;
