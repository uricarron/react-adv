import { useContext } from "react";
import { ProductTitleProps } from "../interfaces/ProductCardInterface";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return <span className={styles.productDescription}>{product.title}</span>;
};
