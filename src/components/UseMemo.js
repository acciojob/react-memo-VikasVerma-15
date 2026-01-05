import React, { useMemo } from "react";

const UseMemo = () => {
  const value = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum++;
    }
    return sum;
  }, []);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{value}</p>
    </div>
  );
};

export default UseMemo;
