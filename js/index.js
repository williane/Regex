var alvo = '11n22b33c';
var exp = /(\d{2})(\w)/g;

while(res = exp.exec(alvo)){
    console.log('exp', exp.lastIndex);
    console.log('res', res);
};


