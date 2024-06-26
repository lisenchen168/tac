{
"spider":"./custom_spider.jar",
//"spider":"./pg.jar",
"lives":[
{
"name":"4gtv",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/4gtv.txt",
"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
},
{"name":"安博1",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/live.txt",
"ua": "okhttp/3.15",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
},
{"name":"安博3",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/live3.txt",
"ua": "",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
}
],
"sites" : [
{"key":"drpy","name":"🔥豆瓣評分🔍搜尋➡簡體字、大陸譯名　　　　　　👉換站源(點我)👈","type":3,"api":"./lib/drpy2.min.js","ext":"./js/豆瓣.js"},
{"key":"lf_search","name":"🔎lf_搜索影片3","type":3,"searchable":0,"changeable":1,"quickSearch":0,"filterable":0,"api":"./lib/lf_search3_min.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]","type":3,"api":"./lib/drpy2.min.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"Youtube","name":"🛗Youtube⏩","type":3,"api":"csp_Youtube","searchable":1,"quickSearch":0,"changeable":0,"ext":{"json":"./youtube.json","type":"直播#新聞#劇集#電影#綜藝#紀錄片#音樂#體育#動物#風光#放鬆#4K#HDR#movie#music#documentary#bbcdocumentary#nationalgeographicdocumentary","keywords":"排行榜,HOT,TRENDS,熱門話題,熱門趨勢,熱門綜藝,熱門電影,熱門電視劇,小姐姐","codecs":""},"style":{"type":"rect","ratio":1.5},"jar":"./pgYT.jar"},
{"key":"Youtube2","name":"👉🔥Youtube台灣新聞🎯👈","type":3,"api":"csp_Youtube","searchable":0,"quickSearch":0,"changeable":0,"ext":{"json":"./youtube2.json","codecs":""},"style":{"type":"rect","ratio":1.5},"jar":"./pgYT.jar"},
{"key":"ikanbotsq","name":"🈵爱看机器人sq","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ikanbotsq.js"},
{"key":"獨播","name":"獨播|海外","type":3,"api":"csp_XPathMacFilter","searchable":1,"changeable":0,"ext":"./js/独播库[飞].js"},
{"key":"獨播js","name":"獨播 js","type":3,"api":"./lib/drpy2.min.sq.js","searchable":1,"changeable":0,"ext":"./js/独播库[飞].js"},
{"key": "星星","name": "🔥星星|","type": 3,"api": "csp_Star","searchable": 1,"changeable": 0},
{"key":"海外看网","name":"🔥海外看haiwaikan","type":0,"api":"https://haiwaikan.com/api.php/provide/vod/at/xml/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"oletv資源f","name":"🔥oletv資源(海外)","type":1,"api":"https://olevod1.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"非凡网","name":"🔥非凡ff","type":0,"api":"http://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快看网","name":"🔥快看kk","type":0,"api":"https://kuaikan-api.com/api.php/provide/vod/at/xmlsea","searchable":1,"quickSearch":1,"filterable":1},
{"key":"優質网","name":"🔥優質zyk","type":0,"api":"https://api.1080zyku.com/inc/api.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"索尼","name":"🔥索尼sn","type":1,"api":"https://suoniapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"filterable":1},
{"key":"天空网","name":"🔥天空tk","type":0,"api":"https://api.tiankongapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"欧帝影院","name":"🔥欧帝影院","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/欧帝影院.js"},
{"key":"泥巴","name":"🔥泥巴","type":3,"api":"csp_Nbys","searchable":1,"filterable":1,"jar":"./top98_1.jar"},
{"key":"多瑙影视","name":"🈵多瑙影视♒","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/多瑙影视.js"},
{"key":"索尼2","name":"🔥索尼2","type":0,"api":"https://suoniapi.com/api.php/provide/vod/from/snm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"360資源資源","name":"🔥360資源資源","type":1,"api":"https://360zy.com/api.php/provide/vod/at/json","searchable":1,"quickSearch":1,"filterable":1},
{"key":"豪华","name":"🌅豪华hh","type":0,"api":"https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"欧乐影院","name":"🌅歐樂影院♒","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/欧乐影院.js"},
{"key":"奇虎影视e","name":"🌅奇虎影视qz","type":1,"api":"https://caiji.qhzyapi.com/api.php/provide/vod/from/qhm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"飛速网","name":"🌅飛速fe","type":0,"api":"https://www.feisuzyapi.com/api.php/provide/vod/from/fsm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"ikun网","name":"🏆ikun","type":0,"api":"https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"暴风影视","name":"🏆暴风bf","type":1,"api":"https://bfzyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"大漠影视e","name":"🏆大漠dm","type":1,"api":"https://damozy.com/api.php/provide/vod/from/M3U8/","searchable":1,"quickSearch":1,"filterable":1},
{"key": "种子","name": "🏆种子短剧zz","type": 1,"api": "http://zzdj.cc/api.php/provide/vod/","searchable": 1,"quickSearch": 1,"filterable": 1},
{"key":"量子網","name":"🏆量子lz","type":1,"api":"http://cj.lziapi.com/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1,"categories":["国产剧","国产动漫","泰国剧","台湾剧","香港剧","欧美剧","韩国剧","日本剧","动漫","体育","剧情片","动作片","爱情片","喜剧片"]},
{"key":"淘片网","name":"🌕淘片tp","type":0,"api":"https://taopianapi.com/home/cjapi/as/mc10/vod/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"U酷網","name":"🏆U酷","type":1,"api":"https://api.ukuapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"红牛","name":"🏆红牛hn","type":0,"api":"https://www.hongniuzy2.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"八戒网","name":"🏆八戒bj","type":1,"api":"http://cj.bajiecaiji.com/inc/apijson_vod.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快播網","name":"🌟快播kb","type":1,"api":"http://www.kuaibozy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"樱花網","name":"🌟樱花yh","type":1,"api":"https://m3u8.apiyhzy.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"百度网","name":"🏆百度db","type":0,"api":"https://api.apibdzy.com/api.php/provide/vod/from/dbm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"无尽网","name":"🌟无尽wj","type":0,"api":"https://api.wujinapi.me/api.php/provide/vod/from/wjm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"ikanbot3","name":"爱看机器人3","type":3,"api":"./lib/drpy2.min.sq.js","ext":"./js/ikanbot3.js"}
],
"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"360資源資源","type":0,"url":"https://www.360jiexi.com/player/?url="},
{"name":"暴風資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"非凡資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"豪華資源","type":0,"url":"https://hhjiexi.com/play/?url="},
{"name":"量子資源","type":0,"url":"https://lziplayer.com/?url="},
{"name":"櫻花資源","type":0,"url":"https://jx.yhzybf.com/player/jx.php?url="},
{"name":"ikun資源","type":0,"url":"https://www.ikdmjx.com/?url="},
{"name":"tv資源","type":0,"url":"https://jx.m3u8.tv/jiexi/?url="},
{"name":"博民資源","type":0,"url":"https://www.bmm3u8.com/?url="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"超嗅探","type":3,"url":"Web"},
{"name":"西瓜嗅探1","type":0,"url":"https://t1.qlplayer.cyou/player/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"西瓜嗅探2","type":0,"url":"https://t1.qlplayer.cyou/player/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},{"name":"高清嗅探","type":0,"url":"https://jx.xmflv.com?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"夜幕嗅探","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"爱心笔记本","type":4,"url":"http://119.91.123.253:2345/Api/yun.php?url="},
{"name":"魏晓芳","type":1,"url":"https://svip.renrenmi.cc:2222/api/?key=ogGC18CjsACNo60r3E&url="},
{"name":"奧斯卡資源","type":0,"url":"https://aosikazyplayurl.com/?url="},
{"name":"色色虎資源","type":0,"url":"https://jx.jxsesehuzy.com/?url="},
{"name":"好色資源","type":0,"url":"https://haosezyplayurl.com/?url="},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"盘古","type":0,"url":"https://www.m3u8.tv.cdn.8old.cn/jx.php?url="},
{"name":"左岸","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","优播线路","腾播线路"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"太空","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua"]}},
{"name":"未知","type":1,"url":"http://106.52.218.221:88/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"随便1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"随便2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"LTRX","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["rx"]}},
{"name":"OJBK","type":0,"url":"https://jmwl.qd234.cn/v/?v=","ext":{"flag":["ltnb","renrenmi","rx","xfyun","muxm3u8","xigua","xueren","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","pptv","PPTV","sohu","letv"]}},
{"name":"parwix1","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"线路m9","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1931000&key=gktuvyzABEORSYZ135&url="},
{"name":"线路NX","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"①秒播","type":1,"url":"https://jx.hfyrw.com/mao.go?url="},
{"name":"②秒播","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"③秒播","url":"http://81.71.48.249:4456/jsonc/293shipin.php?url=","type":1,"i":"77","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"]}},
{"name":"④秒播","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"⑤秒播","type":1,"url":"http://81.71.48.249:4456/jsonc/longxia.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"⑦秒播","type":1,"url":"https://app.okmedcos.com/4k/?url="},
{"name":"⑧秒播","type":1,"url":"https://jie.1z1.cc/api/?key=HdMmTMfyf1uTOQUL0b&url="},
{"name":"Pro","type":1,"url":"http://api.vip123kan.vip/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"2","type":1,"url":"https://jx.mczdyw.com/xg.php?url=","ext":{"flag":["mgtv","芒果"]}},
{"name":"3","type":1,"url":"https://www.aiaine.com/api/?key=kVqmG5dAQ5dZTcECw8&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"4","type":1,"url":"https://svip.rongxingvr.top/api/?key=niBgMGXVdCQhsmeEBK&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"8","type":1,"url":"https://app.iminna.com/jx/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"飓风影院2","type":1,"url":"https://vvip.funsline.cn/api/?key=3xWfEoDf4V9p9Y20CR&url=","ext":{"flag":["ziqie","youku","优酷","qiyi","爱奇艺","奇艺","mgtv","芒果","qq","腾讯"]}},
{"name":"我爱电影网","type":1,"url":"https://jhpc.manduhu.com/j1217.php?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","mgtv","芒果","youku","优酷","pptv","PPTV"]}},
{"name":"王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"盘古解析","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"👉嗅探👈就是破解中，請等候一會👈","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}
],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",

"ijk":[
{"group":"软解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"0"},
{"category":4,"name":"mediacodec-auto-rotate","value":"0"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},
{"category":4,"name":"mediacodec-hevc","value":"0"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},
{"options":[
{"name":"http-detect-range-support","category":1,"value":"0"},
{"name":"fflags","category":1,"value":"fastseek"},
{"name":"skip_loop_filter","category":2,"value":"0"},
{"name":"packet-buffering","category":4,"value":"0"},
{"name":"opensles","category":4,"value":"0"},
{"name":"framedrop","category":4,"value":"60"},
{"name":"soundtouch","category":4,"value":"0"},
{"name":"start-on-prepared","category":4,"value":"1"},
{"name":"reconnect","category":4,"value":"1"},
{"name":"enable-accurate-seek","category":4,"value":"1"},
{"name":"videotoolbox","category":4,"value":"1"},
{"name":"mediacodec","category":4,"value":"1"},
{"name":"mediacodec-all-videos","category":4,"value":"1"},
{"name":"mediacodec-auto-rotate","category":4,"value":"1"},
{"name":"mediacodec-handle-resolution-change","category":4,"value":"1"},
{"name":"mediacodec-hevc","category":4,"value":"1"},
{"name":"max-buffer-size","category":4,"value":"15728640"}],
"group":"硬解码"}],
"doh":[
{"name":"Google","url":"https://dns.google/dns-query","ips":["8.8.4.4","8.8.8.8"]},
{"name":"Cloudflare","url":"https://cloudflare-dns.com/dns-query","ips":["1.1.1.1","1.0.0.1","2606:4700:4700::1111","2606:4700:4700::1001"]},
{"name":"AdGuard","url":"https://dns.adguard.com/dns-query","ips":["94.140.14.140","94.140.14.141"]},
{"name":"DNSWatch","url":"https://resolver2.dns.watch/dns-query","ips":["84.200.69.80","84.200.70.40"]},
{"name":"Quad9","url":"https://dns.quad9.net/dns-quer","ips":["9.9.9.9","149.112.112.112"]}],
"rules":
	[{"name":"量子广告","hosts":["vip.lz","hd.lz",".cdnlz"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6\\.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
	{"name":"非凡广告","hosts":["vip.ffzy","hd.ffzy"],"regex":["20.52","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:7\\.400000,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1170(20|32).*?\\.ts\\s+","#EXTINF.*?\\s+.*?116977.*?\\.ts\\s+"]},
	{"name":"索尼广告","hosts":["suonizy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:1\\.000000,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?p1ayer.*?\\.ts\\s+","#EXTINF.*?\\s+.*?\\/video\\/original.*?\\.ts\\s+"]},
	{"name":"暴风广告","hosts":["bfzy","bfbfvip"],"regex":["#EXTINF.*?\\s+.*?adjump.*?\\.ts\\s+"]},
	{"name":"星星广告","hosts":["aws.ulivetv.net"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:8,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
	{"name":"快看广告","hosts":["kuaikan"],"regex":["#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:5,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:2\\.4,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
	{"name":"磁力广告","hosts":["magnet"],"regex":["更多","请访问","example","社區","xuu","直播","更新","社区","有趣","有趣","英皇体育","全中文AV在线","澳门皇冠赌场","哥哥快来","美女荷官","裸聊","新片首发","UUE29"]},
	{"name":"一起看广告","hosts":["yqk88"],"regex":["18.4","15.1666"]},
	{"name":"火山嗅探","hosts":["huoshan.com"],"regex":["item_id="]},
	{"name":"抖音嗅探","hosts":["douyin.com"],"regex":["is_play_url="]},
	{"name":"农民嗅探","hosts":["toutiaovod.com"],"regex":["video/tos/cn"]}],
"ads":["static-mozai.4gtv.tv","vodfiles.redtraffic.net","mozai.4gtv.tv","https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd","mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","wan.51img1.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]

}