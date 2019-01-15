var dom = document.getElementById("oneP");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    myChart.resize();
})
option = {
    title: {
        text: '2018年度3月，4月销售额',
        textStyle:{
        color:'#fff',
        fontSize:'.18rem',
        fontWeight:'bold'
        }
    },
    tooltip : {
        trigger: 'axis',
         textStyle:{
                align:'center'
             },
        axisPointer: {
            type: 'none'
           
        }
    },
    legend: {
        textStyle:{
            color:'#fff'
        },
        data:['3月','4月']
    },
    toolbox: {
        orient: 'vertical', //垂直显示(horizontal为水平显示)
        color:'#fff',
        iconStyle:{
            normal:{
              color:'white',//设置颜色
            }
        },
        feature: {
            saveAsImage: {},
             magicType: {//动态类型切换
                        type: ['line','bar','stack','tiled']
                    }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'12%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
            minInterval:1,
             axisTick: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:3500,
            interval:500,
             axisTick: {
                show: false
            },
            splitLine: { //网格线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#999'
                }
            }
        }
    ],
    series : [
        {
            name:'3月',
            type:'line', 
            symbol:'circle',
            symbolSize: 10,
            backgroundColor: '036bc8',
        labelLine: {
            normal: {
            show: true
            }
            },
             itemStyle: {
                normal: {
                    color: '#036bc8',
                    lineStyle:{
                    color: '#036bc8',
                    width:2.5
                    }
                }
            },
            data:[1200,1400,1000,1200,3000,2300,1300,1700,1400,1200,3000,2300,2400,2100,2800,3100,3000,2800,2700,2900]
        },
        {
            name:'4月',
            type:'line',
            symbol:'circle',
             symbolSize: 10,
            labelLine: {
            normal: {
            show: false
            }
            },
             itemStyle: {
                normal: {
                    color: '#fff',
                    lineStyle:{
                    color: '#fff',
                    width:2.5
                    }
                }
            },
            data:[2000, 1200, 3000, 2000, 1700, 3000, 2000,1800,2000,1900,3000,2000,2500,2200,2600,2700,2900,3000,3200,3100]
        }
    ]
};

if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
