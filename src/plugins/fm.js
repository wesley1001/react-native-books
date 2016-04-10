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
					swiper:[],
					cats: [],
					data: {}
				},
				items = [];
			body.match(new RegExp(swiper,'g')).forEach(i=>{
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
}

Plugin.regExps = {
	'swiper': 'swiper-slide"\\s+.*?\\s+href=".*?"\\s+data-cid="(\\w+)"\\s+data-id="(\\w+)"\\s+data-catid="(\\w+)"\\s+>\\s+<div class="cover swiper-lazy" data-background="(.*?)"></div>',
	'cats': '<a class="more"\\s+.*?\\s+.*?\\s+data-aids="\\d+"\\s+>\\s+</a>\\s+(.*?)\\s+</div>',
	'home': '<a class="recommend-item\\s+.*?\\s+.*?\\s+href=".*?"\\s+data-cid="(\\w+)"\\s+data-id="(\\w)+"\\s+data-catid="(\\w+)"\\s+>\\s+<div class="cover stroke lazy" data-original="(.*?)">\\s+</div>\\s+<div class="title text-big text-black single-line">(.*?)</div>\\s+<div class="description text-small line-clamp">(.*?)</div>'
}