'use strict'
import React,{
	AppRegistry,
	Component,
	View,
	Text,
} from 'react-native'

import Common from './common';
import NavigatorBar from './navigator';
import TabBar from './tabBar';

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
				<NavigatorBar title={this.props.title} />
				<Content/>
				<TabBar barTintColor={'#FFF'} tintColor={Common.defaultProps.color} ref='tabBar'>
					<TabBar.Item title={'有声馆'} selected={true} icon={this.state.icon}
						onPress={e=>console.log(e)}/>
					<TabBar.Item title={'发现'} icon={this.state.icon}/>
					<TabBar.Item />
					<TabBar.Item title={'我的'} icon={this.state.icon}/>
					<TabBar.Item title={'更多'} icon={this.state.icon}/>
				</TabBar>
			</View>
		);
	}
} 