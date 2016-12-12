<template>
    <div class="admin">
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">数据报表</el-menu-item>
        <el-submenu index="2">
          <template slot="title">比赛事项</template>
          <el-menu-item index="2-1"><router-link to="/admin/form">添加比赛</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="/admin/list">修改比赛</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="3">比赛列表</el-menu-item>
      </el-menu>

      <div class="board">
        <router-view></router-view>
      </div>
    </div>
</template>
<style lang="scss">
  .admin{
    width: 100%;
    height: 100%;
    a{
      text-decoration: none;
      color: #222;
    }
    .board{
      width: 720px;
      margin: 2rem auto;
    }
  }
</style>
<script>
</script>
