import * as React from 'react';

// Propsの型定義
interface SubComponentProps {
  name: string;
}
interface SubComponentState {
  count: number;
}


export class SubComponent extends React.Component<SubComponentProps, SubComponentState> {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
        <div>
          <h2>{this.props.name}</h2>
          <div>{this.state.count}</div>
          <button onClick={this.handleClick.bind(this)}>Add +1</button>
        </div>
    );
  }
}
