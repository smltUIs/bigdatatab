var dom = document.getElementById("bodyleft");
var myChart = echarts.init(dom);

option = {
    grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:'3%',
    containLabel: true
    },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        textStyle:{
            color:'#fff'
        },
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}