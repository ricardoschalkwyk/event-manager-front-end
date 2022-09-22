import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function Dropdown({ options = [], children, right }) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={clsx(
              right ? "right-0 origin-top-right" : "left-0 origin-top-left",
              "absolute mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            )}
          >
            {options.map((option, index) => (
              <div className="px-1 py-1" key={index}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={clsx(
                        active ? "bg-gray-500 text-white" : "text-gray-900",
                        "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                      )}
                      onClick={() => {
                        option.onClick?.();
                      }}
                    >
                      {option.text}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
  children: PropTypes.node,
  right: PropTypes.bool,
};
