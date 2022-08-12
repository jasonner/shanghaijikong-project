<template>
    <div class="noData-Page">
        <div class="PC-page" v-if="!isH5">
            <div class="banner">
                <img src="@/assets/img/noDataPage/banner-PC.png" alt="" srcset="">
            </div>
            <div class="content-text">
                <img src="@/assets/img/noDataPage/content-pc-text.png" alt="" srcset="">
            </div>
        </div>
        <div class="H5-page" v-if="isH5">
            <div class="banner">
                <img src="@/assets/img/noDataPage/banner.png" alt="" srcset="">
            </div>
            <div class="content-text">
                <img src="@/assets/img/noDataPage/content-text.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isH5:true
        }
    },
    mounted(){
        this.isH5 = this._isMobile();
        console.log(this.isH5)
    },
    methods:{
        _isMobile(){
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
    }
}
</script>
<style scoped>
    .noData-Page{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .H5-page{
        width: 100%;
    }
    .H5-page .banner{
        width: 100%;
    }   
    .H5-page .banner img{
        width: 100%;
    }
    .H5-page .content-text{
        width: 100%;
        margin-top: 140px;
    }
    .PC-page{
        width: 100%;
    }
    .content-text{
        width: 35.625%;
        margin: 0 auto;
        margin-top: 3vw;
    }
</style>