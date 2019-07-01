// components/roulette/index.js
// import { PublicModels } from '../../models/public.js'
// let publicModels = new PublicModels();

var app = getApp();

//计数器
var interval = null;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statusHeight: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    image: app.config.imgUrl + 'lucyBg.png',
    notice: app.config.imgUrl + 'luckyIcon.png',
    news: [{
      id: 1,
      content: '恭喜“185****1234”抽中糙米粉'
    }, {
      id: 2,
      content: '恭喜“185****1234”抽中糙面粉'
    }, {
      id: 3,
      content: '恭喜“185****1234”抽中糙饭'
    }],
    prizeList: [{
      prize_id: 1,
      prize_lucky_img: '../../image/collect.png',
      prize_name: '耳机',
      show_sort: 0
    }, {
      prize_id: 2,
      prize_lucky_img: '../../image/index.png',
      prize_name: '手机',
      show_sort: 1
    }, {
      prize_id: 3,
      prize_lucky_img: '../../image/shop.png',
      prize_name: '箱包',
      show_sort: 2
    }, {
      prize_id: 4,
      prize_lucky_img: '../../image/index.png',
      prize_name: '面条',
      show_sort: 3
    }, {
      prize_id: 5,
      prize_lucky_img: '../../image/collect.png',
      prize_name: '鸡腿',
      show_sort: 4
    }, {
      prize_id: 6,
      prize_lucky_img: '../../image/shop.png',
      prize_name: '咸鱼',
      show_sort: 5
    }, {
      prize_id: 3,
      prize_lucky_img: '../../image/collect.png',
      prize_name: '米饭',
      show_sort: 6
    }, {
      prize_id: 3,
      prize_lucky_img: '../../image/index.png',
      prize_name: '猪蹄',
      show_sort: 7
    }],
    last_index: 0, //上一回滚动的位置
    amplification_index: 0, //轮盘的当前滚动位置
    roll_flag: true, //是否允许滚动
    max_number: 8, //轮盘的全部数量
    speed: 300, //速度，速度值越大，则越慢 初始化为300
    finalindex: 6, //最终的奖励距离当前的位置！不是最后的几等奖！
    myInterval: "", //定时器
    max_speed: 40, //滚盘的最大速度
    minturns: 8, //最小的圈数为2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 立即抽奖
     */
    switchRoulette() {
      let that = this;
      //初始化步数
      that.data.runs_now = 0;
      //当前可以点击的状态下
      if (that.data.roll_flag) {
        that.data.roll_flag = false;
        //启动滚盘，注，若是最终后台无返回就不好意思里
        that.rolling();
      }
    },
    //滚动轮盘的动画效果
    rolling: function(amplification_index) {
      var that = this;
      this.data.myInterval = setTimeout(function() {
        that.rolling();
      }, this.data.speed);
      this.data.runs_now++; //已经跑步数加一
      this.data.amplification_index++; //当前的加一
      //获取总步数，接口延迟问题，所以最后还是设置成1s以上\
      var count_num = this.data.minturns * this.data.max_number + this.data.finalindex - this.data.last_index;
      console.log(this.data.amplification_index)
      //上升期间
      if (this.data.runs_now <= (count_num / 3) * 2) {
        this.data.speed -= 30; //加速
        if (this.data.speed <= this.data.max_speed) {
          this.data.speed = this.data.max_speed; //最高速度为40；
        }
      }
      //抽奖结束
      else if (this.data.runs_now >= count_num) {
        clearInterval(this.data.myInterval);
        this.data.roll_flag = true;
      }
      //下降期间
      else if (count_num - this.data.runs_now <= 10) {
        this.data.speed += 20;
      }
      //缓冲区间
      else {
        this.data.speed += 10;
        if (this.data.speed >= 100) {
          this.data.speed = 100; //最低速度为100；
        }
      }
      if (this.data.amplification_index > this.data.max_number) { //判定！是否大于最大数
        this.data.amplification_index = 0;
      }
      this.setData(this.data);

    },

    /**
     * 切换领取记录
     */
    switchRecord(){
      this.triggerEvent('switchRecord');
    }
  }
})