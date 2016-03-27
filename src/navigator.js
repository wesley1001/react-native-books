'use strict'
import React,{
	StyleSheet,
	Component,
	View,
	Text
} from 'react-native';
import Common from './common';

export default class NavigatorBar extends Component {
	render(){
		return (
			<View style={styles.navigator}>
				<Text style={styles.title}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navigator:{
		height:50,
		justifyContent:'center',
		backgroundColor:Common.defaultProps.color
	},
	title:{
		color:'#FFF',
		textAlign:'center',
		fontSize:18
	}
});