import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", score: 40 },
  { name: "Tue", score: 55 },
  { name: "Wed", score: 70 },
  { name: "Thu", score: 60 },
  { name: "Fri", score: 85 }
];

export default function Performance() {

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-10">Performance Analytics</h1>

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Strengths</h2>
          <p className="mt-4 text-gray-300">
            Strong objection handling
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl">Weaknesses</h2>
          <p className="mt-4 text-gray-300">
            Needs improvement in closing deals
          </p>
        </div>

      </div>

      <div className="bg-slate-800 p-6 rounded-xl">

        <h2 className="text-xl mb-6">
          Overall Performance
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#38bdf8" />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}