import { useState } from "react";

export default function Lab05() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(task);
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
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
            <h2>Tuần 2 Bài 05</h2>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Nhập ......" 
            />
            <button onClick={addTask}>Thêm</button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((t, index) => (
                <li key={index} style={{ margin: "10px 0" }}>
                    {index + 1}. {t} 
                    <button onClick={() => removeTask(index)} style={{ marginLeft: "10px" }}>Xóa</button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
