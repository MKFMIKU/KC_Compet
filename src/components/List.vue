<template>
    <div class="compets">
      <div class="show">


       <div class="item" v-for="item in list">
         <el-card :body-style="{ padding: '0px', width: '240px' }">
           <div style="padding: 14px;">
             <span>{{ item.name }}</span>
             <div class="bottom clearfix">
               <time class="time">{{ item.date }}</time>
               <el-button type="text" class="button" @click="go(item._id)">进入查看</el-button>
             </div>
           </div>
         </el-card>
       </div>

      </div>
    </div>
</template>
<style lang="scss">
  .compets{
    width: 100%;
    height: 100%;
    background: url('../assets/random.jpg');
    box-sizing: border-box;
    padding-top: 2rem;
    .show{
      width: 960px;
      margin: 0 auto;
      display: flex;
      padding: 2rem;
      box-sizing: border-box;
      justify-content: space-between;
      flex-flow: row-reverse;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: rgba(240, 248, 255, 0.58);
      @media screen and (max-width: 640px) {
        width: 100%;
        text-align: center;
        display: block;
      }
      .item{
        display: flex;
        margin: 1rem;
        .time {
          font-size: 13px;
          color: #999;
        }
        .bottom {
          margin-top: 13px;
          line-height: 12px;
        }
        .button {
          padding: 0;
          float: right;
        }
        .clearfix:before,
        .clearfix:after {
          display: table;
          content: "";
        }

        .clearfix:after {
          clear: both
        }
      }
    }
  }

</style>
<script>
export default{
  data () {
    return {
      list: []
    }
  },
  methods: {
    go: function (index) {
      this.$router.push({path: '/compet', query: { id: index }})
    }
  },
  mounted: function () {
    this.$http.get('/compet').then((res) => {
      this.list = res.body.compets
    })
  }
}
</script>
