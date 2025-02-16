import Cart from "@/components/features/cart.tsx";
import Products from "@/components/features/products.tsx";

export default function GridLayout() {
  return (
    <div className="md:py-22 md:px-10 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-foreground font-bold">Desserts</h1>
            <Products />
          </div>
        </div>
        <div className="lg:w-1/3">
          <Cart />
        </div>
      </div>
    </div>
  );
}
