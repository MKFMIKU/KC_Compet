<template>
    <div class="admin">
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">数据报表</el-menu-item>
        <el-submenu index="2">
          <template slot="title">比赛事项</template>
          <el-menu-item index="2-1">添加比赛</el-menu-item>
          <el-menu-item index="2-2">修改比赛</el-menu-item>
          <el-menu-item index="2-3">结果发布</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">比赛列表</el-menu-item>
      </el-menu>

      <div class="board">
        <el-card class="box-card">
          <CompetForm></CompetForm>
        </el-card>
      </div>
    </div>
</template>
<style lang="scss">
  .admin{
    width: 100%;
    height: 100%;
  }
</style>
<script>
  import CompetForm from './lib/CompetForm.vue'

  export default {
    components: {
      CompetForm
    }
  }
</script>
