import React from "react";

export default function ItemList({ items }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Danh sách Item</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            <strong>{item.type}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
