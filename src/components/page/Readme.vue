<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 社团介绍</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <h3>社团介绍</h3>
            <article>
                <h2>社团标识</h2>

                <span>
                    <img  src="static/img/iogo1.png"><br>

                </span>


                <h2>社团概况</h2>
                <p>四川大学信息安全与网络攻防协会，简称ISDC(Information Security and Network Attack and Defense Community)，隶属于四川大学软件学院，是四川大学学术性社团。协会成立于2013年9月，现有指导老师2名，在编会员40名，会长1名，副会长5名。协会覆盖面主要为软件学院大一至大三的学生，主要方向为网络渗透、攻防对抗、信息安全产品开发、逆向等。</p>
                <h2>社团体系</h2>
                <p> ISDC的社团架构是开放的，不设立干事，所有资料和活动向所有人开放，但只对在编会员进行监督。这样既保证了活动的覆盖面不只限于会员，也保证了不会因为人数过多而导致活动质量下降。</p>
                <h2>活动简介</h2>
                <p>ISDC针对不同年级开展不同方面的社团活动。针对大一，活动重心将会侧重于专业基础能力的培养，活动主要涉及C语言、Web基础培训等内容；针对大二，活动重心侧重于在已有的专业知识基础上，进行信息安全产品开发指导和网络攻防技术学习培训。活动在固定时间固定教室举行，保证了活动的质量。在活动后，我们将会通过网上训练平台进行巩固训练。除了学术型活动，我们也少不了素质类活动。组织聚餐，组织玩耍，都是我们需要带给会员们的。</p>
                <h2>对外服务</h2>
                <p>ISDC一直秉承的是开放的宗旨，我们也尽力为大家提供例如每日安全新闻摘编、信息安全比赛资料整理、安全图书馆等服务。希望能够帮助喜爱信息安全的同学，以此一道和社团发展！</p>
                <h2>所获奖项</h2>
                <p>ISDC从建立以来，社团成员在全国比赛和国家级、省级项目中均有所斩获:<br>

                    · 第四届中国大学生软件服务外包创新创业大赛 三等奖<br>

                    · 第五届中国大学生软件服务外包创新创业大赛 三等奖<br>

                    · 蓝桥杯全国软件专业人才设计大赛 多项国家级省级奖项<br>

                    · 全国大学生信息安全技术大赛 三等奖<br>

                    · 360应用开发大赛 优胜奖<br>

                    · 四川省大学生网络信息安全大赛三等奖<br>

                    · 基于GPU与声速优化算法的超声成像仿真系统 国家级<br>

                    · 基于树莓派的盲人阅读系统 国家级<br>

                    · 基于Wi-Fi的高精度室内定位导航系统 省级<br>

                    · "Pener"——基于Android的益智游戏 省级<br>

                    · 基于用户兴趣的微博热点话题挖掘系统建模与研究 省级<br>

                    · 20多项校级项目<br>
                </p>
            </article>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }

    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }

</style>
