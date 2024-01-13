import {Fragment} from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function renderModal() {
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
                          {" "}
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
                          <h1> {patient.midwife.fullname}</h1>
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
                            Pemeriksaan Baru
                          <span>
                            <RiHeartAddLine />
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
