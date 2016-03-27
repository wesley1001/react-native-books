'use strict'
import React,{
	Component,
	StyleSheet,
	TouchableHighlight,
	View,
	Text,
	ScrollView
} from 'react-native';


export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			index:0
		}
	}
	_onPress(i){
		this.setState({index:i});
		this.props.onPress && this.props.onPress(i);
	}	
	_renderRow(rowData,i){
		return (
			<TouchableHighlight key={i} pos={i} onPress={(e=>this._onPress(i)).bind(this)} underlayColor='#FFF0'>
				<View style={[styles.item,i == this.state.index && styles.active]}>
				  	<Text style={[styles.text,i == this.state.index && styles.text_active]}>{rowData}</Text>
				</View>
			</TouchableHighlight>
		);
	}
	render(){
		return (
			<View style={styles.content}>
				<ScrollView contentContainerStyle={{}} horizontal={true} showsHorizontalScrollIndicator={false}>
				  {this.props.items.map(this._renderRow.bind(this))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content:{
		height:45,
		backgroundColor:'#FFF'
	},
	list:{
		flexWrap:'wrap',
		flexDirection:'row'
	},
	item:{
		height:45,
		width:70,
		alignItems:'center',
		justifyContent:'center',
		borderBottomWidth:2,
		borderBottomColor:'#FFF0'
	},
	active:{
		borderBottomWidth:2,
		borderBottomColor:'#2dcc70'
	},
	text:{
		fontSize:16
	},
	text_active:{
		color:'#2dcc70'
	}
});