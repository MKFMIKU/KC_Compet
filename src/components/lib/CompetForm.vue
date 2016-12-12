<template>
    <div>
      <el-form ref="compet" :model="compet" label-width="80px">
        <el-form-item label="比赛名称">
          <el-input v-model="compet.name"></el-input>
        </el-form-item>
        <el-form-item label="举办学校">
          <el-input v-model="compet.school"></el-input>
        </el-form-item>
        <el-form-item label="报名时间">
          <el-col :span="11">
            <el-date-picker type="date" format="yyyy-MM-dd" placeholder="选择日期" v-model="compet.beginSign" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" format="yyyy-MM-dd" placeholder="选择日期" v-model="compet.endSign" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="进行时间">
          <el-date-picker type="date" format="yyyy-MM-dd" placeholder="选择日期" v-model="compet.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="比赛描述">
          <el-input type="textarea" v-model="compet.profile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<style>

</style>
<script>
  export default {
    data () {
      return {
        compet: {
          name: '',
          school: '',
          beginSign: '',
          endSign: '',
          date: '',
          profile: ''
        }
      }
    },
    methods: {
      onSubmit () {
        function timeFormat (time) {
          return time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate()
        }
        console.log(timeFormat(this.compet.endSign))
        var data = {
          name: this.compet.name,
          school: this.compet.school,
          beginSign: timeFormat(this.compet.beginSign),
          endSign: timeFormat(this.compet.endSign),
          date: timeFormat(this.compet.date),
          profile: this.compet.profile,
          status: true
        }
        this.$http.post('/compet', data, {
          emulateJSON: true,
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          if (response.body.code === 200) this.$message('添加成功')
        }, (response) => {
          this.$message.error('添加失败')
        })
      }
    }
  }
</script>
