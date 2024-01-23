import { Routes, Route } from "react-router-dom";
import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";
import Dashboard from "../views/dashboard/Dashboard";
import Beranda from "../views/pages/menu_utama/Beranda";
import Pasien from "../views/pages/menu_utama/Pasien";
import MyAccount from "../views/pages/settings_account/MyAccount";
import ListPasien from "../views/pages/menu_lainnya/ListPasien";
import Authenticated from "../middleware/Authenticated";
import Guest from "../middleware/Guest";
import NotFound from "../components/NotFound/NotFound";
import Diagnosis from "../views/pages/diagnosis";
import Pregnancy from "../views/pages/diagnosis/Pregnancy/Pregnancy";
import DetailPatient from "../views/pages/patient/DetailPatient";
import Labor from "../views/pages/diagnosis/Labors/Labor";
import Nifas from "../views/pages/diagnosis/Nifas/Nifas";
import Payment from "../views/pages/menu_lainnya/Payment";
import DetailPayment from "../views/pages/patient/DetailPayment";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Guest>
            <Login />
          </Guest>
        }
      />
      <Route
        path="/signup"
        element={
          <Guest>
            <Signup />
          </Guest>
        }
      />

      <Route
        path="/"
        element={
          <Authenticated>
            <Dashboard>
              <Beranda />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/dashboard/beranda"
        element={
          <Authenticated>
            <Dashboard>
              <Beranda />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/dashboard/pasien"
        element={
          <Authenticated>
            <Dashboard>
              <Pasien />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/dashboard/pembayaran"
        element={
          <Authenticated>
            <Dashboard>
              <Payment />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/pasien/laporan"
        element={
          <Dashboard>
            <ListPasien />
          </Dashboard>
        }
      />
      <Route
        path="/account/settings"
        element={
          <Authenticated>
            <Dashboard>
              <MyAccount />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/pasien/create/:id"
        element={
          <Authenticated>
            <Dashboard>
              <Diagnosis />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/pasien/create/:id/kehamilan"
        element={
          <Authenticated>
            <Dashboard>
              <Pregnancy />
            </Dashboard>
          </Authenticated>
        }
      />

      <Route
        path="/pasien/create/:id/persalinan"
        element={
          <Authenticated>
            <Dashboard>
              <Labor />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/pasien/create/:id/nifas"
        element={
          <Authenticated>
            <Dashboard>
              <Nifas />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route
        path="/pasien/:id/detail/"
        element={
          <Authenticated>
            <DetailPatient />
          </Authenticated>
        }
      />
      <Route
        path="/pasien/:id/detail/payment"
        element={
          <Authenticated>
            <Dashboard>
              <DetailPayment />
            </Dashboard>
          </Authenticated>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
