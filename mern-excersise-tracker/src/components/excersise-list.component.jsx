import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Excersise = props => (
  <tr>
    <td>{props.excersise.username}</td>
    <td>{props.excersise.description}</td>
    <td>{props.excersise.duration}</td>
    <td>{props.excersise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/" + props.excersise._id}>edit</Link> | 
      <a href="#" onClick={() => { props.deleteExcersise(props.excersise._id) }}> delete</a>
    </td>
  </tr>
)

export default class ExcersiseList extends Component {

  constructor(props) {
    super(props);

    this.deleteExcersise = this.deleteExcersise.bind(this);

    this.state = {excersises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/excersises/')
      .then(response => {
        this.setState({ excersises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExcersise(id) {
    axios.delete('http://localhost:5000/excersises/' + id)
      .then(res => console.log(res.data));

    this.setState({
      excersises: this.state.excersises.filter(el => el._id !== id)
    })
  }

  ExcersiseList() {
    return this.state.excersises.map(currentexcersise => {
      return <Excersise excersise={currentexcersise} deleteExcersise={this.deleteExcersise} key={currentexcersise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Excersises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.ExcersiseList() }
          </tbody>
        </table>
      </div>
    )
  }
}