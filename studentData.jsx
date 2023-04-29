import { Component } from "react";

export default class Studentdata extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        { roll: 1232, name: "Vikas", branch: "Computer Science", physics: 56, chemistry: 54, maths: 87 },
        { roll: 1543, name: "Meena", branch: "Civil", physics: 76, chemistry: 65, maths: 45 },
        { roll: 1123, name: "Lokesh", branch: "Mechanical", physics: 55, chemistry: 51, maths: 76 }
      ],
      isRollDuplicate: false,
      orgArr: [],
    };

    this.branches = ["Computer Science", "Civil", "Mechanical", "Information Technology"]
  }

  checkRoll = () => {
    let roll = this.rollBox.value * 1;
    let status = this.state.students.some(ob => ob.roll === roll);
    this.setState({ isRollDuplicate: status });
  }

  save = (event) => {

    let roll = this.rollBox.value * 1;
    let name = this.nameBox.value;
    let branch = this.branchList.value;
    let physics = this.physicsBox.value * 1;
    let chemistry = this.chemistryBox.value * 1;
    let maths = this.mathsBox.value * 1;

    let inputObj = { roll, name, branch, physics, chemistry, maths };

    this.setState({ students: [...this.state.students, inputObj] });
    event.preventDefault();
    event.target.reset();
  };

  deleteStd = (event) => {
    let roll = event.target.getAttribute('data-roll') * 1;
    if (window.confirm('Are you want to delete student')) {
      this.setState({ students: this.state.students.filter((obj) => obj.roll !== roll) })
    }
  }

  filterStd = (e) => {
    let branch = e.target.getAttribute('data-branch');
    this.setState({
      orgArr: this.state.students,
      students: this.state.students.filter(obj => obj.branch === branch),
    })
  }

  clearFilter=(e)=>{
    this.setState({students: this.state.or})
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="bg-info mt-2 text-center">Student Records</h1>
          <form onSubmit={this.save}>
            <div className="row mt-3">
              <div className="col-xl-4 mt-2">
                <input
                  type="number"
                  onFocus={() => this.setState({ isRollDuplicate: false })}
                  onBlur={this.checkRoll}
                  className="form-control"
                  ref={(ob) => (this.rollBox = ob)}
                  placeholder="Roll no"
                  max={9999}
                  required
                />
              </div>
              <div className="col-xl-4 mt-2">
                <input type="text" className="form-control" onKeyDown={this.check} ref={(ob) => (this.nameBox = ob)} placeholder="Name" required />
              </div>
              <div className="col-xl-4 mt-2">
                <select className="form-control" ref={(ob) => (this.branchList = ob)} required>
                  <option value="">Select Branch</option>
                  {this.branches.map(br => <option>{br}</option>)}
                </select>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-xl-4 mt-2">
                <input type="number" className="form-control" ref={(ob) => (this.physicsBox = ob)} placeholder="Physics" min={0} max={100} required />
              </div>
              <div className="col-xl-4 mt-2">
                <input type="number" className="form-control" ref={(ob) => (this.chemistryBox = ob)} placeholder="Chemistry" min={0} max={100} required />
              </div>
              <div className="col-xl-4 mt-2">
                <input type="number" className="form-control" ref={(ob) => (this.mathsBox = ob)} placeholder="Maths" min={0} max={100} required />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-xl-3 mt-3 ">
                <button className="btn btn-success" disabled={this.state.isRollDuplicate}>
                  Save Data
                </button>
              </div>

              <div className="col-xl-9 mt-2 text-center">
                <b onClick={this.clearFilter} className="btn btn-primary">
                  Total Student: {this.state.students.length}
                </b>
                &nbsp;
                {this.branches.map(br => <b onClick={this.filterStd} data-branch={br} className='btn btn-primary m-1'> {br} {this.state.students.filter(ob => ob.branch === br).length}</b>)}
              </div>
            </div>
          </form>
          <div className="col-xl-6 mt-2">
            <b className="text-danger">
              {this.state.isRollDuplicate ? "Roll number is already exist" : ""}
            </b>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Total Marks</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((elem, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{elem.roll}</td>
                    <td>{elem.name}</td>
                    <td>{elem.branch}</td>
                    <td>{elem.physics}</td>
                    <td>{elem.chemistry}</td>
                    <td>{elem.maths}</td>
                    <td>{elem.physics + elem.chemistry + elem.maths}</td>
                    <td>{((elem.physics + elem.chemistry + elem.maths) / 3).toFixed(2)}</td>
                    <td>
                      <button onClick={this.deleteStd} data-roll={elem.roll} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
