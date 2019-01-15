var dom = document.getElementById("twoL");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    myChart.resize();
})


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position:'top',
         min:0,
        max:300,
        interval:50,
         axisTick: {
                show: false
            },
        splitLine: { //网格线
            show: false
        },
         axisLine:{
                lineStyle:{
                    color:'#999',
                    opacity:'0.5'
                }
            },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category', 
        
        axisTick: {
            show: false
        },
         axisLine:{
            lineStyle:{
                color:'#999',
                opacity:'0.5'
            }
        },
        data: ['茶几','床头柜','斗柜','大床','电视柜']
    },
    series: [
        {
            type: 'bar',
            itemStyle: {
            normal: {
                shadowBlur: 30,
                shadowColor: 'rgba(0,0,0,0.4)',
                    shadowOffsetX: -5,
                    shadowOffsetY: 5,
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
              
                // 定制显示（按顺序）
                color: function(params) { 
                    var colorList = ['#be222a','#b1bf33','#f0c40f','#e67b25','#27727b']; 
                    return colorList[params.dataIndex] 
                }
            },
        },
            data: [260, 210, 190, 170, 170]
        }
    ]
};


if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
