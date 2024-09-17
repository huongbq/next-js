import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { clsx } from "clsx";

interface ModalProps {
  open: boolean;
  toggle: () => void;
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  footer?: ReactNode;
  headless?: boolean;
  position?: "center" | "start";
}

export const Modal = ({
  open,
  toggle,
  children,
  title,
  description,
  className,
  footer,
  headless,
  position = "center",
}: ModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          // leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex min-h-full items-${position} justify-center p-4`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              // leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={clsx(
                  "w-full rounded-t-lg bg-white sm:m-4 sm:max-w-2xl sm:rounded-xl",
                  className
                )}>
                {!headless ? (
                  <header className="flex items-end justify-center">
                    {title ? (
                      <Dialog.Title className="mt-9 text-3xl font-bold leading-[60px] text-primary-110">
                        {title}
                      </Dialog.Title>
                    ) : null}
                  </header>
                ) : null}
                <div className="mb-6">
                  {description ? (
                    <Dialog.Description className="text-sm">
                      {description}
                    </Dialog.Description>
                  ) : null}
                  {children}
                </div>
                {footer}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
