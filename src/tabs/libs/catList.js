'use strict'
import React,{
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';

class CatListItem extends React.Component {
	render(){
		return (
			<Image style={[this.props.style]} source={this.props.uri} >
				<View style={{backgroundColor:'#0008',position:'absolute',left:0,right:0,bottom:0,height:40,justifyContent:'center'}}>
					<Text style={{color:'#FFF',fontSize:14,marginLeft:10}}>有声读物</Text>
				</View>
			</Image>
		);
	}
}

export default class CatList extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View style={styles.content}>
				<View style={{flex:2,flexDirection:'row'}}>
					<CatListItem style={{flex:6,marginRight:2}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
					<View style={{backgroundColor:'#F0F',flex:3}}>
						<CatListItem style={{flex:1}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
						<CatListItem style={{flex:1}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
					</View>
				</View>
				<View style={{flex:1,flexDirection:'row',marginTop:2}}>
					<CatListItem style={{flex:1}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
					<CatListItem style={{flex:1,marginRight:2,marginLeft:2}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
					<CatListItem style={{flex:1}} uri={{uri:'http://pic.qingting.fm/2015/0818/20150818113341770.jpg!200'}}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content:{
		flex:1,
		height:300,
		margin:2,
		marginBottom:0
	}
});