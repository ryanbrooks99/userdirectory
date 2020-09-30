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
    console.log("test")
    let newSort
      if (this.state.sortOrder !== "des") {
        console.log("one")
        newSort = this.state.usersList.sort((a, b) => {
          let comparison = 0;
          if (a.name.first > b.name.first) {
            comparison = 1;
          } else if (a.name.first < b.name.first) {
            comparison = -1;
          }
          return comparison;
        }
      );
    }
    else {
      console.log("two")
      newSort = this.state.usersList.sort((a, b) => {
        let comparison = 0;
        if (a.name.first > b.name.first) {
          comparison = -1;
        } else if (a.name.first < b.name.first) {
          comparison = 1;
        }
        return comparison;
      }
      );
    }
    const newSortOrder = this.state.sortOrder === "des"? "asc": "des"
    console.log(newSort)
    this.setState({usersList: newSort, sortOrder: newSortOrder})
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    const currentValueArray = event.target.value.toLocaleLowerCase().split("")
    if(currentValueArray.length === 0) {
      this.setState({
        usersList: this.state.shadowUsers
      })
    } else {
      const newUser = this.state.shadowUsers.filter(user => {
        
        const fullName = (`${user.name.first} ${user.name.last}`).toLocaleLowerCase().split("");
        const comparisonArray = [];
        for(let i = 0; i < currentValueArray.length; i++) {
          comparisonArray.push(fullName[i])
        }
        console.log(comparisonArray.join(""), currentValueArray.join(""))
        return comparisonArray.join("") === currentValueArray.join("");
      })

      this.setState({
        usersList: newUser
      })
    }

  }

  render() {
    return (
  
      <>
      <div>
      <Header />
      <SearchForm handleInputChange={this.handleInputChange}/>
      </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col" onClick={() => this.handleSort()}>First Name</th>
              <th scope="col" onClick={() => this.handleSort()}>Last Name</th>
              <th scope="col" onClick={() => this.handleSort()}>Phone</th>
              <th scope="col" onClick={() => this.handleSort()}>Email</th>
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