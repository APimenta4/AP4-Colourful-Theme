import React from "react";
import FeatureCard from "./FeatureCard";

const Dashboard = () => {
  const logAction = (id: string) => console.log(`Action: ${id}`);

  const modules = [
    { id: 1, label: "Analytics", desc: "User metrics", qty: 12 },
    { id: 2, label: "Security", desc: "Firewall logs", qty: 5 },
  ];

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="grid">
        {modules.map((m) => (
          <FeatureCard
            key={m.id}
            title={m.label}
            description={m.desc}
            count={m.qty}
            onAction={logAction}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
