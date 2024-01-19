import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPatient() {
  const { id: id_patient } = useParams();
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [keys, setKeys] = useState([]);

  async function getDetailPatient() {
    setLoading(true);

    try {
      const response = await axios.get(`/patients/${id_patient}`);
      setLoading(false);
      setPatient(response.data.data);
      const patientsDiagnosis = Object.keys(response.data.data.diagnosis);
      patientsDiagnosis.forEach((key) =>
        console.log(`${key}: ${response.data.data.diagnosis[key]}`)
      );
      setKeys(patientsDiagnosis);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }
  useEffect(() => {
    void getDetailPatient();
    // console.log(patient.diagnosis.latest_bab);
  }, []);
  return (
    <section>
      {loading ? (
        <h1 className="flex min-h-screen text-3xl font-sofia font-bold justify-center items-center">
          Mengambil Data Pengguna...
        </h1>
      ) : (
        <div className="flex justify-center items-center min-h-screen font-sofia">
          <div className="max-w-lg w-full h-auto border-2 rounded-md border-gray-300 transition-all p-5">
            <header className="flex justify-between items-center mb-10">
              <Link
                to={"/pasien/laporan"}
                className="flex justify-center gap-2 hover:text-colors_secondary transition-colors text-colors_primary"
              >
                <span>
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
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </span>
                <span>Kembali</span>
              </Link>
              <h1 className="text-2xl text-colors_primary">
                {patient.fullname}
              </h1>
            </header>
            <div className="flex flex-col space-y-4 text-gray-500">
              <div>
                {/* <p className="font-bold">Nama Pasien : {patient.fullname}</p>
                <p>Jenis Layanan {patient.diagnosis?.service_name}</p>
                {patient.diagnosis?.screening && (
                  <p>Screening : {patient.diagnosis?.screening}</p>
                )} */}
                <p>Nama pasien : {patient.fullname}</p>

                {keys.map((key) => (
                  <p>
                    {key} : {patient.diagnosis?.[key]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
