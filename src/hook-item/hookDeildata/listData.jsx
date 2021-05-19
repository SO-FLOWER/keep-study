import React, { useState } from "react";

export default function ListData() {
  const [student, setstudent] = useState([
    { id: 1, name: "kebe", age: 25 },
    { id: 2, name: "json", age: 24 },
    { id: 3, name: "jack", age: 30 },
  ]);
  function insetstudent(index) {
    const newStudent = [...student];
    newStudent[index].age += 1;
    setstudent(newStudent); // setstudent函数用于更新student的值
  }
  return (
    <div>
      {student.map((item, index) => {
        return (
          <div key={item.id}>
            <li>{item.name}</li>
            <li>
              {item.age}
              <button onClick={(e) => insetstudent(index)}>+1</button>
            </li>
          </div>
        );
      })}
    </div>
  );
}
