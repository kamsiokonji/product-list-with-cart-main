import { Modal } from "@/components/ui/modal.tsx";
import OrderConfirmed from "@/assets/images/icon-order-confirmed.svg";
import { Button } from "@/components/ui/button.tsx";
import useMobile from "@/lib/utils.ts";
import { MobileDrawer } from "@/components/ui/mobile-drawer.tsx";
import { useCart } from "@/provider/cart-context.tsx";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  isOpen,
  onClose,
}: SuccessModalProps): JSX.Element {
  const isMobile = useMobile();

  const { items, getTotalPrice, clearCart } = useCart();

  const handleNewOrder = () => {
    clearCart();
    onClose();
  };

  const content = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <img src={OrderConfirmed} alt="order-confirmed" className="w-12 h-12" />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-foreground font-bold">
            Order Confirmed
          </h1>
          <p className="text-md text-primary-foreground">
            We hope you enjoy your food!
          </p>
        </div>
      </div>

      <div className={"bg-[#fcf8f6] rounded-xl p-6 flex flex-col gap-5"}>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div key={item.id} className={"flex flex-col space-y-4"}>
              <div className={"flex justify-between items-center"}>
                <div className={"flex flex-row items-center space-x-4"}>
                  <img
                    src={item.image.thumbnail}
                    alt="image-thumbnail"
                    className={"w-14 h-14 rounded-md"}
                  />

                  <div className={"flex flex-col space-y-2"}>
                    <h1 className={"font-semibold text-foreground"}>
                      {item.name}
                    </h1>

                    <span className={"flex items-center space-x-4"}>
                      <p className={"text-destructive"}>{item.quantity}x</p>

                      <p className={"text-primary-foreground"}>
                        @ ${item.price.toFixed(2)}
                      </p>
                    </span>
                  </div>
                </div>

                <p className={"text-foreground font-semibold"}>
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>

              <hr className={"text-[#F5EEEC] w-full"} />
            </div>
          ))}

        <div className={"flex justify-between items-center"}>
          <h1 className={"text-[14px] text-primary-foreground"}>Order Total</h1>
          <h1 className={"text-[24px] font-bold text-foreground"}>
            ${getTotalPrice().toFixed(2)}
          </h1>
        </div>
      </div>

      <Button
        className="text-md rounded-3xl text-white p-6"
        variant="destructive"
        onClick={handleNewOrder}
      >
        Start New Order
      </Button>
    </div>
  );

  return isMobile ? (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      {content}
    </MobileDrawer>
  ) : (
    <Modal isOpen={isOpen} onClose={onClose}>
      {content}
    </Modal>
  );
}
