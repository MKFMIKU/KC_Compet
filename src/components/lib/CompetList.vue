<template>
  <div>
    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
        width="180">
      </el-table-column>
        <el-table-column
          prop="url"
          label="链接">
        </el-table-column>
        <el-table-column
          inline-template
          prop="status"
          label="状态">
          <el-switch
            v-model="row.status"
            on-text=""
            off-text="">
          </el-switch>
        </el-table-column>
        <el-table-column
          inline-template
          label="操作">
          <el-button
            size="small"
            type="danger">
            删除
          </el-button>
        </el-table-column>
    </el-table>
  </div>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      list: [{'time': '20161212', 'name': '江西省服务外包大赛', 'url': '12345', 'status': true}]
    }
  }
}
</script>
