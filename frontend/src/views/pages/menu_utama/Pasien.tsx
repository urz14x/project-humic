import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { icons } from "../../../assets";
import {
  IMidwife,
  INewPatient,
} from "../../../ts/interfaces/global_interfaces";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SearchBar from "../../../components/Form/SearchBar";
import ListPatient from "../../../components/ListPatient/ListPatient";

export default function Pasien() {
  const redirect = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tabsSearchPatient, setTabsSearchPatient] = useState<boolean>(false);
  const auth = useRecoilValue(authenticated);
  const [midwife_id] = useState<IMidwife[]>(auth.midwife?.id);
  const [results, setResults] = useState([]);
  const [selectedMedicalRecord, setSelectedMedicalRecord] = useState("120");
  const [values, setValues] = useState<INewPatient>({
    midwife_id: midwife_id,
    fullname: "",
    place_of_birth: "",
    date_of_birth: "",
    address: "",
    status: "",
    nik: "",
    no_rm: "",
  });
  const [errors, setErrors] = useState<{ nik: string; no_rm: string }>([]);

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalSearchPatient() {
    setTabsSearchPatient(false);
  }
  const handlerNewPatient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //   await axios.post("http://127.0.0.1:8000/api/v1/patients/", values);
      //   toast.loading("Please wait...");
      //   redirect("/pasien/laporan");
      await toast.promise(
        axios.post("http://127.0.0.1:8000/api/v1/patients/", values),
        {
          pending: "Sedang Membuat pasien",
          success: "Berhasil Membuat pasien 👌",
          error: "Error Membuat pasien",
        }
      );
      redirect("/pasien/laporan");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.errors);
    }
  };
  useEffect(() => {
    document.title = "Pasien | Tempat Praktik Mandiri bidan";
    console.log(`${selectedMedicalRecord}-${values.no_rm}`);
  }, [selectedMedicalRecord, values.no_rm]);
  return (
    <section className=" w-full flex items-center justify-center overflow-y-hidden">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-tiempos_regular mb-14 text-colors_smooth_black border-b-4 border-colors_primary ">
            Menu Pasien
          </h1>
        </div>

        <div className="flex flex-col  items-center md:flex-row space-x-0 md:space-x-4 gap-5 ">
          <div
            onClick={() => setIsOpen(!false)}
            className="flex flex-col gap-3 items-center justify-center w-[286px] h-[155px] bg-colors_primary hover:bg-colors_secondary rounded-md cursor-pointer shadow-lg transition-colors"
          >
            <img
              src={icons.IconTambahPasien}
              className="w-12 h-12"
              alt="Icon tambah pasien"
            />
            <h3 className="text-2xl text-colors_smooth_white font-sofia">
              Pasien Baru
            </h3>
          </div>
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
                <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25" />
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
                    <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Masukan data pasien
                      </Dialog.Title>
                      <Dialog.Description as="h1">
                        Silahkan Isi data pasien baru.
                      </Dialog.Description>
                      <Dialog.Description as="div">
                        <form className="mt-5" onSubmit={handlerNewPatient}>
                          <div className="flex flex-col space-y-2 mb-3">
                            <label
                              htmlFor="fullName"
                              className="font-sofia text-sm"
                            >
                              Nama Lengkap
                            </label>
                            <input
                              type="text"
                              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
                              id="fullName"
                              placeholder="Masukan nama lengkap"
                              value={values.fullname}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  fullname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-2 mb-3">
                            <label
                              htmlFor="tempatLahir"
                              className="font-sofia text-sm"
                            >
                              Tempat Lahir
                            </label>
                            <input
                              type="text"
                              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
                              id="tempatLahir"
                              placeholder="Tempat lahir"
                              value={values.place_of_birth}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  place_of_birth: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-2 mb-3">
                            <label
                              htmlFor="tanggalLahir"
                              className="font-sofia text-sm"
                            >
                              Tanggal Lahir
                            </label>
                            <input
                              type="date"
                              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
                              id="tanggalLahir"
                              value={values.date_of_birth}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  date_of_birth: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-1 mb-3">
                            <label
                              htmlFor="alamat"
                              className="font-sofia text-sm"
                            >
                              Alamat
                            </label>
                            <input
                              type="text"
                              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
                              id="alamat"
                              placeholder="Alamat"
                              value={values.address}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  address: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-1 mb-3">
                            <label
                              htmlFor="status"
                              className="font-sofia text-sm"
                            >
                              Status
                            </label>
                            <input
                              type="text"
                              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
                              id="status"
                              placeholder="Status"
                              value={values.status}
                              onChange={(e) =>
                                setValues({ ...values, status: e.target.value })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-1 mb-3">
                            <label
                              htmlFor="nik"
                              className="font-sofia text-sm flex items-center justify-between"
                            >
                              <span>NIK</span>
                              {errors.nik ? (
                                <span className="text-red-500 text-xs">
                                  Data yang Anda masukan sudah dipakai orang
                                  lain
                                </span>
                              ) : (
                                ""
                              )}
                            </label>
                            <input
                              type="text"
                              className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary ${
                                errors.nik
                                  ? "border-red-500 focus:outline-none"
                                  : ""
                              } focus:outline-none rounded-md`}
                              id="nik"
                              placeholder="NIK (Nomor Induk Kependudukan)"
                              value={values.nik}
                              onChange={(e) =>
                                setValues({ ...values, nik: e.target.value })
                              }
                            />
                          </div>
                          <div className="flex flex-col space-y-1">
                            <label
                              htmlFor="nik"
                              className="font-sofia text-sm flex items-center justify-between"
                            >
                              <span>No. Rekam Medik</span>
                              {errors.no_rm ? (
                                <span className="text-red-500 text-xs">
                                  Data yang anda masukan sudah dipakai orang
                                  lain
                                </span>
                              ) : (
                                ""
                              )}
                            </label>
                            <div className="flex flex-row items-center gap-2">
                              <select
                                value={selectedMedicalRecord}
                                onChange={(e) =>
                                  setSelectedMedicalRecord(e.target.value)
                                }
                                id="level-medical-record"
                                className="focus:outline-none bg-colors_primary w-52 text-colors_smooth_white rounded-md py-2 border-2 border-gray-200 text-sm"
                              >
                                <option disabled>Pilihan Level</option>
                                <option value="0120">0120 - Kehamilan</option>
                                <option value="0121">0121 - Persalinan</option>
                                <option value="0122" defaultChecked>
                                  0122 - Nifas
                                </option>
                                <option value="0123">0123 - KB</option>
                                <option value="0124">
                                  0124 - Kesehatan Reproduksi
                                </option>
                                <option value="0125">
                                  0125 - Balita Tumbuh
                                </option>
                                <option value="0126">
                                  0126 - Balita Kembang
                                </option>
                                <option value="0127">
                                  0127 - Balita Mental Emosional
                                </option>
                              </select>
                              <input
                                type="text"
                                className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary ${
                                  errors.no_rm
                                    ? "border-red-500 focus:outline-none"
                                    : ""
                                } focus:outline-none rounded-md`}
                                id="status"
                                placeholder="Nomor Rekam Medik"
                                value={values.no_rm}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    no_rm: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-center gap-5 mt-4">
                            <button
                              onClick={closeModal}
                              type="button"
                              className="w-full h-10 text-red-500 hover:text-red-700 rounded-md font-sofia leading-3 flex items-center justify-center gap-3"
                            >
                              Batal
                            </button>
                            <button
                              type="submit"
                              className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 flex items-center justify-center gap-3 hover:bg-colors_secondary transition-colors"
                            >
                              Buat pasien baru
                            </button>
                          </div>
                        </form>
                      </Dialog.Description>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div onClick={() => setTabsSearchPatient(!false)}>
            <div className="flex flex-col gap-3 items-center justify-center w-[286px] h-[155px] bg-white hover:bg-colors_smooth_white rounded-md cursor-pointer shadow-lg transition-colors">
              <img
                src={icons.IconSemuaPasien}
                className="w-12 h-12"
                alt="Icon tambah pasien"
              />
              <h3 className="text-2xl text-colors_smooth_black font-sofia">
                Cari pasien
              </h3>
            </div>
          </div>
          <Transition appear show={tabsSearchPatient} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeModalSearchPatient}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25" />
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
                    <Dialog.Panel className="w-full max-w-3xl h-96 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Cari pasien
                      </Dialog.Title>

                      <Dialog.Description as="div">
                        <SearchBar setResults={setResults} />
                      </Dialog.Description>

                      <Dialog.Description as="div">
                        {results.length > 0 ? (
                          <ListPatient results={results} />
                        ) : (
                          <div className="font-sofia text-gray-400 flex justify-center items-center mt-28">
                            Tidak ada pasien yang di cari
                          </div>
                        )}
                      </Dialog.Description>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </section>
  );
}
