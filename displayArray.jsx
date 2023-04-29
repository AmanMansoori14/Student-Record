import { Component } from "react";

export class DisplayArray extends Component {
  render() {
    var arr = ["Aman", "Nisha", "Mahesh", "Yuvaraj"];

    var student = {
      roll: 101,
      name: "Aman",
      age: 23,
    };

    return (
      <>
        <h1>How to render array</h1>
        <ol>
          {arr.map((arrName) => (
            <li>{arrName}</li>
          ))}
        </ol>

        <table>
          <thead>
            <tr>
              {Object.keys(student).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(student).map((value) => (
                <td>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>

      </>
    );
  }
}
