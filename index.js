function camelize(str){
    let arr = str.split('-');
    let arr1 = arr.map((item, index) => index === 0 ? item : item.length > 0 ? item[0].toUpperCase() + item.slice(1) : "");
    return arr1.join('');
};

alert(camelize("background-color") )/*== 'backgroundColor'*/;
alert(camelize("list-style-image")) /*== 'listStyleImage'*/;
alert(camelize("-webkit-transition") )/*== 'WebkitTransition'*/;