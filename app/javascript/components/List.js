import React from "react";

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li className="item_transition" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
