<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
  export default {
    name: 'App',
    data(){
      return {
        username: 'gh_702dbf2432e6', // gh_ 开头的原始小程序ID
        path: 'pages/index/index.html', // 一定要以 .html 结尾
      }
    },
    mounted(){
      // this.getKey();
    },
    methods:{
      getKey(){
        let that = this;
        let promise = {
          url:location.href.split('#')[0]
        }
        that.axios.get('https://api.lehuitech.com.cn/WXAuthorization/jsapi',promise)
        .then(function (res) {
            console.log(res);
            if(res.status == 200 ){
                that.initIMg(res.data);
            }else{
                that.$message({
                message: '服务异常请稍后重试！',
                type: 'warning'
                });
            }
        });
      },
      initIMg(result){
        console.log(result.appId);
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: result.appId,// 必填，公众号的唯一标识
            timestamp: result.timestamp,  // 必填，生成签名的时间戳
            nonceStr: result.nonceStr, // 必填，生成签名的随机串
            signature: result.signature,// 必填，签名
            jsApiList:  ['chooseImage','previewImage'], // 必填，需要使用的JS接口列表
            openTagList: ['wx-open-launch-weapp']
        });
        wx.ready(function () {
          console.log('res44444444');
        })
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名
          console.log(res)
        });
      },
    },
  }
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background: #fbfdfc;
  margin: 0;
  padding: 0;
}
body,h1,h2,h3,h4,h5,h6,div,dd,dt,dl,form,kbd,table,ul,li,marquee,hr,blockquote,ol,pre,fieldset,legend,button,input,textarea,th,td{font-size:12px; margin:0; padding:0; font-family: "微软雅黑",Arial, "宋体", Tahoma, Verdana,  Helvetica, sans-serif;}
address,cite,dfn,em,var{font-style:normal;}
button,input,select,textarea{font-size:100%; cursor:pointer}
input{ cursor:pointer}
table{border-collapse:collapse;border-spacing:0;}
ul,ol{list-style:none;}
img{border:0;width: 100%;object-fit: fill;}
ul{list-style:none;}
.clear{ clear:both;}
a{text-decoration: none; color: #666666; }
a:hover{ color:#000; text-decoration:none}
input[type="submit"],input[type="reset"],input[type="button"],input[type="text"], button { -webkit-appearance: none;border-radius: 0; } 

.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */  
}
input::-webkit-input-placeholder { 
/* WebKit browsers */ 
  color: #adadad; 
} 
input:-moz-placeholder { 
/* Mozilla Firefox 4 to 18 */ 
  color: #adadad; 
} 
input::-moz-placeholder { 
/* Mozilla Firefox 19+ */ 
  color: #adadad; 
} 
input:-ms-input-placeholder { 
/* Internet Explorer 10+ */ 
  color: #adadad; 
}

</style>
