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

export default class Find extends React.Component {
	render(){
		return (
			<View>
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color} />
			</View>
		);
	}
}