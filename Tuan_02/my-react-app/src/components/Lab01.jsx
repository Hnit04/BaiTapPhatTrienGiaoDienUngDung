import { useState } from "react";

export default function Lab01() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    console.log(e.target);
    setName(e.target.value);
  }

  function handleClick() {
    setMessage(`Hello, ${name}`);
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
        <h2>Tuần 2 Bài 01</h2>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Nhập tên ....."
          style={{height:40, width: 450}}
        />
        <br />
        <button 
        style={ {marginTop: 20,  background: "blue"}}
          onClick={handleClick} 
        >
          Click
        </button>
        <h3>{message}</h3>
      </div>
    </div>
  );
}
