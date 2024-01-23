import { useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function DaftarPasien() {
  useEffect(() => {
    document.title = "Daftar pasien";
    window.location.reload();
  }, []);
  return (
    <section>
      <div className="mb-10 flex flex-col">
        <NavLink
          to={"/dashboard/pasien"}
          className="flex items-center gap-2 hover:underline mb-3"
        >
          <span>
            <RiArrowLeftSLine />{" "}
          </span>
          <span>Kembali</span>
        </NavLink>
        <h1 className="text-3xl font-tiempos_regular ">
          Laporan Rekam medik pasien,
        </h1>

        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <NavLink
                to="/dashboard/beranda"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-colors_primary dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Beranda
              </NavLink>
            </li>
            <li>
              <div className="flex items-center">
                <RiArrowRightSFill />
                <NavLink
                  to="/dashboard/pasien"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-colors_primary md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Laporan Pasien
                </NavLink>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <RiArrowRightSFill />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Data pasien
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col"></div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-colors_smooth_white uppercase font-sofia">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama lengkap
            </th>
            <th scope="col" className="px-6 py-3">
              Tempat lahir
            </th>
            <th scope="col" className="px-6 py-3">
              Alamat
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              NIK
            </th>
            <th scope="col" className="px-6 py-3">
              NO RM
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Eren jaeger
            </th>
            <td className="px-6 py-4">Siganshina</td>
            <td className="px-6 py-4">Jl. Shiganshina</td>
            <td className="px-6 py-4">Lajang</td>
            <td className="px-6 py-4">20003931489212</td>
            <td className="px-6 py-4">012680</td>
          </tr>
          <tr className="bg-white hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Tasya Fitri Sawaliyah
            </th>
            <td className="px-6 py-4">Cicalengka</td>
            <td className="px-6 py-4">Jl. Konoha</td>
            <td className="px-6 py-4">Menikah</td>
            <td className="px-6 py-4">2000412361341</td>
            <td className="px-6 py-4">012689</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
