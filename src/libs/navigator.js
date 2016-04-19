'use strict'
import React,{
	Platform,
	StyleSheet,
	Component,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';


export default class NavigatorBar extends Component {
	render(){
		return (
			<View style={[styles.navigator,{backgroundColor:this.props.bgColor}]}>
				<TouchableOpacity onPress={this.props.onLeftPress}>
					<Image style={{width:30,height:30}} source={this.props.leftIcon} />
				</TouchableOpacity>
				<Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
				<TouchableOpacity onPress={this.props.onRightPress}>
					<Image style={{width:30,height:30}} source={this.props.rightIcon} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navigator:{
		flexDirection:'row',
		paddingTop:(Platform.OS==='ios')?20:0,
		height:55,
		alignItems:'center',
		paddingLeft:10,
		paddingRight:10
	},
	title:{
		flex:1,
		color:'#FFF',
		textAlign:'center',
		fontSize:18
	}
});