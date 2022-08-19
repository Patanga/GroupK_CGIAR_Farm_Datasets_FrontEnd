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

    var empty = [];
    for(var n=0;n<arr.length;n++){
        if(empty.indexOf(arr[n])<0){
            empty.push(arr[n]);
        }
    }
    arr = empty;//x-asix names

    var count_of_households = new Array(arr.length);
    for(var m=0;m<count_of_households.length;m++){
        count_of_households[m]=0;
    }
    for(var j1=0;j1<arr.length;j1++){
        var crop_name = arr[j1];
        for(var k=0;k<dataForAPIList.length;k++){
            if(dataForAPIList[k].api_crops_all.indexOf(crop_name)!==-1){
                count_of_households[j1]++;
            }
        }
    }
    for(var l=0;l<arr.length;l++){
         const doc = [
            arr[l],//x-axis
            count_of_households[l],//y-axis
         ]
         barData.push(doc)
    }
    return barData;
}

export const buildCropUsed=(dataForAPIList)=>{
    var cropName = [];
    var consumed = [];
    var sold = [];
    for(var i5 in dataForAPIList){
        if(dataForAPIList[i5].api_consumed_sold1[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold1[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold2[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold2[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold3[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold3[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold4[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold4[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold5[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold5[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold6[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold6[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold7[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold7[0]);
        }
        if(dataForAPIList[i5].api_consumed_sold8[0]!==null){
            cropName.push(dataForAPIList[i5].api_consumed_sold8[0]);
        }
    }
    var empty = [];
    for(var n=0;n<cropName.length;n++){
        if(empty.indexOf(cropName[n])<0){
            empty.push(cropName[n]);
        }
    }
    cropName = empty;//all x-axis names

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
    var empty = [];
    for(var n=0;n<cropName.length;n++){
        if(empty.indexOf(cropName[n])<0){
            empty.push(cropName[n]);
        }
    }
    cropName = empty;

    for(var ii=0;i<cropName.length;ii++){
        var harvest = [];
        for(var j in dataForAPIList){
            if(cropName[ii]===dataForAPIList[j].api_name_yield1[0]){
                harvest.push(dataForAPIList[j].api_name_yield1[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield2[0]){
                harvest.push(dataForAPIList[j].api_name_yield2[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield3[0]){
                harvest.push(dataForAPIList[j].api_name_yield3[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield4[0]){
                harvest.push(dataForAPIList[j].api_name_yield4[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield5[0]){
                harvest.push(dataForAPIList[j].api_name_yield5[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield6[0]){
                harvest.push(dataForAPIList[j].api_name_yield6[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield7[0]){
                harvest.push(dataForAPIList[j].api_name_yield7[1]);
            }
            if(cropName[ii]===dataForAPIList[j].api_name_yield8[0]){
                harvest.push(dataForAPIList[j].api_name_yield8[1]);
            }
        }
        yields.push(harvest);
    }
    return {cropName, yields};
}