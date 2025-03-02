import React, { useState } from "react";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [target, setTarget] = useState(0);
  const [result, setResult] = useState([]);

  const calculateYears = () => {
    let years = 0;
    let balance = parseFloat(principal);
    let rateDecimal = parseFloat(rate) / 100;
    let currentYear = new Date().getFullYear();
    let data = [];

    while (balance < target) {
      let newBalance = balance * (1 + rateDecimal);
      data.push({ year: currentYear + years, start: balance.toFixed(2), end: newBalance.toFixed(2) });
      balance = newBalance;
      years++;
    }
    setResult(data);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>Lãi Suất Tích Lũy</h2>
      <div>
        <label>Tiền Gửi: </label>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </div>
      <div>
        <label>Lãi Suất (%/năm): </label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>
      <div>
        <label>Tiền Mong Muốn: </label>
        <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} />
      </div>
      <button onClick={calculateYears} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>Tính Toán</button>
      <table border="1" style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Năm</th>
            <th>Tiền Đầu Kỳ</th>
            <th>Tiền Cuối Kỳ</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.start}</td>
              <td>{row.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterestCalculator;
