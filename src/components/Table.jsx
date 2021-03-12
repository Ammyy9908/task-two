import React from "react";

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Reviews</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Making</td>
          <td>May 23</td>
          <td>Drama</td>
          <td>4.2</td>
          <td>521</td>
        </tr>
        <tr>
          <td>Final Hour</td>
          <td>May 28</td>
          <td>Thriller</td>
          <td>3.8</td>
          <td>118</td>
        </tr>
        <tr>
          <td>Springland</td>
          <td>June 2</td>
          <td>Comedy</td>
          <td>4.4</td>
          <td>643</td>
        </tr>
        <tr>
          <td>The Doll</td>
          <td>June 18</td>
          <td>Thriller</td>
          <td>2.9</td>
          <td>722</td>
        </tr>
        <tr>
          <td>Stoplight</td>
          <td>June 21</td>
          <td>Comedy</td>
          <td>3.1</td>
          <td>368</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
