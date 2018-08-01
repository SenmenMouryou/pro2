<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-plus"></i> 注册</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">

                <el-form-item prop="nick_name" label="用户名">
                    <el-input v-model="form.nick_name" placeholder="(6-16位)"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="邮箱">
                    <el-input v-model="form.email" ></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input type="password" v-model="form.password" placeholder="(6-16位)"></el-input>
                </el-form-item>

                <el-form-item prop="passwordAgain" label="重复密码">
                    <el-input type="password" v-model="passwordAgain"></el-input>
                </el-form-item>

                <el-form-item prop="isMember" label="会员注册">
                    <el-switch on-text="" off-text="" v-model="form.isMember"></el-switch>
                </el-form-item>

                <el-form-item prop="name" label="姓名" v-if="form.isMember">
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item prop="student_id" label="学号" v-if="form.isMember">
                    <el-input v-model="form.student_id" placeholder="(13位学生证号)"></el-input>
                </el-form-item>

                <el-form-item prop="sex" label="性别" v-if="form.isMember">
                    <el-radio-group v-model="form.sex">
                        <el-radio label=1>男</el-radio>
                        <el-radio label=0>女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="验证码" prop="checkcode">
                    <div>
                        <el-col :span="12">
                            <el-input v-model="form.checkcode" placeholder="请输入"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <img :src="src">
                        </el-col>

                    </div>
                 </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                    <el-button @click="reset('form')">重置</el-button>
                </el-form-item>


            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            // 密码验证
            let validatorPassAgain = (rule, value, callback) => {
                if (this.form.password!=this.passwordAgain) {
                    callback(new Error('密码不一致'))
                } else {
                    callback()
                }
            }
            return {
                form: {
                    nick_name:'',
                    email:'',
                    password:'',
                    isMember:false,
                    student_id:'',
                    name:'',
                    sex:'1',
                    checkcode:''
                },
                passwordAgain:'',
                url:'/api/user/register',
                src: 'http://localhost:8888/user/authCode?a=11',
                rules: {
                    nick_name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min:6, max:16, message: '用户名必须在6-16位内', trigger: 'blur'}
                    ],
                    email: [
                        { required: true, message: '请输入登录邮箱', trigger: 'blur' },
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ,message: '请输入正确的邮箱地址', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min:6, max:16, message: '密码必须在6-16位内', trigger: 'blur'}
                    ],
                    passwordAgain: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                        { validator: validatorPassAgain, message: '前后输入不一致', trigger:'blur'}
                    ],
                    name:[
                        { required: true, message: '请输入姓名', trigger: 'blur'},
                        { pattern:/^[\u4e00-\u9fa5]{0,}$/, message: '请输入真实姓名',trigger:'blur' }

                    ],
                    student_id:[
                        { required: true, message: '请输入学号', trigger: 'blur'},
                        { pattern: /^\d{13}$/, message: '请输入真实学号',trigger:'blur' }
                    ],
                    checkcode:[
                        { required: true, message: '请输入验证码', trigger:'blur'}
                    ]



                }
            }
        },
        methods: {
            reset(formName){
                const self = this;
                self.$refs[formName].resetFields();
            },
            onSubmit(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.putDevice(this.form);
                        console.log("form data submit");

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            putDevice(form) {
                this.$http.post(this.url, form).then((form) => form.json().then((data) => {
                    if (data.code == 200) {
                        this.$message.success('注册成功');
                    }else {
                        this.$message.error(data.data);
                        this.$message.error('注册失败');
                    }
                }), err => this.$message.error('添加出错'));
            }
        }
    }
</script>
