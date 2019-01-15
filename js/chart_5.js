var dom = document.getElementById("threeR");
var mySalse = echarts.init(dom);
window.addEventListener("resize",()=>{
    myChart.resize();
})

option = {
    graphic:{
        type:'text',
        left:'center',
        top:'center',
        style:{
            text:'',
            fontSize:22,
            fill:'#3c8dbc',
            fontweight:600
        }
    },
    series: [
        {
                type: 'pie',
                center: ['45%', '25%'],
                radius: ['60%', '70%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 335,
                    name: '销售分析',
                    itemStyle: {
                        normal: {
                            color: '#FF7E45'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#ffd285',
                                fontSize: 14
        
                            }
                        }
                    }
                    
                } ,
                {
                    value: 180,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ffd285',
                            },
                            formatter: '\n销售渠道'
                        }
                    }
                
                }]
            
        },
         {
                type: 'pie',
                center: ['45%', '72%'],
                radius: ['60%', '70%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 435,
                    name: '销售分析',
                    itemStyle: {
                        normal: {
                            color: '#4834CB'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
        
                            }
                        }
                    }
                    
                } ,
                {
                    value: 100,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff',
                            },
                            formatter: '\n销售渠道'
                        }
                    }
                
                }]
            
        }
    

]
};


if (option && typeof option === "object") {
    mySalse.setOption(option, true);
}
