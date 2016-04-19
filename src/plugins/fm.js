'use strict'
import React from 'react-native';

export default class Plugin {
	static getHome(cb) {
		fetch('http://m.qingting.fm/categories/521').then(resp => {
			return resp.text();
		}).then(body => {
			let {
				swiper,
				cats,
				home
			} = Plugin.regExps,
				ret = {
					swiper: [],
					cats: [],
					data: {}
				},
				items = [];
			body.match(new RegExp(swiper, 'g')).forEach(i => {
				var item = i.match(swiper);
				ret.swiper.push({
					cid: item[1],
					id: item[2],
					catid: item[3],
					uri: item[4]
				});

			});
			body.match(new RegExp(home, 'g')).forEach(i => {
				var item = i.match(home);
				items.push({
					cid: item[1],
					id: item[2],
					catid: item[3],
					face: item[4],
					name: item[5],
					desc: item[6]
				});
			});
			body.match(new RegExp(cats, 'g')).forEach((k, i) => {
				k = k.match(cats)[1];
				ret.cats.push(k);
				ret.data[k] = items.slice(i * 3, i * 3 + 3);
			});
			cb && cb(ret);
		});
	}
	static getCatgorye(cb) {
		fetch('http://m.qingting.fm/categories/521/attrs/0').then(resp => {
			return resp.text()
		}).then(body => {
			let {
				tags
			} = Plugin.regExps,
				ret = [];
			body.match(new RegExp(tags, 'g')).forEach(i => {
				var item = i.match(tags);
				ret.push({
					uri: item[1],
					name: item[2]
				});
			});
			console.log('test', ret);
			cb && cb(ret);
		});
	}
	static getRanking(cb) {
		fetch('http://m.qingting.fm/billboard/cat_retain/521').then(resp => {
			return resp.text()
		}).then(body => {
			let {
				ranks
			} = Plugin.regExps,
				ret = [];
			body.match(new RegExp(ranks, 'g')).forEach(i => {
				var item = i.match(ranks);
				ret.push({
					id: item[1],
					name: item[2],
					face: item[3],
					desc: item[4]
				});
			});
			cb && cb(ret);
		});
	}
	static getBookInfo(bid, cb) {
		fetch('http://m.qingting.fm/vchannels/' + bid).then(resp => {
			return resp.text()
		}).then(body => {
			let {
				bookInfo_desc,
				bookInfo_list
			} = Plugin.regExps,
				ret = {'chapters':[]};
			body.match(new RegExp(bookInfo_list, 'g')).forEach(i => {
				var item = i.match(bookInfo_list);
				ret.chapters.push(item[1]);
			});
			ret['desc'] = body.match(bookInfo_desc)[1];
			console.log('test', ret);
			cb && cb(ret);
		});
	}
}

Plugin.regExps = {
	'swiper': 'swiper-slide"\\s+.*?\\s+href=".*?"\\s+data-cid="(\\w+)"\\s+data-id="(\\w+)"\\s+data-catid="(\\w+)"\\s+>\\s+<div class="cover swiper-lazy" data-background="(.*?)"></div>',
	'cats': '<a class="more"\\s+.*?\\s+.*?\\s+data-aids="\\d+"\\s+>\\s+</a>\\s+(.*?)\\s+</div>',
	'home': '<a class="recommend-item\\s+.*?\\s+.*?\\s+href=".*?"\\s+data-cid="(\\w+)"\\s+data-id="(\\w)+"\\s+data-catid="(\\w+)"\\s+>\\s+<div class="cover stroke lazy" data-original="(.*?)">\\s+</div>\\s+<div class="title text-big text-black single-line">(.*?)</div>\\s+<div class="description text-small line-clamp">(.*?)</div>',
	'tags': 'nav-item"><a href="(.*?)">(.*?)</a>',
	'ranks': 'class="album" data-channel-id=(\\w+) data-channel-type=0 data-channel-name="(.*?)".*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+.*?\\s+<img src="(http://pic.*?)".*?\\s+.*?\\s+.*?\\s+.*?\\s+<div class="album-desc">\\s([\\w\\W]+?)</div>',
	'bookInfo_desc': 'description line-clamp">([\\w\\W]+?)</div>',
	'bookInfo_list': 'data-file="(.*?)"'
}