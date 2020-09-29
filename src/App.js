import React from "react"
import users from "./users.json"
import SearchForm from "./components/SearchForm"
import Header from "./components/Header"


class App extends React.Component {


  state = {
    usersList: users,
    sortOrder: "",
    shadowUsers: users
  }

  handleSort =() => {

  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    const currentValueArray = event.target.value.toLocaleLowerCase().split("")
    if(currentValueArray.length === 0) {
      this.setState({
        users: this.state.shadowUsers
      })
    } else {
      const newUser = this.state.shadowUsers.filter(user => {
        
        const fullName = (`${user.name.first} ${user.name.last}`).toLocaleLowerCase().split("");
        const comparisonArray = [];
        for(let i = 0; i < currentValueArray.length; i++) {
          comparisonArray.push(fullName[i])
        }

        return comparisonArray.join("") === currentValueArray.join("");
      })

      this.setState({
        user: newUser
      })
    }

  }

  render() {
    return (
  
      <>
      <div>
      <Header />
      <SearchForm />
      </div>
     

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.usersList.map(user => (
            <tr>
              <th scope="row">{}</th>
              <td><img alt="" src={user.picture.thumbnail} /></td>
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