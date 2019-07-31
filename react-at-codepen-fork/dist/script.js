class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0 };

  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return React.createElement("button", {
      onClick: () => this.updateCount() }, "Clicked ",

    this.state.count, " times");

  }}


React.render(React.createElement(Button, null), document.getElementById('app'));