var dom = document.getElementById("threeL");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    myChart.resize();
})
option = {
    tooltip : {
        trigger: 'axis',
         textStyle:{
                align:'center'
             },
        axisPointer: {
            type: 'none'
           
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
            data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
            minInterval:1,
             axisTick: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    opacity:'0.4',
                    width:3
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:150,
            interval:30,
             axisTick: {
                show: false
            },
            splitLine: { //网格线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    opacity:'0.4'
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
            data:[90,50,39,50,120,82,80,89,92,80,102,77]
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
                    color: '#5ebefc',
                    lineStyle:{
                    color: '#5ebefc',
                    width:2.5
                    }
                }
            },
            data:[70, 50, 50, 87, 90, 80, 70,77,86,94,96,99]
        },
        {
            name:'5月',
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
                    color: '#2ef7f3',
                    lineStyle:{
                    color: '#2ef7f3',
                    width:2.5
                    }
                }
            },
            data:[100, 112, 80,132,60,70,90,131,121,102,95,105]
        }
    ]
};

if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
