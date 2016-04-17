	'use strict'
import React,{
	AsyncStorage,
	Component,
	StyleSheet,
	View,
	Image,
	Text,
	ScrollView,
	ListView,
	TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Common from './../common';
import Header from './libs/head';
import HeadList from './libs/headList';
import CatList from './libs/catList';
import NavigatorBar from './../libs/navigator';

import Details from './../details';

import Plugin from './../plugins/fm';


class Recommend extends Component{
	constructor(props) {
		super(props);
		AsyncStorage.getItem('shop', (err, ret) => {
			if (ret) {
				this.setState({
					data: JSON.parse(ret)
				});
			} else {
				Plugin.getHome(e => {
					this.setState({
						data: e
					});
					AsyncStorage.setItem('shop', JSON.stringify(e));
				});
			}
		});
	}
	render(){
		return(
			<ScrollView>
			  	<Swiper height={180} showButton={true}  loopTime={4} >
			  		{this.state && this.state.data && this.state.data.swiper.map((v,k)=>{
			  			return (<Image key={k} style={{flex:1}} resizeMode={'stretch'} source={{uri: v.uri}}/>
			  			);
			  		})}
			  	</Swiper>
				{this.state && this.state.data && this.state.data.cats.map((v,k)=>{
					return <HeadList key={k} title={v} items={this.state.data.data[v]} horizontal={k<4} renderItem={k<4?this._onRenderItem.bind(this):this._onRenderItem2.bind(this)} />
				})}
			</ScrollView>
		);
	}	
	_onPress(item){
		this.props && this.props.navigator && this.props.navigator.push({title:item.name,component:Details})
	}
	_onRenderItem(item,i){
		return (
			<View key={i} style={{flex:1}}>
				<TouchableOpacity onPress={e=>this._onPress(item)}>
					<Image style={{width:110,height:110}} source={{uri: item.face}} />
				</TouchableOpacity>
				<Text style={{width:110,fontSize:13,color:'gray',marginTop:2}} numberOfLines={2} >{item.desc}</Text>
			</View>
		);
	}
	_onRenderItem2(item,i){
		return (
			<View key={i} style={{flexDirection:'row',marginBottom:10,flex:1}}>
				<TouchableOpacity onPress={e=>this._onPress(item)}>
					<Image style={{width:70,height:70}} source={{uri: item.face}} />
				</TouchableOpacity>
				<View style={{marginLeft:10,marginTop:2,flex:1}}>
					<Text style={{fontSize:16,color:'#000'}} numberOfLines={1}>{item.name}</Text>
					<Text style={{fontSize:14,color:'gray',marginTop:5}} numberOfLines={2}>{item.desc}</Text>
				</View>
			</View>
		);
	}

}

class Categorye extends Component{
	constructor(props) {
		super(props);
		AsyncStorage.getItem('cats', (err, ret) => {
			if (ret) {
				this.setState({
					data: JSON.parse(ret)
				});
			} else {
				Plugin.getCatgorye(e => {
					this.setState({
						data: e
					});
					AsyncStorage.setItem('cats', JSON.stringify(e));
				});
			}
		});
	}
	render(){
		return (
			<ScrollView>
			  	<CatList/>
			</ScrollView>
		);
	}
}

class Ranking extends Component{
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([]),
		};
		AsyncStorage.getItem('ranking', (err, ret) => {
			if (ret) {
				this.setState({
					dataSource: ds.cloneWithRows(JSON.parse(ret))
				})
			} else {
				Plugin.getRanking(e => {
					this.setState({
						dataSource: ds.cloneWithRows(e)
					});
					AsyncStorage.setItem('ranking', JSON.stringify(e));
				})
			}
		})
	}
	renderRow(item,i){
		return (
			<View key={i} style={{flexDirection:'row',marginBottom:5,flex:1,backgroundColor:'#FFF'}}>
				<Image style={{width:70,height:70}} source={{uri: item.face}} />
				<View style={{marginLeft:10,marginTop:2,flex:1}}>
					<Text style={{fontSize:16,color:'#000'}} numberOfLines={1}>{item.name}</Text>
					<Text style={{fontSize:14,color:'gray',marginTop:5}} numberOfLines={2}>{item.desc}</Text>
				</View>
			</View>
		);
	}
	render(){
		return (
			<ListView
			  style={{paddingLeft:10,paddingRight:10,paddingTop:5}}
			  dataSource={this.state.dataSource}
			  renderRow={this.renderRow} />
			
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
				<Header items={Common.defaultProps.header} onPress={e=>this.setState({'head':[Recommend,Categorye,Ranking][e]})} />
				<Component navigator={this.props.navigator}/>
			</View>
		);
	}
}