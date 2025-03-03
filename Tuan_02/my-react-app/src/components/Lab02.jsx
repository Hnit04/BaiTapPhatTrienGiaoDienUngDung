import { useState } from "react";

export default function Lab02() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  function handleChangeA(e) {
    setA(Number(e.target.value));
  }

  function handleChangeB(e) {
    setB(Number(e.target.value));
  }

  function calculateSum() {
    setResult(a + b);
  }

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      width: "100vw" 
    }}>
      <div style={{textAlign: 'center'}}>
        <h2>Tuần 2 Bài 02</h2>
        <input type="number" value={a} onChange={handleChangeA} />
        <br />
        <input type="number" value={b} onChange={handleChangeB} />
        <br />
        <button onClick={calculateSum} >
          Tính tổng
        </button>
        <h3>Kết quả: {result}</h3>
      </div>
    </div>
  );
}
