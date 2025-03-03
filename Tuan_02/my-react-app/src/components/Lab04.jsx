import { useState } from "react";

export default function Lab04() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        width: "100vw" 
      }}>
        <div style={{textAlign: 'center'}}>
            <h2>Tuần 2 Bài 04</h2>
            <div>
                <button onClick={() => setActiveTab("intro")} style={{ margin: "5px" }}>Mã số sinh viên</button>
                <button onClick={() => setActiveTab("content")} style={{ margin: "5px" }}>Họ và tên</button>
                <button onClick={() => setActiveTab("contact")} style={{ margin: "5px" }}>Chuyên ngành</button>
            </div>
            <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
                {activeTab === "intro" && <p>22716181</p>}
                {activeTab === "content" && <p>Trần Công Tính</p>}
                {activeTab === "contact" && <p>Kỹ thuật phần mềm</p>}
            </div>
        </div>
    </div>
  );
}
