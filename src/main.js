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

import Recommend from './tabs/recommend';

export default class MainComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			'icon':{uri: 'http://facebook.github.io/react/img/logo_og.png'},
			'content':Recommend
		}
	}
	render() {
		let Content = this.state.content;
		return (
			<View style={{flex:1}}>
				<TabBar activeColor={Common.defaultProps.color}>
					<TabBar.Item title={Common.defaultProps.tabs[0]}>
						<Recommend title={Common.defaultProps.tabs[0]}/>
					</TabBar.Item>
					<TabBar.Item title={Common.defaultProps.tabs[1]}></TabBar.Item>
					<TabBar.Item></TabBar.Item>
					<TabBar.Item title={Common.defaultProps.tabs[2]}></TabBar.Item>
					<TabBar.Item title={Common.defaultProps.tabs[3]}></TabBar.Item>
				</TabBar>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	foot:{
		height:70,
		left:0,
		right:0,
		bottom:10,
		alignItems:'center',
		position:'absolute'
	},
	foot_out_circle:{
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#FFF',
		width:70,
		borderWidth:1,
		borderColor:'#CCC',
		borderRadius:100,
		flex:1
	},
	foot_in_circle:{
		borderRadius:50,
		width:50,
		height:50
	}
});