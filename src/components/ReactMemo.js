import React from "react";

const SkillList = ({ skills }) => {
  return (
    <ul>
      {skills.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ul>
  );
};

export default React.memo(SkillList);
