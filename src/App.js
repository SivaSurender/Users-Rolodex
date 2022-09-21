import { Component } from "react";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import "./App.css"


class App extends Component {
  // constructor is used to initialize the object's state in calss (i.e) before the component is mounted// its always callled first, then the render method, then component life cycle method thenagain the render method
  constructor() {
    //super  is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class.
    super();

    this.state = {
      monsters: [],
      searchField : "",
    };
  }

  // componentdid mount is the first part of the component life cyycle
  // api calls will always come under componet did update life cycle

  // points to note, react renders first when the component mounts and then re-renders when setState stae is called

  // (or) when props change

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((finalData) =>
        this.setState(
          function () {
            return { monsters: finalData };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

   onSearchEvent = (event) => {

            const searchField = event.target.value.toLocaleLowerCase();
            
            this.setState(() => {
              return { searchField };
            });
          }

  render() {

    // using object destructuring to avoid using this keyword

    const { monsters, searchField } = this.state;
    const { onSearchEvent } = this;

    const filteredName = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    }
    );

    return (
      <div className="App">
     
        <h1 className="app-title">Users Rolodex</h1>
        <SearchBox searchComponent={ onSearchEvent} propclassName="monsters-search-box" propPlaceholder = "Type UserName" />
        <CardList monsters={filteredName} />
      </div>
    );
  }
}

export default App;
