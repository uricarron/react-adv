import { createContext } from "react";
import styles from "../styles/styles.module.css";
import { useCounter } from "../hooks/useCounter";
import {
  ProductCardChildrenProps,
  ProductContextProps,
} from "../interfaces/ProductCardInterface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
}: ProductCardChildrenProps) => {
  const { counter, handleCounter } = useCounter({ initialValue: 0 });

  return (
    <Provider value={{ counter, handleCounter, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
