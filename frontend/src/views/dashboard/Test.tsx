import {
  RiHome2Line,
  RiGroupLine,
  RiExchangeDollarFill,
  RiBook2Line,
  RiShieldUserLine,
  RiLogoutBoxLine,
  RiSettings3Line,
} from "react-icons/ri";

const menuPelayanan: string[] = [
  "kehamilan",
  "Persalinan",
  "Nifas",
  "KB",
  "Balita Tumbuh",
  "Balita kembang",
  "Balita Mental Emosional",
];
const menuLainnya = [
  { menu: "Pembayaran", icon: <RiExchangeDollarFill /> },
  { menu: "Laporan RM/Pasien", icon: <RiBook2Line /> },
  { menu: "Laporan Keuangan", icon: <RiBook2Line /> },
];
const menuSettings = [
  { menu: "Akun saya", icon: <RiShieldUserLine /> },
  { menu: "Pengaturan", icon: <RiSettings3Line /> },
  { menu: "Logout", icon: <RiLogoutBoxLine /> },
];
export default function Test() {
  return (
    <aside className="relative top-0 left-0 w-[250px] min-h-screen bg-white border-r-2 border-gray-200 hidden sm:block">
      <header className="w-full mt-5 mb-5 grid place-items-center">
        <h1 className="text-2xl font-tiempos_regular text-[#252525] antialiased">
          TMB
        </h1>
        <p className="text-xs font-sofia text-[#252525] antialiased">
          Praktik bidan mandiri
        </p>
      </header>

      <nav className="flex flex-col flex-auto font-sofia w-full">
        <span className="text-xs text-[#bbb] px-5 py-2">Menu utama</span>
        <button
          className={`flex items-center  gap-1 pt-2 pb-2 pl-7 pr-3 hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-color_primary`}
        >
          <RiHome2Line />
          <span>Beranda</span>
        </button>
        <button className="flex items-center gap-1 pt-2 pb-2 pl-7 pr-3  hover:bg-[#DCF6F7] text-sm text-colors_secondary hover:border-r-4 border-color_primary">
          <RiGroupLine />
          <span>Pasien</span>
        </button>
        <span className="text-xs text-[#bbb] px-5 py-1">Pelayanan Ibu</span>
        <div className=" w-full">
          {menuPelayanan?.map((menu) => {
            return (
              <button className="flex w-full hover:bg-[#DCF6F7] pb-1 pt-1 pl-5 pr-3 py-2 px-2 text-xs text-colors_secondary hover:border-r-4 border-color_primary">
                <span>{menu}</span>
              </button>
            );
          })}
        </div>
        <span className="text-xs text-[#bbb] px-5 py-1 mt-5">Menu Lainya</span>
        <div className=" w-full">
          {menuLainnya?.map((val, index) => {
            return (
              <button
                key={index}
                className="flex w-full items-center gap-1 hover:bg-[#DCF6F7] pb-2 pt-2 pl-5 pr-3 py-2 px-2 text-xs text-colors_secondary hover:border-r-4 border-color_primary"
              >
                {val.icon}
                <span>{val.menu}</span>
              </button>
            );
          })}
        </div>
        <span className="text-xs text-[#bbb] px-5 py-1 mt-5">
          Akun & Pengaturan
        </span>
        <div className=" w-full">
          {menuSettings?.map((val, index) => {
            return (
              <button
                key={index}
                className="flex w-full items-center gap-1 hover:bg-[#DCF6F7] pb-3 pt-3 pl-5 text-xs text-colors_secondary hover:border-r-4 border-color_primary"
              >
                {val.icon}
                <span>{val.menu}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
