import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import PropTypes from "prop-types";

import EventPage from "../../pages/Non-Admin/EventPage";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function EventDialog({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
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

        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-md bg-gray-200 p-2 text-left align-middle shadow-xl transition-all md:p-0">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900"></Dialog.Title>
                <Button
                  onClick={() => {
                    closeModal();
                  }}
                  bg="bg-gray-200"
                  rounded="rounded-bl-md"
                  className="absolute right-0 text-red-500 ring-1 ring-gray-200"
                  padding="px-1 py-1"
                >
                  <XMarkIcon className="h-8 w-8" />
                </Button>

                {/* Event */}
                <EventPage closeModal={closeModal} />
                {/*  */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

EventDialog.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
