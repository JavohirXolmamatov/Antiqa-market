import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, Register } from "./components";

function App() {
  return (
    <div className="">
      <header className="p-0 pt-2 pb-2 text-bg-dark">
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
