<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="专题名称">
        <el-col :span="12">
          <el-input v-model="form.topic_title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="背景图片">
         <el-upload
          class="upload-demo"
          :on-success="backgroundImg"
          :on-error="backgroundImg"
          name="pic"
          drag
          :action="base"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="专题时间">
       <el-date-picker
      v-model="form.topicTime"
      type="datetimerange"
      range-separator="至"
      format="yyyy-MM-dd"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item label="马上生效">
        <el-switch v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item label="专题封面">
        <el-upload
          class="upload-demo"
          :on-success="handleImg"
          :on-error="handleImg"
          name="pic"
          drag
          :action="base"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动"></el-checkbox>
          <el-checkbox label="商家专题"></el-checkbox>
          <el-checkbox label="多品类专题"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"></el-checkbox>
          <el-checkbox label="其他"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="专题简介">
        <el-input type="textarea" rows="8" v-model="form.topic_desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
import { createdit } from "@/api/topic";

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
      list: null,
      listLoading: true,
      pic: "",
      showSuccess:false,
      base:process.env.BASE_API+'upload',
      form: {
        topic_title: "",
        topic_desc:"",
        status: 0,
        type: [],
        topic_img: "",
        background_img:"",
        topicTime:[]
      },
      finish:[]
    };
  },

  created() {},
  methods: {
    onSubmit() {
      
      let self = this;  
      this.form.topicTime[0] = this.moment(this.form.topicTime[0]).format("YYYY-MM-DD");
      this.form.topicTime[1] = this.moment(this.form.topicTime[1]).format("YYYY-MM-DD");
      
      createdit(this.form).then(response=>{
        console.log(response.code);
      }).catch((err)=>{
        console.log(err);
      })
    },
    handleImg(res,file,fileList) {
      let self = this;
      if(res.code == 0) {
        self.$message.error(res.msg);
      }
      self.form.topic_img = res.data.url;
    },
   backgroundImg(res,file,fileList) {
      let self = this;
      if(res.code == 0) {
        self.$message.error(res.msg);
      }
      self.form.background_img = res.data.url;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
};
</script>
<style scoped>
.line {
  text-align: center;
}
</style>