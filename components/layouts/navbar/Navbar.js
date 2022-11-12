import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  NavbarProductNavigation,
  NavbarTemplatesNavigation,
} from "./NavbarContent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navbarHelper = (item) => {
  if (item.name === "Product") {
    return <NavbarProductNavigation />;
  }
  return <NavbarTemplatesNavigation />;
};

export default function Navbar() {
  const navigation = [
    { name: "Product", href: "#", current: false, content: true },
    { name: "Templates", href: "#", current: false, content: true },
    { name: "Pricing", href: "#", current: true },
    { name: "Reviews", href: "#", current: false },
  ];

  return (
    <div className="!bg-scroll sticky left-0 top-0 right-0 bottom-auto z-[100000]">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a className="!bg-scroll maxlg:top-[17px] maxlg:z-1 maxlg:pl-0 top-[12px] maxmd:pl-[10px] bg-transparent text-[#00b289] no-underline cursor-pointer text-[24px] maxsm:text-[18px]">
                      FE2_BONSAI
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <div key={item.name} className="group">
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                          >
                            {item.name}
                          </a>
                          {item.content ? navbarHelper(item) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    disabled
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
