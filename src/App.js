import React from "react";
import "./App.css";
import First from "./components/First";
import FirstQ from "./components/FirstQ";
import Second from "./components/Second";
import Third from "./components/Third";
import datos from "./data.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      datos: {},
    };
  }
  componentDidMount() {
    const dates = require("./data.json");
    this.setState({
      datos: dates,
    });
  }
  render() {
    const first = datos.cover[0];
    const second = datos.category[0];
    const second1 = datos.category[1];
    const second2 = datos.category[2];
    const third = datos.random[0];
    const third1 = datos.random[1];
    return (
      <div>
        <nav>
          <div>
            <img src="/images/menu.png" width="45" height="45" alt="menu"></img>
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
        <div className="body">
          <div className="hidden-first">
            <First
              title={first.title}
              summary={first.summary}
              date={first.date_post}
              author={first.author.name}
              category={first.category.name}
              subcategory={first.subcategory.name}
              read={first.readtime}
            ></First>
          </div>
          <div className="hidden">
            <FirstQ
              image={first.cover_image.url}
              title={first.title}
              summary={first.summary}
              date={first.date_post}
              author={first.author.name}
              category={first.category.name}
              subcategory={first.subcategory.name}
              read={first.readtime}
            ></FirstQ>
          </div>
          <p className="bottom-line">CATEGORY</p>

          <div className="align-second">
            <Second
              image={second.cover_image.url}
              title={second.title}
              summary={second.summary}
              date={second.date_post}
              author={second.author.name}
              cat={second.category.name}
              subcategory={second.subcategory.name}
              read={second.readtime}
            ></Second>
            <Second
              image={second1.cover_image.url}
              title={second1.title}
              summary={second1.summary}
              date={second1.date_post}
              author={second1.author.name}
              cat={second1.category.name}
              subcategory={second1.subcategory.name}
              read={second1.readtime}
            ></Second>
            <div className="hidden">
              <Second
                image={second2.cover_image.url}
                title={second2.title}
                summary={second2.summary}
                date={second2.date_post}
                author={second2.author.name}
                cat={second2.category.name}
                subcategory={second2.subcategory.name}
                read={second2.readtime}
              ></Second>
            </div>
          </div>
          <p className="top-line">Read more</p>
          <div className="align-third">
            <Third
              image={third.cover_image.url}
              title={third.title}
              summary={third.summary}
              date={third.date_post}
              author={third.author.name}
              cat={third.category.name}
              subcategory={third.subcategory.name}
              read={third.readtime}
            ></Third>
            <Third
              image={third1.cover_image.url}
              title={third1.title}
              summary={third1.summary}
              date={third1.date_post}
              author={third1.author.name}
              cat={third1.category.name}
              subcategory={third1.subcategory.name}
              read={third1.readtime}
            ></Third>
          </div>
          <div></div>
        </div>
        <footer>
          <h1>LOGO</h1>
          <div className="footer-ul">
            <ul>
              <h5>Caterogy</h5>
              <p>
                Subcaterogy<br></br>Subcaterogy
              </p>
            </ul>
            <ul>
              <h5>Caterogy</h5>
              <p>
                Subcaterogy<br></br>Subcaterogy
              </p>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
