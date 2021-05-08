import React from 'react';
import './App.css';
import First from './components/First';
import FirstQ from './components/FirstQ';
import Second from './components/Second';
import Third from './components/Third';
import datos from './data.json'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      datos: {}
    };
  }
  componentDidMount(){
    const losDatos = require('./data.json')
    this.setState({
      datos: losDatos
    })
  }
  render() {
    console.log(this.state.datos)
    return (
      <div>
      <nav>
      <div>
        <img src="/images/menu.png" width="45" height="45"></img>
      </div>
      <div>
      <h2>LOGO</h2>
      </div>
      <div>
        <img src="/images/search.png" width="25" alt="search" />
      </div>
      </nav>
      <div className="sub-nav">
        <a href="https://portfolio-chipiriguino.herokuapp.com/">CATEGORY</a>
        <a href="https://portfolio-chipiriguino.herokuapp.com/">CATEGORY</a>
        <a href="https://portfolio-chipiriguino.herokuapp.com/">CATEGORY</a>
      </div>
      <div className="hidden-first"><First title={datos.cover[0].title} summary={datos.cover[0].summary} date={datos.cover[0].date_post} author={datos.cover[0].author.name} category={datos.cover[0].category.name} subcategory={datos.cover[0].subcategory.name} read={datos.cover[0].readtime}></First></div>
<div className="hidden"><FirstQ image={datos.cover[0].cover_image.url} title={datos.cover[0].title} summary={datos.cover[0].summary} date={datos.cover[0].date_post} author={datos.cover[0].author.name} category={datos.cover[0].category.name} subcategory={datos.cover[0].subcategory.name} read={datos.cover[0].readtime}></FirstQ></div>
<p className="bottom-line">CATEGORY</p>
<div className="align-second">
<Second image={datos.category[0].cover_image.url} title={datos.category[0].title} summary={datos.category[0].summary} date={datos.category[0].date_post} author={datos.category[0].author.name} cat={datos.category[0].category.name} subcategory={datos.category[0].subcategory.name} read={datos.category[0].readtime}></Second>
<Second image={datos.category[1].cover_image.url} title={datos.category[1].title} summary={datos.category[1].summary} date={datos.category[1].date_post} author={datos.category[1].author.name} cat={datos.category[1].category.name} subcategory={datos.category[1].subcategory.name} read={datos.category[1].readtime}></Second>
<div className="hidden"><Second image={datos.category[2].cover_image.url} title={datos.category[2].title} summary={datos.category[2].summary} date={datos.category[2].date_post} author={datos.category[2].author.name} cat={datos.category[2].category.name} subcategory={datos.category[2].subcategory.name} read={datos.category[2].readtime}></Second></div>
</div>
<p className="top-line">Read more</p>
<div className="align-third">
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