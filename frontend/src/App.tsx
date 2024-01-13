import Router from "./router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authenticated } from "./store";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [auth, setAuth] = useRecoilState(authenticated);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    const getMidwife = async () => {
      try {
        const response = await axios.get("/account/profile");
        setAuth({ check: true, midwife: response.data.data });
      } catch (error) {
        console.log(error);
      }

      setMounted(true);
    };
    void getMidwife();
  }, [auth.check, mounted]);
  if (!mounted) {
    return (
      <div className="flex justify-center min-h-screen items-center px-48">
        <div className="spinner"></div>
      </div>
    );
  }
  return <Router />;
}
