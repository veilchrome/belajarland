import React, { useState } from "react";


const Counter = () => {
  const [count, setCount ] = useState(0)

  const handleClick = () => {
    setCount(count + 1)

  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>`count is ${count}`</p>
    </div>
  )

}





const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Halaman Utama</h1>
      <h1>Halaman ini halaman home</h1>
    </div>
  );
};

export default Home;
