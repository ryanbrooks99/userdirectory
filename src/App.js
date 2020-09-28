import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./components/api.js"

class App extends React.component {
  state ={
    movieList: movies
  }

  render
}
const App = () => {
  const directory = [
    {Image: "", Name: "", Phone: "", Email: "", Birthdate: ""},
    {Image: "", Name: "", Phone: "", Email: "", Birthdate: ""},
    {Image: "", Name: "", Phone: "", Email: "", Birthdate: ""},
    {Image: "", Name: "", Phone: "", Email: "", Birthdate: ""},
  ]

  const renderDirectory = (directory, index) => {
    return(
      <tr key={index}>
        <td>{directory.Image}</td>
        <td>{directory.Name}</td>
        <td>{directory.Phone}</td>
        <td>{directory.Email}</td>
        <td>{directory.Birthdate}</td>
      </tr>
    )
  }

      return (
        <div className="App">
          <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Birthdate</th>
    </tr>
  </thead>
  <tbody>
  {directory.map(renderDirectory)}
  </tbody>
</ReactBootStrap.Table>
        </div>
      );
}
  


export default App;
