import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TalkCustomer from "./pages/TalkCustomer";
import DealClinic from "./pages/DealClinic";
import Performance from "./pages/Performance";

import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/talk"
          element={
            <ProtectedRoute>
              <TalkCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clinic"
          element={
            <ProtectedRoute>
              <DealClinic />
            </ProtectedRoute>
          }
        />

        <Route
          path="/performance"
          element={
            <ProtectedRoute>
              <Performance />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;