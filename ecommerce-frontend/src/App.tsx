import "./App.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "@/components/ui/toaster";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <Toaster />
    </>
  );
}

export default App;
