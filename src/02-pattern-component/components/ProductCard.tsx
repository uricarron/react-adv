import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useCounter } from "../hooks/useCounter";

interface ProductCardProps {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { counter, handleCounter } = useCounter({ initialValue: 0 });

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt="Coffee Mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="Coffee Mug" /> */}
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleCounter(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => handleCounter(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
