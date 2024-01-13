import axios from "axios";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  async function getPatients(value) {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v1/all-patients"
    );
    const patients = response.data.data.filter(
      (patient) =>
        (patient.fullname &&
          patient.fullname.toLowerCase().replace(/\s/g, "").includes(value)) ||
        (patient.no_rm &&
          patient.no_rm.toLowerCase().replace(/\s/g, "").includes(value)) ||
        (patient.nik &&
          patient.nik.toLowerCase().replace(/\s/g, "").includes(value))
    );
    setResults(patients);
  }
  function handleChange(value) {
    const lower: string = value.toLowerCase();
    setInput(lower);

    void getPatients(value);
  }
  useEffect(() => {
    void getPatients();
  }, []);
  return (
    <>
      <div className="mt-5">
        <form className="flex flex-row items-center p-2 gap-2 text-colors_primary focus:outline-none rounded-md font-sofia">
          <RiSearch2Line />
          <input
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            className="w-full focus:outline-none"
            id="search-pasien"
            placeholder="Nama / NIK / Rekam Medik"
          />
        </form>
      </div>
      <div className="w-full h-[0.5px] bg-gray-300 rounded-lg mt-2"></div>
    </>
  );
}
