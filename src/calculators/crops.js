export const buildCropLand=(dataForAPIList)=>{
    const histogramData = []
    for(var i in dataForAPIList){
        //check value
        var i_landcultivated = dataForAPIList[i].api_landArea
        if(i_landcultivated==null||i_landcultivated<0){
            continue
        }
        histogramData.push([i_landcultivated])
    }
    return histogramData
}

export const buildCropGrown=(dataForAPIList)=>{
    var barData=[];
    var arr = [];
    for(var i=0;i<dataForAPIList.length;i++){
        for(var j=0;j<dataForAPIList[i].api_crops_all.length;j++){
            if(dataForAPIList[i].api_crops_all[j]==null){
                continue;
            }
            arr.push(dataForAPIList[i].api_crops_all[j]);
        }
    }

    var empty = [];//声明一个空数组
    for(var n=0;n<arr.length;n++){//循环arr中元素
        //判断empty数组中是否有arr数组中的第n个元素，小于0就是没有
        //if 没有，把此元素添加到empty中
        if(empty.indexOf(arr[n])<0){
            empty.push(arr[n]);//push()用来向数组的末尾添加元素
        }
    }
    arr = empty;//这里得到没有重复的约上百种种crop ，即横坐标文字

    var count_of_households = new Array(arr.length);//新建一个数组存储arr每个元素对应的数据
    for(var m=0;m<count_of_households.length;m++){//数组元素初始化为0
        count_of_households[m]=0;
    }
    for(var j=0;j<arr.length;j++){//对于每一个横坐标字符串，遍历所有household的crops_all字段，如果字段包含该字符串，则对应的count_of_households数组元素+1
        var crop_name = arr[j];
        for(var k=0;k<dataForAPIList.length;k++){
            if(dataForAPIList[k].api_crops_all.indexOf(crop_name)!==-1){
                count_of_households[j]++;
            }
        }
    }
    for(var l=0;l<arr.length;l++){
         const doc = [
            arr[l],//横坐标
            count_of_households[l],//纵坐标
         ]
         barData.push(doc)
    }
    return barData;
}

export const buildCropUsed=(dataForAPIList)=>{
    var cropName = [];
    var consumed = [];
    var sold = [];
    for(var i in dataForAPIList){
        if(dataForAPIList[i].api_consumed_sold1[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold1[0]);
        }
        if(dataForAPIList[i].api_consumed_sold2[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold2[0]);
        }
        if(dataForAPIList[i].api_consumed_sold3[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold3[0]);
        }
        if(dataForAPIList[i].api_consumed_sold4[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold4[0]);
        }
        if(dataForAPIList[i].api_consumed_sold5[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold5[0]);
        }
        if(dataForAPIList[i].api_consumed_sold6[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold6[0]);
        }
        if(dataForAPIList[i].api_consumed_sold7[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold7[0]);
        }
        if(dataForAPIList[i].api_consumed_sold8[0]!==null){
            cropName.push(dataForAPIList[i].api_consumed_sold8[0]);
        }
    }
    var empty = [];//声明一个空数组
    for(var n=0;n<cropName.length;n++){//循环arr中元素
        //判断empty数组中是否有arr数组中的第n个元素，小于0就是没有
        //if 没有，把此元素添加到empty中
        if(empty.indexOf(cropName[n])<0){
            empty.push(cropName[n]);//push()用来向数组的末尾添加元素
        }
    }
    cropName = empty;//这里得到没有重复的约上百种种crop ，即横坐标文字

    for(var i0=0;i0<cropName.length;i0++){
        consumed[i0]=0;
        sold[i0]=0;
    }
    for(var i=0;i<cropName.length;i++){
        for(var j in dataForAPIList){
            if(dataForAPIList[j].api_consumed_sold1[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold1[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold1[2];
            }
            if(dataForAPIList[j].api_consumed_sold2[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold2[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold2[2];
            }
            if(dataForAPIList[j].api_consumed_sold3[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold3[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold3[2];
            }
            if(dataForAPIList[j].api_consumed_sold4[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold4[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold4[2];
            }
            if(dataForAPIList[j].api_consumed_sold5[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold5[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold5[2];
            }
            if(dataForAPIList[j].api_consumed_sold6[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold6[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold6[2];
            }
            if(dataForAPIList[j].api_consumed_sold7[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold7[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold7[2];
            }
            if(dataForAPIList[j].api_consumed_sold8[0]===cropName[i]){
                consumed[i]= consumed[i]+dataForAPIList[j].api_consumed_sold8[1];
                sold[i] = sold[i]+dataForAPIList[j].api_consumed_sold8[2];
            }
        }
    }

    var output=[]

    for(var i1=0;i1<cropName.length;i1++){
        consumed[i1]= Number((consumed[i1]/dataForAPIList.length).toFixed(2));
        sold[i1]=Number((sold[i1]/dataForAPIList.length).toFixed(2));
        if(consumed[i1]){output.push([cropName[i1],consumed[i1],sold[i1]])}
    }
    function num(a,b){
        return a[2]-b[2];
    }
    var cha=output.sort(num);
    return cha;
}

export const buildCropYields=(dataForAPIList)=>{
    var cropName = [];
    var yields = [];
    for(var i in dataForAPIList){
        if(dataForAPIList[i].api_name_yield1[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield1[0]);
        }
        if(dataForAPIList[i].api_name_yield2[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield2[0]);
        }
        if(dataForAPIList[i].api_name_yield3[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield3[0]);
        }
        if(dataForAPIList[i].api_name_yield4[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield4[0]);
        }
        if(dataForAPIList[i].api_name_yield5[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield5[0]);
        }
        if(dataForAPIList[i].api_name_yield6[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield6[0]);
        }
        if(dataForAPIList[i].api_name_yield7[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield7[0]);
        }
        if(dataForAPIList[i].api_name_yield8[0]!=null){
            cropName.push(dataForAPIList[i].api_name_yield8[0]);
        }
    }
    var empty = [];//声明一个空数组
    for(var n=0;n<cropName.length;n++){//循环arr中元素
        //判断empty数组中是否有arr数组中的第n个元素，小于0就是没有
        //if 没有，把此元素添加到empty中
        if(empty.indexOf(cropName[n])<0){
            empty.push(cropName[n]);//push()用来向数组的末尾添加元素
        }
    }
    cropName = empty;//这里得到没有重复的约上百种种crop ，即横坐标文字

    for(var i=0;i<cropName.length;i++){
        var harvest = [];
        for(var j in dataForAPIList){
            if(cropName[i]===dataForAPIList[j].api_name_yield1[0]){
                harvest.push(dataForAPIList[j].api_name_yield1[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield2[0]){
                harvest.push(dataForAPIList[j].api_name_yield2[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield3[0]){
                harvest.push(dataForAPIList[j].api_name_yield3[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield4[0]){
                harvest.push(dataForAPIList[j].api_name_yield4[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield5[0]){
                harvest.push(dataForAPIList[j].api_name_yield5[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield6[0]){
                harvest.push(dataForAPIList[j].api_name_yield6[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield7[0]){
                harvest.push(dataForAPIList[j].api_name_yield7[1]);
            }
            if(cropName[i]===dataForAPIList[j].api_name_yield8[0]){
                harvest.push(dataForAPIList[j].api_name_yield8[1]);
            }
        }
        yields.push(harvest);
    }
    return {cropName, yields};
}