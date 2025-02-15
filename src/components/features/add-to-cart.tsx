import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/assets/images/icon-add-to-cart.svg";
import Minus from "@/assets/images/icon-decrement-quantity.svg";
import Plus from "@/assets/images/icon-increment-quantity.svg";

interface AddToCartProps {
  className?: string;
  onQuantityChange?: (quantity: number) => void;
}

export default function AddToCart({
  className,
  onQuantityChange,
}: AddToCartProps) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      {quantity === 0 ? (
        <Button
          className="text-md rounded-3xl text-foreground font-semibold p-6 flex items-center justify-center gap-2"
          variant="outline"
          onClick={handleIncrease}
        >
          <img src={AddToCartButton} alt="add-to-cart" />
          <span>Add to Cart</span>
        </Button>
      ) : (
        <div className="text-md rounded-4xl text-foreground font-semibold p-2 bg-destructive flex items-center justify-center gap-2 hover:bg-destructive-foreground">
          <Button
            onClick={handleDecrease}
            className={"hover:bg-destructive-foreground"}
            variant={"ghost"}
          >
            <img
              src={Minus}
              alt="minus"
              className={"border border-white rounded-full w-6 h-6 p-1"}
            />
          </Button>
          <span className="text-lg font-semibold text-white">{quantity}</span>
          <Button
            onClick={handleIncrease}
            variant={"ghost"}
            className={"hover:bg-destructive-foreground"}
          >
            <img
              src={Plus}
              alt="plus"
              className={"border border-white rounded-full p-1 w-6 h-6"}
            />
          </Button>
        </div>
      )}
    </div>
  );
}
