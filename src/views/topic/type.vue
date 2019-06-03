<template>
  <div class="app-container">
    <el-form ref="form"  label-width="80px">
      <el-form-item label="分类名称">
        <el-col :span="12">
          <el-input v-model="name"></el-input>
        </el-col>
      </el-form-item>
     
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
import { createType } from "@/api/topic";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      name:'',
      handle:'',
    };
  },

  created() {},
  methods: {
    onSubmit() { 
      let self = this;  
      createType(self.name,'create').then(response=>{
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    },
  }
};
</script>
<style scoped>
.line {
  text-align: center;
}
</style>