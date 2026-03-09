import { useNavigate } from "react-router-dom";

export default function ActionCard({ title, route }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="bg-slate-800 p-8 rounded-xl cursor-pointer hover:bg-slate-700"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}