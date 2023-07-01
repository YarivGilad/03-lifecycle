import { ChangeEvent, Component } from "react";

interface Props {
  question: string;
  placeholder: string;
}

interface State {
  output: string;
  count: number;
}

// const log = (...args) => console.log.apply(null, ["UserInput -->", ...args]);
const log = (...args: any[]) => console.log("UserInput -->", ...args);

export class UserInput extends Component<Props, State> {
  /**
   *  Component lifecycle phases:
   *  Initializing --> Mounting --> Updating --> Unmounting
   */

  /**
   *  initialize
   ----------------- */
  state = {
    output: "???",
    count: 0
  };

  /**
   *  Mounting
   --------------*/
  constructor(props: Props) {
    super(props);
    log("constructor");
  }

  componentDidMount() {
    log("component Did Mount");
  }

  /**
   *    Update
   --------------*/
  static getDerivedStateFromProps(nextProps: Props, currentState: State) {
    log("static > getDerivedStateFromProps", '' + currentState.count);
    return null;
    // return { count: currentState.count + 1 };
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    log(
      "should Component Update",
      "nextProps",
      nextProps,
      "nextState:",
      nextState.output
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    log("getSnapshotBeforeUpdate", prevState.output, this.state.output);
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    log("component Did Update", prevState.output);
  }

  /**
   * Event handler
   */
  updateAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    log("updateAnswer: ", event.target.value);
    this.setState({ output: event.target.value });
  };

   /**
   * render
   * called first time on initial mounting
   * then again with each change to the state of this component or a parents component
   */
   render() {
    log("render");
    const { question, placeholder } = this.props;
    const { output } = this.state;

    return (
      <div className="vbox mt20">
        <div className="hbox space-between">
          <h1 className="paragraph">{question}</h1>

          <input
            type="text"
            className="input cap"
            placeholder={placeholder}
            onChange={this.updateAnswer}
          />
        </div>
        <br />
        <h3 className="paragraph text-left white-text cap">
          Your answer: {output}
        </h3>
      </div>
    );
  }

  /**
   *  destroy / unmounting
   * ------------------------*/
  componentWillUnmount() {
    log("component Will Unmount");
    // Clean up code here...
    // remove event listeners
    // clear timers
    // unsubscribe to web sockets etc..
  }
}
