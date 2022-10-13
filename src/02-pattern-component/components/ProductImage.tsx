import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import { ProductImageProps } from "../interfaces/ProductCardInterface";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ image }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={styles.productImg}
      src={product.img ? product.img : noImage}
      alt={product.title}
    />
  );
};
