import React from "react";

function TeamSection() {
  const teamMembers = [
    { name: "Yasser Ahmed", role: "Founder & CEO" },
    { name: "Nazeef Rafiqui", role: "Chief Technology Officer" },
    { name: "Milan Agrawal", role: "Head of Design" },
  ];

  return (
    <section className="team-section-landingPage">
      <h2>Meet Our Team</h2>
      <div className="team-grid-landingPage">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-landingPage">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
