import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function MyModal({ deleteUser }) {
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <Button
          type="button"
          onClick={() => openModal()}
          className="bg-red-600"
        >
          Remove User
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Warning!!!
                  </Dialog.Title>
                  <Button
                    onClick={() => {
                      closeModal();
                    }}
                    bg="bg-white"
                    rounded="rounded-bl-md"
                    className="absolute right-0 top-0 text-red-500 "
                    padding="px-1 py-1"
                  >
                    <XMarkIcon className="h-8 w-8" />
                  </Button>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please confirm your request
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      onClick={() => {
                        closeModal();
                        deleteUser();
                        navigate("/admin/users");
                      }}
                    >
                      Confirm delete
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

MyModal.propTypes = {
  deleteUser: PropTypes.func,
};
