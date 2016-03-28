'use strict'
import React,{
	StyleSheet,
	Component,
	View,
	Text
} from 'react-native';

export default class NavigatorBar extends Component {
	render(){
		return (
			<View style={[styles.navigator,{backgroundColor:this.props.bgColor}]}>
				<Text style={styles.title}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navigator:{
		height:50,
		justifyContent:'center'
	},
	title:{
		color:'#FFF',
		textAlign:'center',
		fontSize:18
	}
});