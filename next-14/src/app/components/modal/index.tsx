import { Dispatch, ReactNode, SetStateAction } from "react";
import { clsx } from "clsx";
import { Modal } from "./Modal";
import { Button } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { IBlogProps } from "../blog-overview";

export interface ConfirmModalProps {
  title: string;
  cancelText: string;
  className?: string;
  okText: string;
  onOk: (data: IBlogProps) => void;
  open: boolean;
  children?: ReactNode;
  hideFooter?: boolean;
  blogFormData: IBlogProps;
  setBlogFormData: Dispatch<SetStateAction<IBlogProps>>;
}

export interface ConfirmProps extends ConfirmModalProps {
  onClose: () => void;
}

export function ConfirmModal({
  title,
  cancelText,
  okText,
  onOk,
  onClose,
  className,
  open,
  children,
  hideFooter,
  blogFormData,
  setBlogFormData,
}: ConfirmProps) {
  const { handleSubmit } = useForm<IBlogProps>({
    mode: "all",
    defaultValues: blogFormData,
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      toggle={handleClose}
      className={clsx("px-8 py-4 lg:px-[60px] lg:py-10", className)}
      footer={
        !hideFooter && (
          <footer className="mt-6 flex flex-row-reverse items-center gap-2">
            <Button
              onClick={handleSubmit((data: IBlogProps) => {
                onOk(data);
              })}
              className="bg-green-500 border border-green-500 text-white px-4 py-2 rounded-lg">
              {okText}
            </Button>
            <Button
              onClick={handleClose}
              className="border-yellow-200 border px-4 py-2 rounded-lg">
              {cancelText}
            </Button>
          </footer>
        )
      }>
      <div className="flex items-center justify-between gap-14 text-xl leading-5 text-primary-109">
        <span className="text-primary-110">{title}</span>
        <button type="button" onClick={handleClose}>
          <img
            src="https://w7.pngwing.com/pngs/57/62/png-transparent-computer-icons-button-closed-angle-rectangle-logo-thumbnail.png"
            alt="icon-close"
            className="w-5"
          />
        </button>
      </div>
      <div className="relative my-8 text-black-text">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit((data: IBlogProps, e) => {
            e?.preventDefault();
            onOk(data);
            setBlogFormData({
              title: "",
              description: "",
            });
          })}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={blogFormData.title}
              onChange={(e) =>
                setBlogFormData({
                  ...blogFormData,
                  title: e.target.value,
                })
              }
              placeholder="Enter blog title"
              className="pl-3 border-b border-gray-600 focus-visible:!border-none"
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              placeholder="Enter blog description"
              value={blogFormData.description}
              onChange={(e) =>
                setBlogFormData({
                  ...blogFormData,
                  description: e.target.value,
                })
              }
              id="description"
              className="pl-3 border-b border-gray-600"
            />
          </div>
        </form>
      </div>
      {children}
    </Modal>
  );
}
