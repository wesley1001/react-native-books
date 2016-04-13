'use strict'
import React,{
	Component,
	StyleSheet,
	View,
	Image,
	Text,
	ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import Common from './../common';
import Header from './libs/head';
import HeadList from './libs/headList';
import CatList from './libs/catList';
import NavigatorBar from './../libs/navigator';

import Plugin from './../plugins/fm';


class Recommend extends Component{
	constructor(props){
		super(props);
		Plugin.getHome(e=>this.setState({data:e}));
	}
	render(){
		this.state&& console.log(this.state.data);
		return(
			<ScrollView>
			  	<Swiper height={180} showButton={true}>
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[0].uri}} />
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[1].uri}} />
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[2].uri}} />
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[3].uri}} />
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[4].uri}} />
			  		<Image style={{flex:1}} source={{uri: this.state && this.state.data && this.state.data.swiper[5].uri}} />
			  	</Swiper>
				{this.state && this.state.data && this.state.data.cats.map((k,i)=>{
					return <HeadList key={i} title={k} items={this.state.data.data[k]} horizontal={i<4} renderItem={i<4?this._onRenderItem:this._onRenderItem2} />
				})}
			</ScrollView>
		);
	}	
	_onRenderItem(item,i){
		return (
			<View key={i} style={{flex:1}}>
				<Image style={{width:110,height:110}} source={{uri: item.face}} />
				<Text style={{width:110,fontSize:13,color:'gray',marginTop:2}} numberOfLines={2} >{item.desc}</Text>
			</View>
		);
	}
	_onRenderItem2(item,i){
		return (
			<View key={i} style={{flexDirection:'row',marginBottom:10,flex:1}}>
				<Image style={{width:70,height:70}} source={{uri: item.face}} />
				<View style={{marginLeft:10,marginTop:2,flex:1}}>
					<Text style={{fontSize:16,color:'#000'}} numberOfLines={1}>{item.name}</Text>
					<Text style={{fontSize:14,color:'gray',marginTop:5}} numberOfLines={2}>{item.desc}</Text>
				</View>
			</View>
		);
	}

}

class Categorye extends Component{
	constructor(props){
		super(props);
		Plugin.getCatgorye(e=>this.setState({data:e}));
	}
	render(){
		this.state && console.log(this.state.data);
		return (
			<ScrollView>
			  	<CatList/>
			</ScrollView>
		);
	}
}

export default class Shop extends Component {
	constructor(props){
		super(props);
		this.state = {
			head:Recommend
		}
	}
	render(){
		let Component = this.state.head;
		return (
			<View  style={{flex:1,backgroundColor:'#EEE'}}>
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color} />
				<Header items={Common.defaultProps.header} onPress={e=>this.setState({'head':[Recommend,Categorye][e]})} />
				<Component/>
			</View>
		);
	}
}