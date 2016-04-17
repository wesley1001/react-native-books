'use strict';
import React, {
	View,
	Image,
	Text,
	ListView
} from 'react-native';
import NavigatorBar from './libs/navigator';
import Common from './common';

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([1,2,4,4]),
		};
	}
	renderRow(item,i){
		return (
			<View style={{}}>
				<Text>11</Text>
			</View>
		);
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'#EEE'}}>
				<NavigatorBar title={this.props.title} bgColor={Common.defaultProps.color}/>
				<View style={{flexDirection:'row',padding:10,paddingTop:5,backgroundColor:'#FFF'}}>
					<Image  style={{height:100,width:100}} source={{uri: 'http://pic.qingting.fm/2015/1127/20151127175300122.jpg!200'}} />
					<Text style={{flex:1,fontSize:14,color:'gray',marginLeft:5}} numberOfLines={6}>历史上有四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。有谚为证：发丘印，摸金符，搬山卸岭寻龙诀；人点蜡，鬼吹灯，勘舆倒斗觅星峰；水银癍，养明器，龙楼宝殿去无数；窨沉棺，青铜椁，八字不硬莫近前。</Text>
				</View>
				<ListView style={{backgroundColor:'#fff',paddingLeft:10,marginTop:10}} dataSource={this.state.dataSource} renderRow={this.renderRow} />
			</View>
		);
	}
}