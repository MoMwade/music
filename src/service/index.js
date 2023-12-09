import request from '@/utlis/request'
import {co} from '@/utlis/index'


/**
 * 
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量 默认30
 * @param {Number} data.offset 偏移数量用于分页
 * @param {Number} data.type 类别 (-1:全部1:男歌手2:女歌手3:乐队)
 * @param {Number} data.area 地区 (-1:全部7华语96欧美8:日本16韩国0:其他)
 * @returns {promise}
 * 
 */

export const getArtistList = (data) => 
   co(request.post(`/artist/list`,data)) 

//搜索
/**
 * @description 获取搜索接口 用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 
 * @param {Object} data 请求参数
 * @param {String} data.keywords 搜索关键词
 * @param {Number} data.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Number} data.limit 返回数量 默认30
 * @param {Number} data.type 搜索类型 默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
 * @returns 
 */
export const cloudsearch = (params) => 
   co(request.get('/cloudsearch',{params})) 

//轮播图
/**
 * 
 * @param {Object} data 请求参数 可获取 banner( 轮播图 ) 数据
 * @param {Number} data.type 资源类型,对应以下类型,默认为 0 即 PC 0: pc 1: android 2: iphone 3: ipad
 * @returns 
 */
export const getBanners = (params) =>
   co(request.get('/banner',{params}))

/**
 * 
 * @param {Object} data  调用此接口 , 可获取 APP 首页信息
 * @param {Boolean} data.refresh 可选参数 是否刷新数据,默认为 false 
 * @param {Object} data.cursor 可选参数 上一条数据返回的 cursor
 * @returns 
 */
export const getBlockPage = (data) =>
   co(request.post('/homepage/block/page',{data}))

/**
 * 
 * @param {Object} data 获取热门话题
 * @param {Number} data.limit   可选参数 取出评论数量 , 默认为 20
 * @param {Number} data.offset  可选参数 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @returns 
 */
export const getHotTopic = (data) =>
   co(request.post(`/hot/topic?${new Date().getTime}`,{data}))

/**
 * 
 * @param {Object} data 获取歌单详情 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次
 * @param {Number} data.id 必选参数 歌单 id
 * @param {Number} data.s 可选参数  歌单最近的 s 个收藏者,默认为 8
 * @returns 
 */
export const getPlaylistDetail = (params) =>
   co(request.get(`/playlist/detail`,{params}))

/**
 * 
 * @param {Object} data  调用此接口,传入歌单 id 可获取相关歌单
 * @param {Number} data.id 必选参数 歌单 id
 * @returns 
 */
export const getRelatedPlaylist = (params) =>
   co(request.get(`/related/playlist`,{params}))

/**
 * 
 * @param {Object} data  调用此接口,传入歌单 id 获取歌单所有歌曲
 * @param {Number} data.id 必选参数 歌单 id
 * @returns 
 */
export const getPlaylistTrackAll = (params) =>
   co(request.get(`/playlist/track/all`,{params}))


/**
 * 
 * @param {Object} data 调用此接口 ,传入手机号码, 可发送验证码
 * @param {Object} data.phone 手机号码
 * @returns 
 */
export const getCaptcha = (params) => 
   co(request.get(`/captcha/sent`,{params}))

/**
 *  
 * @param {Object} data 手机登录
 * @param {String} data.phone 手机号码 
 * @param {String} data.captcha 验证码 
 * @returns 
 */
export const getLoginCellphone = (params) => 
   co(request.get(`/login/cellphone`,{params})) 

/**
 * 
 * @param {Object} data 国家编码列表
 * @returns 
 */
export const getCountriesCodeList = () => 
   co(request.get(`/countries/code/list`)) 

/**
 * 
 * @param {Object} data 获取用户详情  登录后调用此接口 , 传入用户 id, 可以获取用户详情
 * @param {Number} data.uid 用户 id 
 * @returns 
 */
export const getUserDetail = (params) => 
   co(request.get(`/user/detail`,{params})) 

/**
 * 
 * @param {Object} data 获取用户歌单  登录后调用此接口 , 传入用户 id, 可以获取用户歌单
 * @param {Number} data.uid 用户 id 
 * @returns 
 */
export const getUserPlaylist = (params) => 
   co(request.get(`/user/playlist`,{params}))

/**
 * 
 * @param {Object} data 调用此接口 , 可获取 mv 排行
 * @param {Number} data.limit 取出数量 , 默认为 30
 * @param {String} data.area 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @param {Number} data.offset  偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * @returns 
 */
export const getTopMv = (params) => 
   co(request.get(`/top/mv`,{params}))

/**
 * 
 * @param {Object} data 调用此接口 , 传入 mv id,可获取 mv 播放地址
 * @param {Number} data.id mv id
 * @param {String} data.r 分辨率,默认 1080,可从 /mv/detail 接口获取分辨率列表
 * @returns 
 */
export const getMvUrl = (params) => 
   co(request.get(`/mv/url`,{params}))

/**
 * 
 * @param {Object} data 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
 * @param {Number} data.mvid mv id
 * @returns 
 */
export const getMvDetailInfo = (params) => 
   co(request.get(`/mv/detail/info`,{params}))

/**
 * 
 * @param {Object} data 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * @param {Number} data.mvid mv id
 * @returns 
 */
export const getMvDetail = (params) => 
   co(request.get(`/mv/detail`,{params}))

export const getTrackUrl = (track) => {
      return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
    };
  
/**
 * 
 * @param {Object} data 获取歌单详情  歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
 * @param {Number} data.id  歌单 id
 * @returns 
 */
export const getSongDetail = (ids) => {
   return co(request.get(`/song/detail`, {params:{ids}}));
 }
//函数必须使用async关键字修饰
// await关键字后面必须跟Promise实例或返回promise实例的函数(执行)
// const fn1 = async () => {
//     try{
//         const res = await cloudsearch(params)
//         return res
//     } catch(err){
//         console.log(err)
//     }
// }

// const fn2 = async () => {
//     const res = await cloudsearch(params).catch((err) => console.log(err))
//     console.log(res);
// }

// const fn3 = async () => {
//     const [error,res] = await cloudsearch();
//     if(!error) {
//         return console.log(res);
//     }
// }
