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
import Header from './head';
import HeadList from './headList';
import NavigatorBar from './../libs/navigator';

class Recommend extends Component{
	render(){
		let data = [
			{name:'11111',auth:'aaa',pic:'http://facebook.github.io/react/img/logo_og.png'},
			{name:'11111',auth:'aaa',pic:'http://facebook.github.io/react/img/logo_og.png'},
			{name:'11111',auth:'aaa',pic:'http://facebook.github.io/react/img/logo_og.png'},
		];
		return(
			<ScrollView style={{}}>
			  	<View>
					<Image style={{height:200}} source={{uri: 'http://78rbm4.com2.z0.glb.qiniucdn.com/62cfa23a823d43729f42b3b31c2581f6_720x238.jpg'}} />
				</View>
				<View style={{height:20}}></View>
				<HeadList title={'小编推荐'} items={data} horizontal={true} renderItem={this._onRenderItem} />
				<View style={{height:20}}></View>
				<HeadList title={'听小说'} items={data} renderItem={this._onRenderItem2} />
			</ScrollView>
		);
	}	
	_onRenderItem(item,i){
		return (
			<View key={i} style={{flex:1}}>
				<Image style={{width:120,height:100}} source={{uri: item.pic}} />
				<Text style={{marginTop:5}}>{item.name}</Text>
				<Text>{item.auth}</Text>
			</View>
		);
	}
	_onRenderItem2(item,i){
		return (
			<View key={i} style={{flexDirection:'row',marginBottom:10}}>
				<Image style={{width:60,height:70}} source={{uri: item.pic}} />
				<View style={{marginLeft:10}}>
					<Text style={{fontSize:18,fontWeight:'bold',color:'#000'}}>{item.name}</Text>
					<Text style={{fontSize:16}}>{item.auth}</Text>
					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize:12}}>500集</Text>
						<Text style={{fontSize:12}}>500赞</Text>
					</View>
				</View>
			</View>
		);
	}

}

export default class Shop extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return (
			<View  style={{flex:1,backgroundColor:'#EEE'}}>
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color} />
				<Header items={Common.defaultProps.header} onPress={e=>this.setState({'head':e})} />
				<Recommend/>
			</View>
		);
	}
}