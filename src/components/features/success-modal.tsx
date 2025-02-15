import { Modal } from "@/components/ui/modal.tsx";
import OrderConfirmed from "@/assets/images/icon-order-confirmed.svg";
import { Button } from "@/components/ui/button.tsx";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  isOpen,
  onClose,
}: SuccessModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={"flex flex-col gap-8"}>
        <div className={"flex flex-col gap-6"}>
          <img
            src={OrderConfirmed}
            alt="order-confirmed"
            className={"w-12 h-12"}
          />

          <span className={"flex flex-col gap-3"}>
            <h1 className={"text-3xl text-foreground font-bold"}>
              Order Confirmed
            </h1>

            <p className={"text-md text-primary-foreground"}>
              We hope you enjoy your food!
            </p>
          </span>
        </div>

        <Button
          className={"text-md rounded-3xl text-white p-6"}
          variant={"destructive"}
        >
          Start New Order
        </Button>
      </div>
    </Modal>
  );
}
