'use strict'
import React,{
	Platform,
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
		paddingTop:(Platform.OS==='ios')?20:0,
		height:50,
		justifyContent:'center'
	},
	title:{
		color:'#FFF',
		textAlign:'center',
		fontSize:18
	}
});