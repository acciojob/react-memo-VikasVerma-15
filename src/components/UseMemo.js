import React, { useMemo } from "react";

const UseMemo = () => {
  const value = useMemo(() => {
    let x = 0;
    for (let i = 0; i < 100000000; i++) x++;
    return x;
  }, []);

  return <p>{value}</p>;
};

export default UseMemo;
