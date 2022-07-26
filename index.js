import React, { Component } from 'react';
import { render } from 'react-dom';
import { RegistrationForm } from './src/components/organisms/registration-form';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="p-6 mx-auto w-full md:max-w-md md:px-0">
        <RegistrationForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
