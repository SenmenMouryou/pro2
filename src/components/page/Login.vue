<template>
    <div >
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-plus"></i> 登录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-title">isdc社团欢迎你</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                <el-form-item prop="email" label="邮箱">
                    <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item prop="authcode" label="验证码">
                    <div>
                        <el-col :span="11">
                            <el-input placeholder="验证码" v-model="ruleForm.authcode" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                        </el-col>
                        <el-col :span="2"><img src=""/></el-col>
                        <el-col :span="11">
                            <img :src.sync="authSrc" @click="updateAuthCode()">
                        </el-col>

                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="login-btn">
                        <el-col :span="11">
                            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        </el-col>
                        <el-col :span="2"> <img src=""/></el-col>
                        <el-col :span="11">
                            <el-button type="primary" @click="putDialogFormVisible=true">注册</el-button>
                        </el-col>
                    </div>
                </el-form-item>
            </el-form>
            <el-dialog id="putDialog" title="注册" :visible.sync="putDialogFormVisible">
                <sign-up></sign-up>
            </el-dialog>

        </div>
    </div>
</template>

<script>
    import SignUp from "./SignUp";
    export default {
        components: {SignUp},
        data: function(){
            return {
                ruleForm: {
                    email: '',
                    password: '',
                    authcode: ''
                },
                getform: {},
                url:'',
                putDialogFormVisible:false,
                authSrc:'http://localhost:8888/user/authCode?a=11',
                rules: {
                    email: [
                        { required: true, message: '请输入登录邮箱', trigger: 'blur' },
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ,message: '请输入正确的邮箱地址', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    authcode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.updateDevice(formName);

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            updateDevice(form) {
                // this.HEADER.userInfo.email = this.ruleForm.email;
                this.$http.post(this.url, form).then((form) => form.json().then((data) => {
                    if (data.code == 200) {
                        this.getform = data.data;
                        console.log("data get:\n"+
                            "form:"+this.getform);

                        this.setCookie('nickName',this.getform.nickName,1);
                        console.log("cookie set!\n"
                            +"nickName:"+this.getForm.nickName);
                        this.setCookie('id',this.getform.id,1);
                        console.log("cookie set!\n"
                            +"id:"+this.getForm.id);
                        this.setCookie('accessToken',this.getform.accessToken,1);
                        console.log("cookie set!\n"
                            +"accessToken:"+this.getForm.accessToken);
                        location.reload();
                        self.$router.push('/readme');
                        this.$message.success('登录成功');
                    }else {
                        this.$message.error(data.data);
                    }
                }), err => this.$message.error('添加出错'));
            },
            updateAuthCode(){
                this.authSrc='http://localhost:8888/user/authCode?a='+Math.random()*1000000;
            }

        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        margin-top: 40px;
        top: 5%;
        text-align: left;
        font-size:30px;
        color: #000;

    }
    .ms-login{
        position: absolute;
        top: 20%;
        width:400px;
        height:160px;
        margin:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
