import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiShieldCheckFill, RiShieldCheckLine } from "react-icons/ri";
export default function DetailPayment() {
  const { id: id_patient } = useParams();
  const redirect = useNavigate();
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputPayment, setInputPayment] = useState("");
  async function getDetailPatient() {
    setLoading(true);
    try {
      const response = await axios.get(`/patients/${id_patient}`);
      setLoading(false);
      setPatient(response.data.data);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }
  async function handlerPayment(e) {
    e.preventDefault();
    try {
      await axios.put(`/patients/${id_patient}?total_payment=${inputPayment}`);
      redirect("/pasien/laporan");
      alert(`Pasien ${patient.fullname} Berhasil Membayar`);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDetailPatient();
  }, []);
  return (
    <div className="flex justify-center flex-col min-h-screen items-center font-sofia bg-white">
      {loading ? (
        "Mengambil data"
      ) : (
        <>
          {" "}
          {patient.total_payment !== null ? (
            <div className="w-56 h-10 px-4 flex items-center gap-3 border-l-4 text-colors_smooth_black bg-colors_primary_low shadow-lg border-l-colors_primary mb-5">
              <span>Pembayaran Berhasil</span>
              <span className="text-colors_primary">
                <RiShieldCheckFill />
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="w-[480px]">
            <div className="flex flex-row mb-5 justify-between items-center gap-4">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-sofia text-sm">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className={`py-1 px-3 border-2 border-colors_primary bg-gray-100 ring-colors_primary focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                  id="fullname"
                  disabled
                  value={patient.fullname}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-sofia text-sm">
                  Tempat dan Tanggal Lahir
                </label>
                <input
                  type="email"
                  className={`py-1 px-3 border-2 border-colors_primary bg-gray-100 w-full ring-colors_primary focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                  id="fullname"
                  disabled
                  value={`${patient.place_of_birth}, ${patient.date_of_birth}`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-5">
                <label htmlFor="fullname" className="font-sofia text-sm">
                  Nomor Rekam Medik
                </label>
                <input
                  type="email"
                  className={`py-1 px-3 border-2 border-colors_primary bg-gray-100 ring-colors_primary focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                  id="fullname"
                  disabled
                  value={patient.nik}
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="fullname" className="font-sofia text-sm">
                  Nomor Induk Keluarga
                </label>
                <input
                  type="text"
                  className={`py-1 px-3 border-2 border-colors_primary bg-gray-100 ring-colors_primary focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                  id="fullname"
                  disabled
                  value={patient.no_rm}
                />
              </div>
              <form onSubmit={handlerPayment}>
                <div className="flex flex-col mb-5">
                  <label htmlFor="payment" className="font-sofia text-sm">
                    Total Pembayaran
                  </label>
                  <input
                    type="number"
                    className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                    id="payment"
                    value={
                      patient.total_payment !== null
                        ? patient.total_payment
                        : inputPayment
                    }
                    onChange={(e) => setInputPayment(e.target.value)}
                  />
                </div>
                <button className="bg-colors_primary hover:bg-colors_secondary rounded-md transition-colors text-colors_smooth_white px-4 py-2">
                  Bayar sekarang
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
