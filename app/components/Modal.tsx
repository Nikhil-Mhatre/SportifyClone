import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay
          className="
                bg-neutral-900/30
                backdrop-blur-sm
                fixed
                inset-0
                flex
                flex-col
                justify-start
                items-center
                md:pt-24"
        >
          <Dialog.DialogContent
            className="            
            overflow-y-scroll
            bg-neutral-800
            h-full 
            w-full
            flex 
            flex-col
            justify-start
            items-center
            gap-8
            py-24
            px-12
            md:py-6
            md:w-6/12
            lg:w-4/12
            md:h-auto
            md:relative
            md:px-12
            md:gap-6
            "
          >
            <Dialog.Title
              className="
                text-xl
                font-bold"
            >
              {title}
            </Dialog.Title>
            <Dialog.Description
            className="
            text-sm
            leading-normal">{description}</Dialog.Description>
            <div className="
            w-full">{children}</div>
            <Dialog.Close asChild>
              <button
                className="
              absolute 
              top-0
              right-0
              p-6
              text-2xl
              text-neutral-600
              hover:text-white
              transition
              "
              >
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default Modal;
