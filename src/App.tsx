import { useState } from "react";
import SuccessModal from "@/components/features/success-modal.tsx";
import Cart from "@/components/features/cart.tsx";
import Products from "@/components/features/products.tsx";

export default function GridLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className={"md:py-22 md:px-10 p-6"}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={"flex flex-col gap-8"}>
            <h1 className={"text-4xl text-foreground font-bold"}>Desserts</h1>
            <Products />
          </div>
        </div>

        <Cart />

        <SuccessModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
