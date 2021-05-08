import React from 'react';
import './App.css';
import HamburgerMenu from '../src/HamburgerMenu';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			open: [false, true, false, true]
		};
  }
	handleClick(id) {
		let { open } = this.state;
    this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
		});
	}
	render() {
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
		      color=' #d63384'
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
<First></First>

<p className="bottom-line">CATEGORY</p>
<div className="align-second">
<Second></Second>
<Second></Second>
</div>
<p className="top-line">READ MORE</p>
<div>
<Third></Third>
<Third></Third>
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
