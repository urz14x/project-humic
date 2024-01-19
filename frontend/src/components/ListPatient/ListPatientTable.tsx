import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import { RiCheckLine, RiInformationLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useReactToPrint } from "react-to-print";

export default function ListPatientTable({ patients }) {
  const [seletedPatient, setSelectedPatient] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "DataPasien",
    onAfterPrint: () => alert("Data PDF Di Save!"),
  });
  console.log(generatePDF);
  function closeModal() {
    setIsOpen(false);
  }
  async function deletePatient(patientId: number) {
    //   await axios.delete(`/patients/${patientId}`);
    //   redirect("/pasien/laporan");
    //   toast.update(id, {
    //     render: "Sedang menghapus pasien..",
    //     isLoading: true,
    //   });
    await toast.promise(axios.delete(`/patients/${patientId}`), {
      pending: "Sedang menghapus pasien",
      success: "Berhasil Menghapus pasien 👌",
      error: "Error menghapus pasien",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  function openModal(index: number) {
    setIsOpen(true);
    setSelectedPatient(index);
    console.log("patien dengan index", index);
  }
  function renderModal() {
    if (seletedPatient !== null) {
      const patient = patients[seletedPatient];
      return (
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
              <div className="fixed inset-0 bg-colors_smooth_black bg-opacity-25" />
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
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-sm transition-all font-sofia">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {patient.fullname}
                      <hr />
                    </Dialog.Title>
                    <Dialog.Description
                      as="div"
                      className="mt-4 flex flex-col space-y-3 max-w-md"
                    >
                      <div>
                        <p className="text-gray-500 text-xs">Nama Lengkap</p>
                        <h1> {patient.fullname}</h1>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Tanggal Lahir</p>
                        <h1>
                          {patient.place_of_birth}, {patient.date_of_birth}
                        </h1>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <div>
                          <p className="text-gray-500 text-xs">Alamat</p>
                          <h1> {patient.address}</h1>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">NIK</p>
                          <h1> {patient.nik}</h1>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">
                            N0. Rekam Medik
                          </p>
                          <h1> {patient.no_rm}</h1>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Status</p>
                          <h1> {patient.status}</h1>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">
                            Tanggal Daftar
                          </p>
                          <h1> {patient.created_at}</h1>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Bidan</p>
                          <h1> {patient.midwife?.fullname}</h1>
                        </div>
                      </div>
                    </Dialog.Description>
                    <Dialog.Description as="div">
                      <div className="flex flex-row items-center mt-4">
                        <button
                          onClick={() => deletePatient(patient.id)}
                          type="button"
                          className="w-full h-10 text-red-500 hover:text-red-700 rounded-md font-sofia leading-3 flex items-center justify-center gap-3"
                        >
                          Hapus Pasien
                        </button>
                        <button
                          type="submit"
                          className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 flex items-center justify-center gap-3 hover:bg-colors_secondary transition-colors"
                        >
                          {patient.diagnosis !== null ? (
                            "sudah diperiksa"
                          ) : (
                            <Link to={`/pasien/create/${patient.id}`}>
                              belum diperiksa
                            </Link>
                          )}

                          <span>
                            <RiCheckLine />
                          </span>
                        </button>
                      </div>
                    </Dialog.Description>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      );
    }
  }
  return (
    <div>
      <button
        onClick={generatePDF}
        className="mb-5 bg-colors_primary px-4 py-2 font-sofia text-colors_smooth_white rounded-md"
      >
        Cetak PDF
      </button>
      <div ref={componentPDF} className="w-full">
        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama lengkap
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                NIK
              </th>
              <th scope="col" className="px-6 py-3">
                NO RM
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            {patients.map((patient, index: number) => (
              <tr
                className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm"
                key={index}
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  {patient.fullname}
                </th>

                <td className="px-7 py-4">{patient.address}</td>
                <td className="px-7 py-4">{patient.nik}</td>
                <td className="px-7 py-4">{patient.no_rm}</td>
                <td className="px-7 py-4">
                  {renderModal()}
                  <button onClick={() => openModal(index)}>
                    <RiInformationLine className="w-5 h-5"></RiInformationLine>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
