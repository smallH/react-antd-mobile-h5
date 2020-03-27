import React from 'react';
import Main from './views';

class App extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		(function (originWidth) {
			var currClientWidth, fontValue;
			__resize();
			window.addEventListener('resize', __resize, false);

			function __resize() {
				currClientWidth = document.documentElement.clientWidth;
				fontValue = ((6.25 * currClientWidth / originWidth) * 100).toFixed(2);
				document.documentElement.style.fontSize = fontValue + '%';
			}
		})(750); // ui设计稿的宽度，一般750或640
	}

	render() {
		return (
			<Main />
		);
	}
}

export default App;