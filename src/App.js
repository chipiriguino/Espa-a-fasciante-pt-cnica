import React from 'react';
import './App.css';
import HamburgerMenu from '../src/HamburgerMenu';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import datos from './data.json'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: [false, true, false, true],
      datos: {}
    };
  }
  componentDidMount(){
    const losDatos = require('./data.json')
    this.setState({
      datos: losDatos
    })
  }
  handleClick(id) {
    let { open } = this.state;
    this.setState({
      open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
    });
  }
  render() {
    console.log(this.state.datos)
    return (
      <div>
      <nav>
      <div>
        <HamburgerMenu
          isOpen={this.state.open[0]}
          menuClicked={this.handleClick.bind(this, 0)}
          width={32}
          height={20}
          strokeWidth={3}
          rotate={0}
          color=' #D63384'
          borderRadius={5}
          animationDuration={0.3}
        />
      </div>
      <div>
      <h2>LOGO</h2>
      </div>
      <div>
        <img src="/images/search.png" width="25" alt="search" />
      </div>
      </nav>
      <div className="sub-nav">
        <a href="#">CATEGORY</a>
        <a href="#">CATEGORY</a>
        <a href="#">CATEGORY</a>
      </div>
<First title={datos.cover[0].title} summary={datos.cover[0].summary} date={datos.cover[0].date_post} author={datos.cover[0].author.name} category={datos.cover[0].category.name} subcategory={datos.cover[0].subcategory.name} read={datos.cover[0].readtime}></First>
<p className="bottom-line">CATEGORY</p>
<div className="align-second">
<Second image={datos.category[0].cover_image.url} title={datos.category[0].title} summary={datos.category[0].summary} date={datos.category[0].date_post} author={datos.category[0].author.name} cat={datos.category[0].category.name} subcategory={datos.category[0].subcategory.name} read={datos.category[0].readtime}></Second>
<Second image={datos.category[1].cover_image.url} title={datos.category[1].title} summary={datos.category[1].summary} date={datos.category[1].date_post} author={datos.category[1].author.name} cat={datos.category[1].category.name} subcategory={datos.category[1].subcategory.name} read={datos.category[1].readtime}></Second>
</div>
<p className="top-line">Read more</p>
<div>
<Third image={datos.random[0].cover_image.url} title={datos.random[0].title} summary={datos.random[0].summary} date={datos.random[0].date_post} author={datos.random[0].author.name} cat={datos.random[0].category.name} subcategory={datos.random[0].subcategory.name} read={datos.random[0].readtime}></Third>
<Third image={datos.random[1].cover_image.url} title={datos.random[1].title} summary={datos.random[1].summary} date={datos.random[1].date_post} author={datos.random[1].author.name} cat={datos.random[1].category.name} subcategory={datos.random[1].subcategory.name} read={datos.random[1].readtime}></Third>
</div>
      <footer>
        <h1>LOGO</h1>
        <div className="footer-ul">
        <ul>
          <h4>Caterogy</h4>
          <p>Subcaterogy</p>
          <p>Subcaterogy</p>
        </ul>
        <ul>
          <h4>Caterogy</h4>
          <p>Subcaterogy</p>
          <p>Subcaterogy</p>
        </ul>
        </div>
      </footer>
      </div>
    );
  }
};
export default App;