<template>
    <div class="header">
        <img src="../../assets/images_logo.png" class="logo">
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{nickName}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="isLogin" command="loginout">退出</el-dropdown-item>
                    <el-dropdown-item v-else command="login">登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                defaultName: '登录'
            }
        },
        computed:{
            nickName(){
                let nickName = this.getCookie("nickName");
                console.log("cookie get\n"
                    +"nickName:"+this.getCookie("nickName"));

                return nickName ? nickName : this.defaultName;
            },
            isLogin(){
                let isLogin = this.getCookie("nickName");
                return !!isLogin;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'login'){
                    this.$router.push('/login');
                }else if(command == 'loginout'){
                    this.setCookie('nickName','',1);
                    console.log("cookie reset!\n");

                    this.setCookie('id','',1);
                    console.log("cookie reset!\n");

                    this.setCookie('accessToken','',1);
                    console.log("cookie reset!\n");

                    console.log("log out! "+this.getCookie("isLogin"));
                    location.reload();
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }

    .header .logo{
        margin-left: 25px;
        margin-top: 15px;
    }

    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
