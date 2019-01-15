var dom = document.getElementById("twoR");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    myChart.resize();
})


option = {
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [30,'70%'],
            center : ['55%', '50%'],
            roseType : 'radius',
            color: [ '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'],
                shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
            data:[
                {value:12, name:'茶几:26%'},
                {value:11, name:'床头柜:21%'},
                {value:10, name:'斗柜:19%'},
                {value:9, name:'大床:17%'},
                {value:9, name:'电视柜:17%'}
            ]
        }
    ]
};



if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
