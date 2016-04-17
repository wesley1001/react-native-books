'use strict'
import React,{
	StyleSheet,
	Component,
	View,
	Text,
	Image
} from 'react-native'
import TabBar from 'react-native-tabbar';

import Common from './common';

import Shop from './tabs/shop';
import Find from './tabs/find';

export default class MainComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			'icon':{uri: 'http://facebook.github.io/react/img/logo_og.png'}
		}
	}
	render() {
		let Content = this.state.content;
		return (
			<View style={{flex:1}}>
				<TabBar activeColor={Common.defaultProps.color}>
					<TabBar.Item icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/426-smiley.png'}} title={Common.defaultProps.tabs[0]}>
						<Shop title={Common.defaultProps.tabs[0]} navigator={this.props.navigator}/>
					</TabBar.Item>
					<TabBar.Item icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/126-smiley.png'}} title={Common.defaultProps.tabs[1]}>
						<Find title={Common.defaultProps.tabs[1]} navigator={this.props.navigator}/>
					</TabBar.Item>
					<TabBar.Item></TabBar.Item>
					<TabBar.Item icon={{uri:'http://www.iconpng.com/png/font_awesome/f118.png'}} title={Common.defaultProps.tabs[2]}></TabBar.Item>
					<TabBar.Item icon={{uri:'http://www.iconpng.com/png/font_awesome/f119.png'}} title={Common.defaultProps.tabs[3]}></TabBar.Item>
				</TabBar>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	
});