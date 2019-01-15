var dom = document.getElementById("oneChart");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    mySalse.resize();
})


var labelRight = {
    normal: {
        position: 'right'
    }
};
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top:'5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'value',
        position: 'top',
        axisTick:{
                show:false
        },
         axisLine:{
                    show:false,
                    lineStyle:{
                        color:'#fff',
                    }
            },
        splitLine: {lineStyle:{type:'dashed',
            color:'#fff'
        }},
    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false
        },
        data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series : [
        {
            name:'生活费',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                }
            },
            data:[
                {value: -0.07, label: labelRight},
                {value: -0.09, label: labelRight},
                0.2, 0.44,
                {value: -0.23, label: labelRight},
                0.08,
                {value: -0.17, label: labelRight},
                0.47,
                {value: -0.36, label: labelRight},
                0.18
            ]
        }
    ]
};




if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
