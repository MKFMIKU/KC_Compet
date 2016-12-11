<template>
    <div class="vue-footer">
      <div class="logo">
        <img src="../assets/mi.png">
      </div>
      <div class="info">
        <div class="title">
          <h1>CLF Studio</h1>
          <h2>江西师范大学计算机学院</h2>
        </div>
        <div class="contact">
          <p>13065123348</p>
          <a href="http://www.conglinfeng.com/">http://www.conglinfeng.com/</a>
          <a href="mailto:mikumkf@gmail.com">mikumkf@gmail.com</a>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
  .vue-footer{
    height: 64px;
    width: 100%;
    display: block;
    background-color: #F2F4F6;
    position: relative;
    text-align: left;
    box-sizing: border-box;
    @media screen and (min-width: 800px) {
      padding: 0 16%;
    }
    .logo{
      height: 100%;
      float: left;
      img{
        height: 32px;
        margin-top: 16px;
      }
    }
    .info{
      height: 100%;
      float: right;
      .title{
        margin-top: 0.4rem;
        display: inline-block;
        vertical-align: top;
        h1{
          font-size: 1.2rem;
          margin: 0;
        }
        h2{
          margin: 0;
          font-size: 1rem;
        }
      }
      .contact{
        display: inline-block;
        margin-left: 1rem;
        margin-top: 0.4rem;
        p{
          font-size: 0.8rem;
          color: #999;
          margin: 0;
          cursor: pointer;
        }
        a{
          font-size: 0.8rem;
          display: block;
          text-decoration: none;
          color: #999;
        }
      }
    }
  }
</style>
<script>
</script>
