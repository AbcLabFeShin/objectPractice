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

const getOnlyNumberObj = (obj) => {
    return Object.entries(obj).reduce((acc,[key, value])=>{
        if(typeof value === 'number'){acc[key] = value;}//동적할당
        return acc;
    }, {}); }

const numberObj = getOnlyNumberObj(obj);
console.log({numberObj});
//1) Object method, reduce Array method 익숙해질 것
//2) 객체 생성, 동적할당 방법 알아보기