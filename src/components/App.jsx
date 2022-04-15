import { Component } from 'react';
import { AppBar } from './AppBar/AppBar';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';

// import options from '../components/ColorPicker/options.json';
const user = {
  username: 'Mango',
  isOnline: true,
  points: { total: 700, required: 200 },
};
export class App extends Component {
  state = {
    isAppbarOpen: false,
  };
  openAppBar = () => this.setState({ isAppbarOpen: true });
  closeAppBar = () => this.setState({ isAppbarOpen: false });
  render() {
    const { isAppbarOpen } = this.state;
    return (
      <>
        {!isAppbarOpen && (
          <button type="button" onClick={this.openAppBar}>
            Открыть
          </button>
        )}

        {isAppbarOpen && <AppBar user={user} onClose={this.closeAppBar} />}

        {/* <Counter />

       <Dropdown />

      <ColorPicker options={options} /> */}
      </>
    );
  }
}
