import { useState } from "react";
import { FormEvent, useEffect } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";

import { authenticated } from "../../store";
import { toast } from "react-toastify";
import { TErrors } from "../../ts/types/global_types";
import { ILogin } from "../../ts/interfaces/global_interfaces";

const Login = () => {
  const redirect = useNavigate();
  const setAuth = useSetRecoilState(authenticated);
  const [errors, setErrors] = useState<TErrors>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<ILogin>({
    email: "",
    password: "",
  });

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/login", values);
      localStorage.setItem("token-midwive", response.data.token as string);
      setAuth({ check: true, midwife: response.data.data });
      setLoading(false);
      toast.success(`Berhasil login 👋`);
      redirect("/dashboard/beranda");
    } catch (error) {
      setErrors(error.response.data?.errors);
      setLoading(true);
    }
  };
  useEffect(() => {
    document.title = "Login / Praktik bidan mandiri";
  }, []);
  return (
    <section className="flex items-center justify-center fixed inset-0 shadow-md transition-all">
      <div className="w-[400px] h-[660px] hidden md:flex bg-colors_primary shadow-lg rounded-tl rounded-bl flex-col justify-center items-center">
        <div className="relative -top-36 right-40">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="29" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="5" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="29" r="5" fill="#F4F4F4" />
            <circle cx="5" cy="29" r="5" fill="#F4F4F4" />
          </svg>
        </div>
        <svg
          width="151"
          height="166"
          viewBox="0 0 151 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8_59)">
            <path
              d="M38.1693 165.563H18.7201C18.6737 165.352 18.6274 165.141 18.5836 164.927C17.7593 161.087 17.0637 157.209 16.3785 153.358C13.653 138.038 10.9302 122.719 8.2047 107.4C7.23354 101.944 6.26237 96.3665 7.07124 90.8847C7.8827 85.4028 10.822 79.9369 15.719 77.6951C16.0977 77.5216 16.4815 77.3695 16.8679 77.2387C18.6068 85.6804 20.4229 94.106 22.3214 102.51C24.2766 111.163 26.3169 119.794 28.4395 128.404C30.5725 137.056 32.7931 145.685 35.096 154.286C36.0466 157.839 37.0126 161.386 37.9941 164.927C38.0508 165.138 38.11 165.352 38.1693 165.563Z"
              fill="#D7D7D8"
            />
            <path
              d="M144.57 132.589C137.932 143.635 131.167 154.746 123.382 164.927C123.22 165.141 123.058 165.352 122.893 165.563H94.1648C94.3193 165.352 94.479 165.138 94.6388 164.927C99.152 158.898 103.789 152.968 108.562 147.158C114.011 140.531 119.639 134.062 125.497 127.819C131.134 121.814 136.979 116.017 143.097 110.544C143.823 109.892 144.552 109.249 145.286 108.609C145.923 108.054 145.006 107.114 144.377 107.664C138.213 113.047 132.324 118.761 126.651 124.697C120.739 130.883 115.059 137.307 109.569 143.897C104.003 150.577 98.6316 157.425 93.4151 164.399C93.2838 164.575 93.1524 164.751 93.0236 164.927C92.8639 165.138 92.7041 165.349 92.5521 165.563H39.5088C39.4496 165.352 39.3903 165.138 39.3336 164.927C38.6149 162.339 37.9065 159.75 37.2058 157.158C34.8822 148.559 32.6411 139.939 30.4849 131.291C28.3417 122.69 26.2808 114.064 24.305 105.417C22.3189 96.7268 20.4178 88.0183 18.6042 79.2884C18.4394 78.4904 18.2745 77.6897 18.1096 76.8917C23.1432 75.7495 28.6637 77.7458 33.3315 80.3346C49.2591 89.1739 61.3563 105.128 65.8746 123.253C69.3214 113.527 79.386 108.251 88.9174 105.104C101.066 101.096 113.81 99.0087 126.561 98.9447C131.157 98.9207 135.84 99.1742 140.155 100.813C144.472 102.449 148.421 105.657 150.088 110.093C152.901 117.587 148.671 125.762 144.57 132.589Z"
              fill="#DDDEDF"
            />
            <path
              d="M89.721 111.635C92.5109 113.76 95.8546 113.925 97.189 112.001C98.5208 110.079 97.3384 106.799 94.546 104.675C93.4408 103.81 92.1503 103.242 90.7772 103.023L78.8398 94.1807L74.865 100.327L87.0548 108.39C87.6782 109.69 88.5927 110.802 89.721 111.635Z"
              fill="#F6A6A9"
            />
            <path
              d="M62.0156 44.7505C58.0742 45.2682 55.287 49.0047 55.797 53.0854L59.4189 103.202L88.2603 115.745L92.1399 110.56L72.209 95.4458L75.2075 56.2613C74.8984 49.1701 68.8138 43.8617 62.0156 44.7531V44.7505Z"
              fill="#6C63FF"
            />
            <path
              d="M49.0066 46.2397L63.028 51.0143V30.1037H50.3049L49.0066 46.2397Z"
              fill="#F6A6A9"
            />
            <path
              d="M61.2918 35.8898C69.0086 35.8898 75.2643 29.4087 75.2643 21.4138C75.2643 13.4189 69.0086 6.93782 61.2918 6.93782C53.575 6.93782 47.3193 13.4189 47.3193 21.4138C47.3193 29.4087 53.575 35.8898 61.2918 35.8898Z"
              fill="#F6A6A9"
            />
            <path
              d="M57.456 19.9807C59.7976 19.9086 61.3304 17.4559 62.2397 15.2221C63.1491 12.9856 64.0842 10.4181 66.2506 9.49467C68.0255 8.73938 71.1554 13.8396 72.5568 12.4811C74.0148 11.0666 72.5928 3.79128 71.0446 2.48353C69.4964 1.17845 67.3764 0.92224 65.3799 0.828829C60.5112 0.596637 55.6116 1.00497 50.8407 2.03783C47.8886 2.67569 44.8488 3.63649 42.721 5.84898C40.0265 8.65397 39.3335 12.8868 39.1403 16.8394C38.942 20.8854 39.1661 25.1236 41.0646 28.6652C42.9632 32.2068 46.9406 34.817 50.7506 33.9149C51.1344 31.7691 50.7428 29.5673 50.596 27.3868C50.4492 25.209 50.6037 22.8551 51.8866 21.123C53.1695 19.3909 55.913 18.7023 57.4071 20.2396"
              fill="#2F2E41"
            />
            <path
              d="M40.2635 24.9954C38.8647 23.9332 37.1929 23.0472 35.4721 23.2633C33.6122 23.4982 32.0434 25.0835 31.5642 26.9597C31.0851 28.836 31.6209 30.9043 32.7724 32.4363C33.9213 33.9682 35.6318 34.9877 37.4402 35.4895C38.486 35.7804 39.635 35.9031 40.6293 35.4601C42.1002 34.8062 42.8911 32.8606 42.314 31.3127"
              fill="#2F2E41"
            />
            <path
              d="M54.4062 103.762L49.437 104.296C49.437 104.296 36.9483 123.469 49.437 139.263L49.6096 165.248H72.7399C72.7399 165.248 82.3331 136.069 77.1939 125.596L81.9905 122.578L54.4062 103.762Z"
              fill="#2F2E41"
            />
            <path
              d="M53.744 108.921L49.6378 111.867C49.6378 111.867 40.1296 138.153 65.9055 142.506L78.1443 165.186L98.4101 165.245C98.4101 165.245 93.2425 123.28 83.8657 116.671L86.6659 111.633L53.744 108.921Z"
              fill="#2F2E41"
            />
            <path
              d="M64.1718 40.7498L47.3167 37.2936L41.8967 56.7257C41.8967 56.7257 59.8852 93.292 49.4342 104.296L81.9877 122.578C81.9877 122.578 117.452 102.697 77.8763 73.5877C77.8763 73.5877 84.5586 65.2448 77.0185 57.9667C69.481 50.6887 64.1692 40.7498 64.1692 40.7498H64.1718Z"
              fill="#6C63FF"
            />
            <path
              d="M79.3861 126.375C82.1759 128.5 85.5196 128.665 86.854 126.741C88.1858 124.819 87.0034 121.539 84.211 119.415C83.1059 118.55 81.8153 117.982 80.4423 117.763L68.5049 108.921L64.53 115.067L76.7199 123.13C77.3433 124.43 78.2578 125.543 79.3861 126.375Z"
              fill="#F6A6A9"
            />
            <path
              d="M41.1704 44.7505C37.229 45.2682 34.4418 49.0047 34.9518 53.0854L38.5737 103.202L74.695 123.466L77.0907 114.966L51.3612 95.4431L54.3597 56.2587C54.0506 49.1675 47.966 43.8591 41.1678 44.7505H41.1704Z"
              fill="#6C63FF"
            />
            <path
              d="M138.501 165.245C138.501 165.421 138.365 165.563 138.194 165.563H0.306549C0.13653 165.563 0 165.421 0 165.245C0 165.069 0.13653 164.927 0.306549 164.927H138.194C138.365 164.927 138.501 165.069 138.501 165.245Z"
              fill="#2F2E41"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_59">
              <rect
                width="151"
                height="164.798"
                fill="none"
                transform="translate(0 0.764709)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="relative top-52 left-40">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="5" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="29" cy="29" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="5" cy="17" r="5" fill="#F4F4F4" />
            <circle cx="17" cy="29" r="5" fill="#F4F4F4" />
            <circle cx="5" cy="29" r="5" fill="#F4F4F4" />
          </svg>
        </div>
        <div className="text-center">
          <h1 className="font-tiempos_regular text-colors_secondary text-3xl">
            Selamat Datang
          </h1>
          <p className="font-sofia text-colors_secondary text-xl">
            Praktik Bidan Mandiri
          </p>
        </div>
      </div>
      <div className="md:w-96 w-full h-[660px] bg-white shadow-sm md:shadow-md rounded-tr rounded-br p-7">
        <form
          onSubmit={login}
          className="w-full h-full flex flex-col justify-evenly"
        >
          <div>
            <h1 className="font-tiempos_regular text-3xl mt-10">Masuk</h1>
            <p className="font-sofia text-sm antialiased">
              Belum mempunyai akun?
              <Link to="/signup" className="underline">
                daftar dulu
              </Link>
            </p>
          </div>
          <section>
            <div className="flex flex-col space-y-2 mb-3">
              <label htmlFor="email" className="font-sofia text-sm">
                Email
              </label>
              <input
                type="email"
                className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary ${
                  errors.email ? "border-red-500 ring-red-500" : ""
                } focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all placeholder:text-sm font-sofia`}
                id="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                value={values.email}
                placeholder="ustamirazib@domain.com"
              />
              <span
                className={`${
                  errors.email ? "text-red-700 font-sofia text-xs" : ""
                }`}
              >
                {errors.email ? errors.email : ""}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="font-sofia text-sm">
                Password
              </label>
              <input
                type="password"
                className={`py-1 px-3 border-2 border-colors_primary ring-colors_primary ${
                  errors.password ? "border-red-500 ring-red-500" : ""
                } focus:ring-2 focus:outline-none rounded-md placeholder-opacity-5 transition-all`}
                id="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                value={values.password}
              />
              <span
                className={`${
                  errors.password ? "text-red-700 font-sofia text-xs" : ""
                }`}
              >
                {errors.password ? errors.password : ""}
              </span>
            </div>
            <div className="flex items-center mt-4 gap-3">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="font-sofia">
                Remember me
              </label>
            </div>
          </section>

          <div className="flex flex-col mt-4">
            <ButtonPrimary className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 flex items-center justify-center gap-3 hover:bg-colors_secondary transition-colors">
              {loading && !errors ? "Loading..." : "Login"}
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
