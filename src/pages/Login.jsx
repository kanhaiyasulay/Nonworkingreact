import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-xl text-center w-96">

        <h1 className="text-3xl font-bold mb-6">
          Voice Mode Agent
        </h1>

        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-500 px-6 py-3 rounded-lg w-full"
        >
          Login / Signup
        </button>

      </div>
    </div>
  );
}
