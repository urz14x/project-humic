import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IAuth } from "../../ts/interfaces/global_interfaces";
import { authenticated } from "../../store";
import {
  RiBook2Line,
  RiExchangeDollarFill,
  RiGroupLine,
  RiHome2Line,
  RiLogoutBoxLine,
  RiShieldUserLine,
} from "react-icons/ri";
import { TMenuLainnya, TMenuUtama } from "../../ts/types/global_types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSetRecoilState } from "recoil";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const menuUtama: TMenuUtama[] = [
  { menu: "Beranda", icon: <RiHome2Line />, path: "/dashboard/beranda" },
  { menu: "Pasien", icon: <RiGroupLine />, path: "/dashboard/pasien" },
];

const menuLainnya: TMenuLainnya[] = [
  {
    menu: "Pembayaran",
    icon: <RiExchangeDollarFill />,
    path: "/dashboard/pembayaran",
  },
  {
    menu: "Laporan RM/Pasien",
    icon: <RiBook2Line />,
    path: "/pasien/laporan",
  },
  {
    menu: "Laporan Keuangan",
    icon: <RiBook2Line />,
    path: "/pasien/keuangan",
  },
];
function Dashboard({ children }: Props) {
  const redirect = useNavigate();
  const setAuth = useSetRecoilState<IAuth>(authenticated);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("/account/logout");
      setTimeout(() => {
        setAuth({ check: false });
        localStorage.removeItem("token-midwive");
        redirect("/login");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  return (
    <div>
      <div>
        <>
          {/* Logout confirm */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        Sampai jumpa lagi 🙌
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Apakah anda benar-benar ingin log out?
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <button
                          type="button"
                          className={`inline-flex justify-center items-center gap-2 ${
                            loading
                              ? "cursor-wait loading-button"
                              : "cursor-pointer"
                          } rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 `}
                          onClick={logout}
                        >
                          <RiLogoutBoxLine />
                          {loading ? "Tunggu Sebentar..." : `Konfirmasi Logout`}
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-800 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Batal
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <aside
            className={`fixed float-left top-0 left-0 w-[258px]  min-h-screen bg-white border-r-2 z-50 border-gray-200 transition-all ${
              openSidebar ? "-translate-x-full" : "-translate-x-0"
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center rounded-full left-[250px] top-[340px] bg-colors_primary">
              <button onClick={() => setOpenSidebar(!openSidebar)}>
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <header className="w-full mt-5 mb-5 grid place-items-center">
              <h1 className="text-2xl font-tiempos_regular text-colors_smooth_black antialiased">
                TMB
              </h1>
              <p className="text-xs font-sofia text-colors_smooth_black antialiased">
                Praktik bidan mandiri
              </p>
            </header>

            <nav className="flex flex-col font-sofia w-full">
              <div>
                <span className="text-xs text-[#bbb] px-5 py-2">
                  Menu utama
                </span>
                {menuUtama?.map((menu, idx) => {
                  return (
                    <NavLink
                      to={menu.path}
                      key={idx}
                      className={({ isActive }) =>
                        `flex items-center w-full  gap-1 pt-2 pb-2 pl-7 pr-3 transition-colors ${
                          isActive
                            ? "bg-[#DCF6F7] text-sm text-colors_secondary border-r-4 border-colors_primary"
                            : ""
                        }} hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-colors_primary`
                      }
                    >
                      {menu.icon}
                      <span>{menu.menu}</span>
                    </NavLink>
                  );
                })}
              </div>

              <div>
                <span className="text-xs text-[#bbb] px-5 py-1 mt-5">
                  Menu Lainya
                </span>
                <div className="w-full">
                  {menuLainnya?.map((val, idx) => {
                    return (
                      <NavLink
                        key={idx}
                        to={val.path}
                        className={({ isActive }) =>
                          `flex items-center w-full  gap-1 pt-2 pb-2 pl-7 pr-3 transition-colors ${
                            isActive
                              ? "bg-[#DCF6F7] text-sm text-colors_secondary border-r-4 border-colors_primary"
                              : ""
                          }} hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-colors_primary`
                        }
                      >
                        {val.icon}
                        <span>{val.menu}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div>
                <span className="text-xs text-[#bbb] px-5 py-1 mt-5">
                  Akun & Tampilan
                </span>
                <div className=" w-full">
                  <NavLink
                    to="/account/settings"
                    className={({ isActive }) =>
                      `flex items-center w-full  gap-1 pt-2 pb-2 pl-7 pr-3 transition-colors ${
                        isActive
                          ? "bg-[#DCF6F7] text-sm text-colors_secondary border-r-4 border-colors_primary"
                          : ""
                      }} hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-colors_primary`
                    }
                  >
                    <RiShieldUserLine />
                    <span>Akun & Tampilan</span>
                  </NavLink>
                  <button
                    onClick={openModal}
                    className="flex items-center w-full gap-1 pt-2 pb-2 pl-7 pr-3 transition-colors hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-colors_primary"
                  >
                    <RiLogoutBoxLine />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </nav>
          </aside>
        </>
        <main
          className={`ml-0 lg:ml-0 ${
            openSidebar ? "lg:ml-0" : "lg:ml-64"
          } py-16 sm:text-justify px-16`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
