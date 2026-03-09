import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {

  const { loginWithRedirect } = useAuth0();

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