import React, { Component } from "react";
import './App.css';
import BookTest from "./BookTest";


class App extends Component {
  
constructor(props){
  super(props);
    this.state = {

      books: [
        {
          id: 1,
          name: "Take out trash",
          description: "Trash removal from both bins",
          completed: true
        },
        {
          id: 2,
          name: "Do the Dishes",
          description: "Wash and dry the dishes",
          completed: false
        },
        {
          id: 3,
          name: "Walk the Dog",
          description: "Take dog around the block 2 times",
          completed: true
        }
      ]
    };
  }

  render () { 
    const {books} = this.state;

    return (
      <div className="App">
        <h1>Books</h1>
        <div>
          {books.map(book => ( //"(object).map" loops through each element in the object array
              <BookTest 
                name = {book.name}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
