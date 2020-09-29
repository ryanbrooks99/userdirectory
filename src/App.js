import React from "react"
import users from "./users.json"

class App extends React.Component {

  state = {
    usersList: users
  }

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.usersList.map(user => (
            <tr>
              <th scope="row">{}</th>
              <td><img src={user.picture.thumbnail} /></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))};
          </tbody>
        </table>

      </>
    );
  }

}

export default App;