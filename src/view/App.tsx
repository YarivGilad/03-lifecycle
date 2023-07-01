//------------------------------
//          Phase 1
//------------------------------
import { Component } from "react";
import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";

export class App extends Component {
  state = {
    booksCount: 6,
  };
  addBook = () => {
    this.setState({ booksCount: this.state.booksCount + 1 });
  };
  render() {
    return (
      <div className="app">
        <TopBar>
          <h1>Component Lifecycle methods</h1>
        </TopBar>
        <h1 className="headline white-text">Lifecycle methods</h1>
        <div className="hbox space-between mt20">
          <h3 className="paragraph">Book counter: {this.state.booksCount}</h3>
          <button className="button" onClick={this.addBook}>
            add a book
          </button>
        </div>
        <br />
        <hr />
        <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
      </div>
    );
  }
}

//------------------------------
//          Phase 2
//------------------------------

// import { TopBar } from "./TopBar";
// import { UserInput } from "./UserInput";
// import { Counter } from "./Counter";

// export const App = () => (
//   <div className="app">
//     <TopBar><h1>Component Lifecycle methods</h1></TopBar>
//     <h1 className="headline white-text"> {"<<<< Stateful Bookstore >>>>"}</h1>
//     <Counter item="Book" initial={6} />
//     <br />
//     <hr />
//     <UserInput
//           question="What is your name?"
//           placeholder="Your name here..."
//         />
//   </div>
// );
