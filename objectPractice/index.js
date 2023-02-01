/*
1. 객체 선언 : value의 데이터 타입 
string, number, bolean, null, undefined, object, array, function
2. 함수 객체의 value 테이터 타입이 number인 [key,value]만 뽑아서 새로운 객체 return
    1. Type 구분 : typeof(a), Array.isArray(arr)
    2. [key, value]
    3. 새로운 객체 return (reduece or 새로운 객체 생성)
*/
const obj = {
    string1 : 'str1',
    number1 : 11,
    number2 : 22,
    bolean1 : true,
    null1 : null,
    undefined1 : undefined,
    Object1 : {ele1 : 'ele1'},
    array1 : [0,1,2,3],
    function1 : function(){},
}

function findNumberInObj(obj){
    const objValuesArr = Object.keys(obj);//키값 배열
    const solArr = {};//const solArr = [];
    for(i=0;i<objValuesArr.length;i++){
        if( typeof(obj[ objValuesArr[i] ]) === 'number'){
            //console.log(i)
            //solArr.push([objValuesArr[i],obj[objValuesArr[i]]]);
            solArr[objValuesArr[i]] = obj[objValuesArr[i]];
        } //acc[key] = value;
    }
    return solArr;
}
console.log(findNumberInObj(obj));
//array가 아니라 객체 생성
