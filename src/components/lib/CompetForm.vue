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
            <el-date-picker type="date" placeholder="选择日期" v-model="compet.beginSign" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="compet.endSign" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="进行时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="compet.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="比赛描述">
          <el-input type="textarea" v-model="compet.profile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
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
    }
  }
</script>
