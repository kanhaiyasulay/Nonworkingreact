import ActionCard from "../components/ActionCard";

export default function Dashboard() {

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-10">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <ActionCard
          title="Talk to Customer"
          route="/talk"
        />

        <ActionCard
          title="Get Deal Clinic"
          route="/clinic"
        />

        <ActionCard
          title="Check Progress"
          route="/performance"
        />

      </div>

    </div>
  );
}