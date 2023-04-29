import { Component } from 'react';

export class ChangeState extends Component {
    constructor() {
        super();
        this.state = {
            roll: 101,
            name: "Aman",
            age: 23,
        }
    }
    
    addName = () => {
        let nameChange = document.getElementById('input').value;
        this.setState({ name: nameChange})
        console.log(this.state)
    }

    render() {

        return <>
            <h1>Use of setState</h1>
            <input id='input' placeholder='Enter a name'></input>
            <button onClick={this.addName}>Add</button>
            <table>
                <thead>
                    <tr>
                        {Object.keys(this.state).map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.values(this.state).map((value) => (
                            <td>{value}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    }
}