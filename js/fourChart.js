var dom = document.getElementById("rightChart");
var myChart = echarts.init(dom);
var app = {};
option = null;

var dataCount = 5e5;
var data = generateData(dataCount);

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:12
        },
    data:['行业一','行业二','行业三','行业四','行业五']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis :
        {
            type : 'category',
            boundaryGap : false,
            axisTick: {
                show: false
            },
            axisLine:{
                show:false
                
            }, 
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    opacity:'0.5'
                }
            },
            data : ['周一','周二','周三','周四','周五','周六','周日']
        },
    yAxis :
        {
            type : 'value',
            axisLine:{
                show:false,
                    lineStyle:{
                        color:'#fff',
                    }
            },
        splitLine: {lineStyle:{type:'solid',
            color:'#fff'
        }}
        },
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#fff'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
function generateData(count) {
    var baseValue = Math.random() * 1000;
    var time = +new Date(2011, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        );
    }

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 1000;
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}