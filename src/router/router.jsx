import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import {
  DoctorPrivacyPolicy,
  PatientPrivacyPolicy,
} from "../pages/PrivacyPolicy/PrivacyPolicy";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="privacy-policy/patient" element={<PatientPrivacyPolicy />} />
      <Route path="privacy-policy/doctor" element={<DoctorPrivacyPolicy />} />
    </Route>
  )
);
