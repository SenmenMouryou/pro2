<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="text-shadow: 5px 5px 5px #FF0000;">
                    <i class="el-icon-edit"></i> 留言板
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            <fieldset style="height: 400px">
                <legend>
                    <img src="../../assets/image.png" height="100px">
                </legend>
                <template v-for="item in elderMessage" >
                    <marquee onmouseover=this.stop() onmouseout=this.start() >{{item.content}}</marquee>
                </template>
            </fieldset>
        </div>
        <div>留言：
            <el-input class="liuyan" style="width: 200px" v-model="content"></el-input>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                url:'/comment/lsl',
                form:{},
                content:'',
                elderMessage:[],
            }
        },
        mounted(){   //元素挂载之后立即执行
            this.getData();
        },
        methods: {
            getData(){
                let self = this;
                self.$http.get(self.url).then((res) => { res.json().then(data => self.elderMessage = data.data); });
            },
            postData(){
                this.$http.post(this.url,this.form).then((res) => (res).json().then((data) => {
                    this.$message.success('留言成功');
                    this.content='';
                    this.getData();
                }), err => this.$message.error('留言失败'));
            },
            submit(){
               if(this.content=='')
                    this.$message.error('留言不能为空');
               else{
                   this.form={
                       userID:this.userID,
                       content:this.content
                   };
                   this.postData();
               }

            }
        },
        computed:{
            userID(){
                let userID = localStorage.getItem('ms_username');
                return userID ? userID : this.defaultName;
            }
        },
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
