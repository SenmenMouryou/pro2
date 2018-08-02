<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
            访问地址：<a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <div class="content-title">基础图表</div>
        <div class="echarts">
            <IEcharts :option="line" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="bar" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie_radius" ></IEcharts>
        </div>
        <div class="content-title">混合图表</div>
        <div class="mix-echarts">
            <IEcharts :option="mix" ></IEcharts>
        </div>
        <v-schart canvasId="canvas" width="500" height="400" :data="data" type="bar"></v-schart>
    </div>
</template>

<script>
    // import IEcharts from 'vue-echarts-v3';
    import vSchart from 'vue-schart';
    import IEcharts from 'vue-echarts-v3/src/lite.vue';

    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/title';
    export default {
        components: {
            IEcharts,vSchart
        },
        data: () => ({
            data:[
            {defaultName:'2012',value:1141},
            {defaultName:'2013',value:1499},
            {defaultName:'2014',value:2260},
            {defaultName:'2015',value:1170},
            {defaultName:'2016',value:970},
            {defaultName:'2017',value:1450}
        ],
            line: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '曲线图'
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis:{},
                series: [
                    {
                        defaultName: "销量",
                        type: "line",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '柱状图'
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis:{},
                series: [
                    {
                        defaultName: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            pie: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: '饼状图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
                },
                series : [
                    {
                        defaultName: '销量',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, defaultName:'衬衫'},
                            {value:310, defaultName:'羊毛衫'},
                            {value:234, defaultName:'雪纺衫'},
                            {value:135, defaultName:'裤子'},
                            {value:548, defaultName:'高跟鞋'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            pie_radius:{
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: '环形图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
                },
                series : [
                    {
                        defaultName: '销量',
                        type: 'pie',
                        radius : ['40%','60%'],
                        data:[
                            {value:335, defaultName:'衬衫'},
                            {value:310, defaultName:'羊毛衫'},
                            {value:234, defaultName:'雪纺衫'},
                            {value:135, defaultName:'裤子'},
                            {value:548, defaultName:'高跟鞋'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            mix:{
                    color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                    legend: {
                        data:['步步高','小天才','imoo']
                    },
                    xAxis: {
                        data: ['周一','周二','周三','周四','周五','周末']
                    },
                    yAxis:{},
                    series: [
                        {
                            defaultName: "步步高",
                            type: "line",
                            data: [15, 20, 26, 30, 40, 27]
                        },
                        {
                            defaultName: "小天才",
                            type: "bar",
                            data: [5, 30, 36, 10, 34, 20]
                        },
                        {
                            defaultName: "imoo",
                            type: "bar",
                            data: [35, 40, 30, 50, 60, 40]
                        }
                    ]
                }
        })
    }
</script>

<style scoped>
    .echarts {
        float: left;
        width: 500px;
        height: 400px;
    }
    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .mix-echarts{
        width:900px;
        height:600px;
    }
</style>
