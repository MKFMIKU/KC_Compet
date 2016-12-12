<template>
  <div>
    <el-table
      :data="list"
      border
      stripe
      style="width: 100%">
      <el-table-column
        inline-template
        prop="date"
        label="日期">
        <p>{{ row.date }}</p>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字">
      </el-table-column>
        <el-table-column
          inline-template
          prop="url"
          label="链接">
          <p>http://kf.kffuck.com/{{row._id}}</p>
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
            type="danger"
            @click="deletCompet($index)">
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
      list: []
    }
  },
  methods: {
    deletCompet: function (index) {
      this.$http.get('/remove/' + this.list[index]._id).then((res) => {
        if (res.body.code === 200) {
          this.$message('删除成功')
          this.list.splice(index, 1)
        }
      })
    }
  },
  mounted: function () {
    this.$http.get('/compet').then((res) => {
      this.list = res.body.compets
    })
  }
}
</script>
