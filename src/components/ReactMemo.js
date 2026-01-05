import React from "react";

const SkillList = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default React.memo(SkillList);
