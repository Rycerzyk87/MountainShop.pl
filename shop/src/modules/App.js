import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Newsletter from './Newsletter';
import '../style/App.css';



class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Header />

        <Main />

        <Footer />
        <Newsletter />

      </div>
    );
  }
}

export default App;
