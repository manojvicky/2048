export function right(data) {
    let arr = [...data];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== 0 && j + 1 < arr.length && arr[j + 1] === 0) {
                arr[j+1] = arr[j];
                arr[j] = 0;
            }
        }
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i - 1 >= 0 && arr[i] === arr[i - 1] && arr[i] !== 0) {
            arr[i] = arr[i] + arr[i - 1];
            arr[i - 1] = 0;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== 0 && j + 1 < arr.length && arr[j + 1] === 0) {
                arr[j+1] = arr[j];
                arr[j] = 0;
            }
        }
    }
    
    return arr;
}

export function formatterRight(data){
    let newData = [...data];
    let result = [];
    for(let i=0; i<newData.length ; i++){
        result.push(right(newData[i]));
    }
    return result;
}

function left(data) {
    let arr = [...data];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0 && j + 1 < arr.length && arr[j + 1] !== 0) {
                arr[j] = arr[j + 1];
                arr[j + 1] = 0;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length && arr[i] === arr[i + 1] && arr[i] !== 0) {
            arr[i] = arr[i] + arr[i + 1];
            arr[i + 1] = 0;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0 && j + 1 < arr.length && arr[j + 1] !== 0) {
                arr[j] = arr[j + 1];
                arr[j + 1] = 0;
            }
        }
    }
    return arr;
}

export function formatterLeft(data){
    let newData = [...data];
    let result = [];
    for(let i=0; i<newData.length ; i++){
        result.push(left(newData[i]));
    }
    return result;
}

export function formatterUp(data){
    let newData = [...data];
    newData = transpose(newData).reverse();
    let result = [];
    for(let i=0; i<newData.length ; i++){
        result.push(left(newData[i]));
    }
    result = transpose(result.reverse());
    return result;
}

export function formatterDown(data){
    let newData = [...data] ;
    newData = transpose([...data]).reverse();
    let result = [];
    for(let i=0; i<newData.length ; i++){
        result.push(right(newData[i]));
    }
    result = transpose(result.reverse());
    return result;
}

function transpose(data){
    let newData = [...data];
    for(let i=0; i<newData.length ; i++){
        for(let j=i; j<newData.length ; j++){
            if(i!==j){
                let swap = newData[i][j];
                newData[i][j] = newData[j][i];
                newData[j][i] = swap;
            }
        }
    }
    return newData;
}

export function newElement(data){
    let newData = [...data];
    let emptyArray = [];
    for(let i=0; i<newData.length ; i++){
        for(let j=i; j<newData.length ; j++){
            if(newData[i][j]===0){
                emptyArray.push(`${i}${j}`);
            }
        }
    }
    let index = Math.floor(Math.random()*emptyArray.length);
    let [i,j] = emptyArray[index].split('')
    newData[i][j] = Math.floor(Math.random()*2) ? 4 : 2;
    return newData;
}
