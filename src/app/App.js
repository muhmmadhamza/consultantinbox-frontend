import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./routes";
import "./style.scss";
function App() {
  return (
    <>
      <HelmetProvider>
        <ToastContainer />
        <AppRoutes />
      </HelmetProvider>
    </>
  );
}

export default App;
