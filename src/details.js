'use strict';
import React, {
	StyleSheet,
	AsyncStorage,
	View,
	Image,
	Text,
	ListView
} from 'react-native';
import NavigatorBar from './libs/navigator';
import Common from './common';

import Plugin from './plugins/fm';

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([]),
		};
		AsyncStorage.getItem('current', (err, item) => {
			if (item) {
				item = JSON.parse(item);
				Plugin.getBookInfo(item.cid, ret => {
					ret['name'] = item.name;
					ret['face'] = item.face;
					this.setState({
						data: ret,
						dataSource: ds.cloneWithRows(ret.chapters)
					});
				});
			}
		});
	}
	renderRow(item,name,idx){
		let bookName = '第' + (parseInt(idx) + 1) + '集 '
		bookName += this.state && this.state.data && this.state.data.name || "";
		return (
			<View style={styles.row_item}>
				<Text style={{flex:1}}>{bookName}</Text>
				<Image style={{height:30,width:30}} source={require('./icons/down.png')} />
			</View>
		);
	}
	render() {
		return (
			<View style={styles.content}>
				<NavigatorBar 
					title={this.props.title} 
					bgColor={Common.defaultProps.color} 
					leftIcon={require('./icons/back.png')}
					onLeftPress={e=>{
						this.props && this.props.navigator && this.props.navigator.pop();
					}}/>
				<View style={styles.info}>
					<Image  style={styles.book_img} source={{uri: this.state && this.state.data && this.state.data.face}} />
					<Text style={styles.book_desc} numberOfLines={6}>{this.state && this.state.data && this.state.data.desc}</Text>
				</View>
				<ListView style={styles.book_chapter} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
				<View style={styles.foot_box}></View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#EEE'
	},
	info: {
		flexDirection: 'row',
		padding: 10,
		paddingTop: 5,
		backgroundColor: '#FFF'
	},
	row_item: {
		height: 40,
		borderBottomWidth: 5,
		borderBottomColor: '#EEE',
		alignItems: 'center',
		flexDirection: 'row'
	},
	book_img: {
		height: 100,
		width: 100
	},
	book_desc: {
		flex: 1,
		fontSize: 14,
		color: 'gray',
		marginLeft: 5
	},
	book_chapter: {
		backgroundColor: '#fff',
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 10
	},
	foot_box: {
		height: 55,
		borderTopWidth:1,
		borderTopColor:'#EEE',
		backgroundColor:'#FFF'
	}

});