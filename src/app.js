'use strict'
import React,{
	AppRegistry,
	Component,
	Navigator,
	View
} from 'react-native';

import MainComponent from './main';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			main:{title:'有声馆',component:MainComponent}
		};
	}
	renderScene(route,navigator) {
		let Component = route.component;
		return <Component title={route.title} navigator={navigator}/>
	}
	render() {
		return (
			<Navigator
				initialRoute={this.state.main}
				renderScene={this.renderScene}
			/>
		);
	}
}

