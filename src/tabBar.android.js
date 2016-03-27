'use strict'
import React,{
	StyleSheet,
	Dimensions,
	Component,
	View,
	Image,
	Text,
	TouchableHighlight
} from 'react-native';

export default class TabBar extends Component {
	constructor(props){
		super(props);
		this.props.children.forEach(((v,i)=>v.props.selected && (this.state={'index':i})).bind(this));
	}
	render(){
		return (
			<View style={[styles.tab_bar,{backgroundColor:this.props.barTintColor}]}>
				{this.props.children.map((v,i)=>{
					return <TabBar.Item key={i} {...v.props} selected={this.state.index == i} tabBar={this} pos={i}></TabBar.Item>
				})}
			</View>
		);
	}
}

TabBar.Item = class TabBarItem extends Component {
	constructor(props){
		super(props);
	}
	onPress(){
		if (this.props.selected)
			return;
		this.props.tabBar.setState({index:this.props.pos});
		this.props.onPress && this.props.onPress(this);
	}
	render(){
		return (
			<View style={styles.item}>
				<TouchableHighlight onPress={this.onPress.bind(this)} activeOpacity={1} underlayColor={'#FFF0'}>
					<Image style={styles.item_image} source={this.props.icon} />
				</TouchableHighlight>
				<Text style={[styles.item_text,this.props.selected && {color:this.props.tabBar.props.tintColor}]} onPress={this.onPress.bind(this)}>{this.props.title}</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	tab_bar:{
		flex:1,
		left:0,
		right:0,
		bottom:0,
		height:60,
		position:'absolute',
		borderTopWidth:1,
		borderTopColor:'#DDD',
		flexDirection:'row'
	},
	item:{
		flex:1,
		alignItems:'center'
	},
	item_image:{
		marginTop:4,
		width:32,
		height:32
	},
	item_text:{
		textAlign:'center',
		fontSize:12
	}
});