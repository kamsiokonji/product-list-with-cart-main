import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";

interface MobileDrawerProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
