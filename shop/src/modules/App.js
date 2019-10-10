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
        <header>
          <Header />
          <div className="headerbtns">
            <a href="https://pl-pl.facebook.com" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.google.pl" className="fa fa-google" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://twitter.com" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://pl.pinterest.com/" className="fa fa-pinterest" target="_blank" rel="noopener noreferrer"> </a>
          </div>
        </header>
        <main>
          <Main />
          <Newsletter />
        </main>
        <footer>
          <Footer />
        </footer>


      </div>
    );
  }
}

export default App;

// json-server --watch db.json
