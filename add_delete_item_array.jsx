import { Component } from "react";

export class ChangeArray extends Component {
  constructor() {
    super();
    this.state = {
      students: ["Aman", "Nisha", "Mahesh", "Yuvaraj"],
    };
  }

  addName = () => {
    let input = document.getElementById("t1").value;
    this.setState({ students: [...this.state.students, input] });
  };

  deleteItem = (event) => {
    let nameToDelete = event.target.innerText;
    this.setState({
      students: this.state.students.filter((elem) => elem != nameToDelete),
    });
  };

  render() {
    return (
      <div>
        <h1>Student List</h1>
        <input type="text" id="t1" placeholder="Enter Name"></input>
        <button onClick={this.addName}> Add </button>
        <ul>
          {this.state.students.map((elem) => (
            <li style={{ cursor: "pointer" }} onClick={this.deleteItem}>
              {elem}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
