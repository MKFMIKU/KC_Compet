<template>
    <div class="compet">
      <h1>{{ compet.name }}</h1>
      <p class="time"> 举办时间: {{ compet.date }}</p>
      <div class="left">
        <p>{{ compet.profile }}</p>
      </div>
      <div class="right">
        <p>报名开始: {{ compet.beginSign }}</p>
        <p>报名结束: {{ compet.endSign }}</p>
      </div>
      <div id="uyan_frame"></div>
    </div>
</template>
<style lang="scss">
  .compet{
    width: 100%;
    height: 100%;
    h1{
      line-height: 320px;
      color: #fff;
      height: 320px;
      margin: 0 auto;
      background: url("../assets/bg.jpg")center no-repeat;
      background-size: cover;
    }
    .time{
      line-height: 64px;
      margin: 0;
      height: 64px;
      width: 1000%;
      border-bottom: 1px solid #e5e5e5;
      font-size: 1rem;
      color: #333;
      text-align: left;
      padding-left: 2rem;
    }
    .left{
      margin: 4rem 0 100px 4rem;
      width: 640px;
      padding: 40px;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(153, 153, 153, 0.37);
      text-align: left;
      display: inline-block;
      vertical-align: top;
      @media screen and (max-width: 540px) {
        width: 100%;
        display: block;
        margin: 0;
        margin-top: 1rem;
      }
    }
    .right{
      display: inline-block;
      margin: 4rem 0 0 4rem;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(153, 153, 153, 0.37);
      width: 270px;
      text-align: left;
      @media screen and (max-width: 540px) {
        width: 100%;
        display: block;
        margin: 0;
        margin-top: 1rem;
      }
    }
  }
  #uyan_frame{
    width: 960px;
    margin: 0 auto;
    @media screen and (max-width: 540px) {
      width: 100%;
      margin: 2rem 1rem;
    }
  }
</style>
<script>
  export default{
    data () {
      return {
        compet: {}
      }
    },
    mounted: function () {
      this.$http.get('/compet/' + this.$route.query.id).then((res) => {
        this.compet = res.body.compet
      })
    }
  }
</script>
