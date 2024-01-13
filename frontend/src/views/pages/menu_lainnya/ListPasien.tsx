import axios from "axios";
import { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { INewPatient } from "../../../ts/interfaces/global_interfaces";
import useSWR from "swr";

import ListPatientTable from "../../../components/ListPatient/ListPatientTable";

export default function ListPasien() {
  const [info, setInfo] = useState([]);
  const [patients, setPatients] = useState<INewPatient[]>([]);

  const url: string = "http://127.0.0.1:8000/api/v1/patients";
  const fetcher = async (url) => {
    const response = await axios.get(url);
    setPatients(response.data.data as INewPatient[]);
    setInfo(response.data.links);
    return response.data as INewPatient;
  };
  function handleNextPage() {
    fetcher(info.next);
  }
  function handlePrevPage() {
    fetcher(info.prev);
  }
  //   const { data } = useSWR(`/patients?page=${pageIndex}`, fetcher);
  const { data, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    document.title = "Daftar pasien";
  }, [data]);

  return (
    <section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />

      <div className="mb-10 flex flex-col">
        <NavLink
          to={"/dashboard/pasien"}
          className="flex items-center gap-2 hover:underline mb-3"
        >
          <span>
            <RiArrowLeftSLine />
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
      <div className=" flex justify-end mb-5 ">
        {info.next ? (
          <button
            className=" text-colors_smooth_black border border-gray-400 rounded-md"
            onClick={handleNextPage}
          >
            <span className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        ) : null}
        {info.prev ? (
          <button
            className=" text-colors_smooth_black border border-gray-400 rounded-md"
            onClick={handlePrevPage}
          >
            <span className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </button>
        ) : null}
      </div>
      <div className="flex flex-col">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <ListPatientTable patients={patients} />
        )}
      </div>
    </section>
  );
}
