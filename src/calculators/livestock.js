//livestock count data chart source process
export const count = (dataForAPIList, countType) => {
    function insert(counter, treeNode) {
        if (treeNode === null) {
            treeNode = {
                Name: counter, count: 1,
                left: null,
                right: null
            };
        } else if (counter === treeNode.Name) {
            treeNode.count += 1;
        } else if (counter < treeNode.Name) {
            treeNode.left = insert(counter, treeNode.left);
        } else {
            treeNode.right = insert(counter, treeNode.right);
        }

        return treeNode;
    }

    //livestock bar chart source process
    function flattenForBar(treeNode) {
        if (treeNode === null) {
            return [];
        } else {
            return [...flattenForBar(treeNode.left),
                [ treeNode.Name, treeNode.count ],
                ...flattenForBar(treeNode.right)];
        }
    }

    let root = null;
    switch(countType) {
        case "Frequency":
            dataForAPIList.forEach(data => {
                let animals = data.api_livestocks_kept;
                animals.forEach(animal => {
                    if (animal[1] > 0) {
                        root = insert(animal[0], root);
                    }
                });
            });
            return flattenForBar(root);

        case "Breeds":
            dataForAPIList.forEach(data => {
                let animals = data.api_breed_improved;
                animals.forEach(animal => root = insert(animal, root));
            });
            return flattenForBar(root);

        default:
            return null;
    }
};


//livestock heads chart source process
export const buildHeadsData = (dataForAPIList) => {
    let result = {};
    dataForAPIList.forEach(dataObj => {
        let animals = dataObj.api_livestocks_kept;
        animals.forEach(animal => {
            if (! Object.keys(result).includes(animal[0])) {
                result = {...result, [animal[0]]: [animal[1]]}
            } else {
                result[animal[0]].push(animal[1]);
            }
        });

    });
    var name=Object.keys(result)
    var rowbox=Object.values(result)
    var box=[]
    var count=[]
    for(var i=0;i<rowbox.length;i++){
        var cnt=0;
        var arr=[];
        for(var j=0;j<rowbox[i].length;j++){
            if(rowbox[i][j]!==0){
                arr.push(rowbox[i][j]);
            }else{
                cnt++
            }
        }
        box.push(arr)
        count.push(cnt)
    }
    return {
        name:name,
        box:box,
        count:count
    };
};

//livestock usage chart source process
export const buildUseData = (dataForAPIList) => {
    const sum = dataForAPIList.length;
    let meatSold = dataForAPIList.reduce(
        (preResult, data) => preResult + data.api_meat_sold_consumed[0], 0
    );
    let meatConsumed = dataForAPIList.reduce(
        (preResult, data) => preResult+data.api_meat_sold_consumed[1], 0
    );
    let eggsSold = dataForAPIList.reduce(
        (preResult, data) => preResult+data.api_eggs_sold_consumed[0], 0
    );
    let eggsConsumed = dataForAPIList.reduce(
        (preResult, data) => preResult+data.api_eggs_sold_consumed[1], 0
    );
    let milkSold = dataForAPIList.reduce(
        (preResult, data) => preResult+data.api_milk_sold_consumed[0], 0
    );
    let milkConsumed = dataForAPIList.reduce(
        (preResult, data) => preResult+data.api_milk_sold_consumed[1], 0
    );

    meatSold = Math.round(meatSold / sum * 100);
    meatConsumed = Math.round(meatConsumed / sum * 100);
    eggsSold = Math.round(eggsSold / sum * 100);
    eggsConsumed = Math.round(eggsConsumed / sum * 100);
    milkSold = Math.round(milkSold / sum * 100);
    milkConsumed = Math.round(milkConsumed / sum * 100);

    return [
        ["meat", meatSold, meatConsumed],
        ["eggs", eggsSold, eggsConsumed],
        ["milk", milkSold, milkConsumed]
    ];
}

//livestock breeds chart source process
export const buildBreedsData = (dataForAPIList) => {
    let result = count(dataForAPIList, "Breeds");
    var sum = 0
    result.forEach(doc=>{
        sum=sum + doc[1]
    })
    if(sum===0){
        return [
            [
                "No Breeds Count",
                0
            ]]
    }
    result.forEach(animal => animal[1] = Number((animal[1] / sum * 100).toFixed(2)));
    return result;
};