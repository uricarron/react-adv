import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "abc123",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          <ProductCard product={product}>
            <ProductImage image="./coffee-mug.png" />
            <ProductTitle title={"Coffee Mug"} />
            <ProductButtons />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage image="./coffee-mug.png" />
            <ProductTitle title={"Coffee Mug"} />
            <ProductButtons />
          </ProductCard>

          {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}
        </div>
      </div>
    </div>
  );
};
