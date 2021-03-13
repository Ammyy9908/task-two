import React from "react";

function TD({ item }) {
  return (
    <tr>
      {item.map((value) => {
        return <td>{value}</td>;
      })}
    </tr>
  );
}

export default TD;
