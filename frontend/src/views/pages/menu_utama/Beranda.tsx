import { useEffect, useState } from "react";
import { RiGroupFill } from "react-icons/ri";
import Profile from "../../../components/Profile/Profile";
import { useRecoilValue } from "recoil";
import { authenticated } from "../../../store";
import { ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { TShowTotalAllCount } from "../../../ts/types/global_types";
export default function Beranda() {
  const auth = useRecoilValue(authenticated);
  const [counts, setAllCounts] = useState<undefined>([]);

  const getAllCount = async () => {
    try {
      const response = await axios.get("/total-count");
      setAllCounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const AllCountObject: TShowTotalAllCount[] | undefined | number = [
    { title: "Total bidan", total: counts.total_midwives },
    { title: "Total Pasien", total: counts.total_patients },
    {
      title: "Total Pasien Kehamilan",
      total: counts.total_patient_pregnancies,
    },
    {
      title: "Total Pasien Persalinan",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Pasien Nifas",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Pasien KB",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Pasien Kespro",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Balita Tumbuh",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Balita Kembang",
      total: counts.total_patient_labors,
    },
    {
      title: "Total Balita Emosional",
      total: counts.total_patient_labors,
    },
  ];

  useEffect(() => {
    document.title = "Beranda";
    void getAllCount();
    console.log(typeof counts.total_patients);
  }, [auth]);
  return (
    <section className="flex flex-col">
      {auth.check ? (
        <div>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="flex justify-between items-center mb-5">
            <div>
              <h1 className="text-2xl font-tiempos_regular text-colors_smooth_black capitalize">
                Hallo Selamat datang {auth.midwife?.fullname}
              </h1>
              <p className="font-sofia text-colors_secondary text-xs">
                Berikut Data data terbaru. cek sekarang!
              </p>
            </div>
            {/* Profile section */}
            <div>
              <Profile username={auth.midwife?.username} />
            </div>
            {/* End Profile section */}
          </div>

          {/* <!--Card Section--> */}
          <div className="flex items-center flex-col flex-wrap lg:flex-row space-x-0 md:flex-row gap-5">
            {AllCountObject.map((count, idx: number) => (
              <>
                <div
                  key={idx}
                  className="w-64 h-40 bg-colors_primary rounded-lg flex flex-row items-center justify-center space-x-3 shadow-lg"
                >
                  <div className="flex flex-col items-center font-sofia text-colors_smooth_white">
                    <h3 className="text-sm">{count.title}</h3>
                    <span className="text-6xl">{count.total || 0}</span>
                  </div>
                  <div className="w-20 h-20 bg-colors_smooth_white grid place-content-center rounded-full">
                    <span className="text-4xl text-colors_primary">
                      <RiGroupFill />
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <!--Card Section category--> */}
          {/* <div className="flex items-center flex-col lg:flex-row lg:space-x-5 lg:space-y-0 space-x-0 space-y-4">
            <div className="w-64 h-40 bg-colors_primary rounded-lg flex flex-row items-center justify-center space-x-3 shadow-lg">
              <div className="flex flex-col items-center font-sofia text-colors_smooth_white">
                <h3 className="text-sm">Pasien Kehamilan</h3>
                <span className="text-6xl"></span>
              </div>
              <div className="w-20 h-20 bg-colors_smooth_white grid place-content-center rounded-full">
                <span className="text-4xl text-colors_primary">
                  <RiGroupFill />
                </span>
              </div>
            </div>
            <div className="w-64 h-40 bg-colors_primary rounded-lg flex flex-row items-center justify-center space-x-3 shadow-lg">
              <div className="flex flex-col items-center font-sofia text-colors_smooth_white">
                <h3 className="text-sm">Pasien Persalinan</h3>
                <span className="text-6xl"></span>
              </div>
              <div className="w-20 h-20 bg-colors_smooth_white grid place-content-center rounded-full">
                <span className="text-4xl text-colors_primary">
                  <RiGroupFill />
                </span>
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Skeleton />
        </div>
      )}
    </section>
  );
}
