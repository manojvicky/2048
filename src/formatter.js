// var arr = [{ value: 4, pass: false }, { value: 0, pass: false }, { value: 0, pass: false }, { value: 2, pass: false }];
var arr = [4,2,0,4];
console.log('ques', arr);


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0 && j + 1 < arr.length && arr[j + 1] == 0) {
            let val = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = val;
        }
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (i - 1 >= 0 && arr[i] === arr[i - 1] && arr[i] !== 0) {
        arr[i] = arr[i] + arr[i - 1];
        arr[i - 1] = 0;
    }
}
console.log('result', arr);