import { useState } from "react";

export default function Lab03() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  function handleChangeA(e) {
    console.log(e.target.value)
    setA(Number(e.target.value));
  }

  function handleChangeB(e) {
    console.log(e.target.value)
    setB(Number(e.target.value));
  }

  function handleOperationChange(e) {
    setOperation(e.target.value);
  }

  function calculateResult() {
    let res = 0;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
      default:
        res = 0;
    }
    setResult(res);
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
            <h2>Tuần 2 Bài 03</h2>
            <input type="number" value={a} onChange={handleChangeA} />
            <br />
            <input type="number" value={b} onChange={handleChangeB} />
            <div>
                <label><input type="radio" value="+" checked={operation === "+"} onChange={handleOperationChange} /> + </label>
                <label><input type="radio" value="-" checked={operation === "-"} onChange={handleOperationChange} /> - </label>
                <label><input type="radio" value="*" checked={operation === "*"} onChange={handleOperationChange} /> * </label>
                <label><input type="radio" value="/" checked={operation === "/"} onChange={handleOperationChange} /> / </label>
            </div>
            <button onClick={calculateResult}>Tính toán</button>
            <h3>Kết quả: {result}</h3>
        </div>
    </div>
  );
}
