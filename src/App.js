import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "components";
import { LoginSignup, Home, PostJob, ForgotAndReset, PostByYou } from "pages";
import Background from "container/Background";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Background component={<Home />} />} />
        <Route
          path="loginSignup"
          element={<Background component={<LoginSignup />} />}
        />
        <Route
          path="postjob"
          element={<Background component={<PostJob />} />}
        />
        <Route
          path="forgotandreset"
          element={<Background component={<ForgotAndReset />} />}
        />
        <Route
          path="postbyyou"
          element={
            <Background
              component={<PostByYou />}
              className="postAJobBackground"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
