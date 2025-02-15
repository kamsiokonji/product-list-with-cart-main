import { Card, CardHeader } from "@/components/ui/card.tsx";
import Carbon from "@/assets/images/icon-carbon-neutral.svg";
import EmptyCart from "@/assets/images/illustration-empty-cart.svg";
import { Button } from "@/components/ui/button.tsx";
import { useCart } from "@/provider/cart-context";
import Cancel from "@/assets/images/icon-remove-item.svg";

export default function Cart() {
  const { items, getTotalItems, getTotalPrice, removeFromCart } = useCart();

  return (
    <Card className={"space-y-4 border-none p-6"}>
      <CardHeader>
        <h1 className={"text-destructive text-2xl font-bold"}>
          Your Cart ({getTotalItems()})
        </h1>
      </CardHeader>

      {items.length > 0 ? (
        <>
          <div className={"flex flex-col space-y-4"}>
            {items.map((item) => (
              <>
                <div
                  key={item.id}
                  className={"flex justify-between items-center"}
                >
                  <div className={"flex flex-col gap-3"}>
                    <h1 className={"font-semibold text-foreground"}>
                      {item.name}
                    </h1>

                    <span className={"flex items-center space-x-4"}>
                      <p className={"text-destructive"}>{item.quantity} x</p>

                      <p className={"text-primary-foreground"}>
                        @ ${item.price}
                      </p>

                      <p className={"text-primary-foreground font-semibold"}>
                        ${item.price * item.quantity}
                      </p>
                    </span>
                  </div>
                  <img
                    src={Cancel}
                    alt={"remove-item"}
                    className={"w-6 h-6 border border-input rounded-full p-1"}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>

                <hr className={"text-primary w-full"} />
              </>
            ))}

            <div className={"flex justify-between items-center"}>
              <h1 className={"text-sm text-primary-foreground"}>Order Total</h1>
              <h1 className={"text-md font-bold text-foreground"}>
                ${getTotalPrice().toFixed(2)}
              </h1>
            </div>
          </div>

          <div className={"flex flex-col space-y-4"}>
            <div
              className={
                "bg-background rounded-lg p-4 w-full flex items-center justify-center"
              }
            >
              <span
                className={
                  "flex items-center space-x-1 text-primary-foreground"
                }
              >
                <img src={Carbon} alt="carbon" />
                <h1>This is a</h1>
                <h1 className={"font-semibold text-foreground"}>
                  carbon-neutral
                </h1>
                <h1>delivery</h1>
              </span>
            </div>

            <Button
              className={"text-md rounded-3xl text-white p-6 w-full"}
              variant={"destructive"}
            >
              Confirm Order
            </Button>
          </div>
        </>
      ) : (
        <div className={"flex flex-col justify-center items-center p-4"}>
          <img src={EmptyCart} alt={"empty-cart"} className={"w-32 h-32"} />

          <h1 className={"text-lg font-semibold text-primary-foreground"}>
            Your added items will appear here
          </h1>
        </div>
      )}
    </Card>
  );
}
