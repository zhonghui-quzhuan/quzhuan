
微信小程序框架简介


## 注意事项
1.组件 components & template
放弃 <template> 是因为考虑后期可能组件增加逻辑，所以考虑以 <component> 为主的开发
如需 <template> 可在根目录创建，切勿混淆
组件中的不可使用button，text设置样式 需定义class
配置json命名规范:
    以"v-"开头,例:
    "v-view":"/components/v-view/index", //<v-view></v-view>
    "v-view_foot":"/components/v-view-foot/index"
2.CSS
命名规范:公共CSS以"_"下划线的规范外,页面采用"-"中划线形式，避免混淆
3.JS
命名规范:驼峰命名法 例：indexFunction()
3.业务逻辑 models 
对应的一个pages页面对应一个models
除了相对的models外，还有一个公共的public的models用于存放公共业务逻辑



## 目录结构

|-components //组件
|  |-index      //文件夹名字自定义
|     |-img         //当前组件页资源
|     |-index.js    //组件逻辑 无需根据上级文件名只能以index命名
|     |-index.wxml  //组件视图
|     |-index.wxss  //组件样式
|     |-index.json  //组件配置
|-pages     //视图层
|  |-page   //文件夹名字自定义
|     |-page.js   //页面逻辑 根据上级文件名设置命名
|     |-page.wxml //页面视图 
|     |-page.wxss //页面样式
|     |-page.json //页面配置
|-models    //模型
|  |-index.js  // 主要编写对应页面( 视图层 & 组件 )的逻辑代码
|-image        //图片存放
|-utils        //公共文件 存放插件
|  |-util.js     //默认生成的JS 可删除
|  |-md5.js      //接口加密
|  |-client.js   //接口方法封装
|  |-config.js   //公共配置项
|  |-animations.wxss  //公共动画
|  |-wxParse     //富文本插件 可删除
|-app.js    //公共JS
|-app.wxss  //公共CSS
|-app.json  //项目配置项


## 视图层命名备注

|-pages     //视图层
|  |-login       //登录
|  |-index       //首页
|  |-headlines   //----今日热点
|  |-spell       //----趣拼购
|  |-news        //----悦头条
|  |-discount    //----抢优惠
|  |-lottery     //----抽奖列表
|  |-roulette    //----抽奖轮盘页
|  |-notice      //----公告
|  |-earn        //----点点赚
|  |-shop        //悦商城
|  |-detail      //----商品详情页
|  |-pay         //----去支付
|  |-map         //----周边地图
|  |-periphery   //----周边商家
|  |-mine        //我的
|  |-coupon      //----优惠券
|  |-vip         //----VIP会员购买
|  |-card        //----卡包
|  |-wallet      //----钱包
|  |-order       //----订单
|  |-add         //----地址
|  |-cart        //----购物车
|  |-collect     //----收藏
|  |-set         //----设置
|  |-app         //----商脉


## 组件 components

|-components     //组件层
|  |-ad            //看广告领优惠
|  |-add-address   //新增/修改 地址
|  |-address       //确定订单 确认地址
|  |-address-list  //地址列表
|  |-atlas         //商品详情页 图片列表
|  |-banner        //轮播图（自适应宽高度）
|  |-cart-list     //购物车
|  |-collect       //收藏
|  |-discount      //抢优惠 商品列表
|  |-earn          //点点赚详情页
|  |-flash         //启动页
|  |-hotspot       //今日热点
|  |-location      //自定义 定位修改
|  |-login         //登录页
|  |-lottery-list  //抽奖列表页
|  |-maps          //周边地图
|  |-nav           //顶部导航 显示定位/返回上页功能
|  |-navbar        //顶部导航 带定位修改功能
|  |-news          //悦头条详情页 富文本
|  |-news-list     //悦头条 分类页 --没改WXSS
|  |-notice        //公告 列表
|  |-number        //自定义 商品数量修改
|  |-particulars   //抢优惠 详情页
|  |-pattern       //商品详情页 款式确认
|  |-pay           //确定订单
|  |-periphery     //周边商家 门店列表
|  |-poster        //首页 点点赚
|  |-product       //商品列表
|  |-qrcode        //带参小程序二维码
|  |-record        //抽奖列表
|  |-roulette      //九宫格抽奖
|  |-search        //自定义 搜索功能
|  |-shop          //周边商家详情
|  |-show          //悦商城 精选栏目
|  |-show-text     //公告详情 富文本
|  |-showmodel     //自定义 弹框
|  |-spell-goods   //趣拼购 今日必拼
|  |-switch        //自定义 滚动标题
|  |-tabbar        //购物车 底部浮动加入购物车
|  |-table         //首页 F4模块 + 滚屏公告
|  |-tips          //抢优惠 优惠券须知弹框
|  |-user          //我的
|  |-order         //订单列表

