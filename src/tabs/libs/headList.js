'use strict'
import React,{
	Component,
	StyleSheet,
	View,
	Text
} from 'react-native';

import Common from './../../common';

export default class HeadList extends Component {
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.title}>
					<View style={styles.title_icon}></View>
					<Text style={styles.title_text}>{this.props.title}</Text>
					<Text style={styles.more}>更多</Text>
				</View>
				<View style={[styles.list,this.props.horizontal && {flexDirection:'row'}]}>
					{this.props.items.map(this.props.renderItem)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content:{
		marginTop:20,
		paddingLeft:10,
		paddingRight:10,
		backgroundColor:'#FFF'
	},
	title:{
		height:45,
		flexDirection:'row',
		alignItems:'center',
	},
	title_icon:{
		height:20,
		borderLeftWidth:4,
		borderLeftColor:Common.defaultProps.color,
	},
	title_text:{
		flex:1,
		fontSize:18,
		marginLeft:5,
	},
	more:{
		width:30,
		color:'gray'
	},
	list:{
		marginTop:5,
		paddingBottom:10
	}
});