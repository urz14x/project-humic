import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IMidwife } from "../../ts/interfaces/global_interfaces";

export default function Profile({ username }: IMidwife) {
  return (
    <div className="w-10 h-10 bg-white text-colors_primary flex items-center justify-center rounded-full text-md shadow-lg">
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-colors_primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <RiUser3Fill />
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
            <Menu.Items className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 space-y-5">
                <Menu.Item>
                  <NavLink
                    to={"/account/settings"}
                    className="flex items-center space-x-3 divide hover:bg-colors_primary hover:text-colors_smooth_white px-3 py-2 w-full rounded-sm"
                  >
                    <RiUser3Line />
                    <span className="text-sm lowercase font-sofia">@{username}</span>
                  </NavLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
