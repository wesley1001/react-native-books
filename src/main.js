'use strict'
import React,{
	StyleSheet,
	Component,
	View,
	Text,
	Image
} from 'react-native'

import Common from './common';
import NavigatorBar from './libs/navigator';
import TabBar from './libs/tabBar';

import Recommend from './tab1/recommend';

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
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color} />
				<Content/>
				<TabBar barTintColor={'#FFF'} tintColor={Common.defaultProps.color} ref='tabBar'>
					<TabBar.Item title={'有声馆'} selected={true} icon={this.state.icon} onPress={e=>{}} />
					<TabBar.Item title={'发现'} icon={this.state.icon}/>
					<TabBar.Item />
					<TabBar.Item title={'我的'} icon={this.state.icon}/>
					<TabBar.Item title={'更多'} icon={this.state.icon}/>
				</TabBar>
				<View style={styles.foot}>
					<View style={styles.foot_out_circle}>
						<Image style={styles.foot_in_circle} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
					</View>
				</View>
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