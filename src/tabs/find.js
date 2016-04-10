'use strict'
import React,{
	Component,
	StyleSheet,
	View,
	Image,
	Text,
	ScrollView
} from 'react-native';

import Common from './../common';
import NavigatorBar from './../libs/navigator';
import Plugin from './../plugins/fm';

export default class Find extends React.Component {
	onPress(){
		console.log(Plugin.getHome());
	}
	render(){
		return (
			<View>
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color} />
				<Text onPress={this.onPress}>获取</Text>
			</View>
		);
	}
}