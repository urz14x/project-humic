import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

export default function ListPatientPaymentTable({ patients }) {
  const [paymentInput, setPaymentInput] = useState<string>("");
  const [totalPayment, setTotalPayment] = useState("");
  const [seletedPatient, setSelectedPatient] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const record = { paymentInput };
  const handlePayment = async (e) => {
    e.preventDefault();
    console.log(paymentInput);

    try {
      if (patients.total_payment === null) {
        await axios.post("http://127.0.0.1:8000/api/v1/patients", record);
      }
      setPaymentInput("");
    } catch (error) {
      console.log(error);
    }
  };
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
                      <div className="flex flex-col space-y-3">
                        <div>
                          <p className="text-colors_smooth_black mb-5 text-base">
                            Total bayar
                          </p>

                          <form onSubmit={handlePayment}>
                            <input
                              type="text"
                              className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary  focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                              id="payment"
                              onChange={(e) => setPaymentInput(e.target.value)}
                              value={paymentInput}
                              placeholder="300.000"
                            />
                            <div className="flex flex-row items-center mt-4">
                              <button
                                type="submit"
                                className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 flex items-center justify-center gap-3 hover:bg-colors_secondary transition-colors"
                              >
                                Bayar
                              </button>
                            </div>
                          </form>
                        </div>
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
  useEffect(() => {
    console.log(paymentInput);
  }, []);
  return (
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
                <button className="text-colors_smooth_black underline">
                  Status Pembayaran
                </button>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
