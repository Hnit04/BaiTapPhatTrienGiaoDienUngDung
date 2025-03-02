import React from "react";
import ItemList from "./components/itemList";
import items from "./data/data";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Ứng dụng hiển thị danh sách Item</h1>
      <ItemList items={items} />
    </div>
  );
}
