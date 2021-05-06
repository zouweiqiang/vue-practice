let name = '小伟'
let age = 18
let flag = true

function sun(num1,num2){
  return num1 + num2
}

if (flag) {
  console.log(sun(12 , 15));
}

// 方法一
export {
  flag,sun
}

// 方法二
export var nul1 =1000; 
export var height =1000; 

// 方法三

export function num(num1, num2){
  return num1 + num2
}
// 方法四
export class person {
  run() {
    console.log('阿伟在奔跑');
  }
}

// 方法五 
const address = '北京市'

export default address