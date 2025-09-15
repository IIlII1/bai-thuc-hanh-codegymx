/*
let chieucao = +prompt("nhap chieu cao :");
let cannang = +prompt("nhap can nang :");
let bmi = cannang / (chieucao/100 * chieucao/100);
if(chieucao <= 0 || cannang <= 0){
    document.write("giu lieu khong ton tai");
}else{
if(bmi < 18.5){
    document.write("thieu can");
}else if(bmi < 22.9){
    document.write("binh thuong");
}else if(bmi < 24.9){
    document.write("thua can");
}else{
    document.write("beo phi");
}
}

for(let i = 1; i <= 100; i++ ){
    document.writeln("xin chao ");
    document.writeln("<br>");
}

for(let i = 1; i <=30; i++){
    if(i % 15 == 0 ){
        document.writeln("fizzbuzz");
    }else if(i % 3 == 0){
        document.writeln( "fizz");
    }else if(i % 5 == 0){
        document.writeln( "buzz");
    }else{
        document.writeln(i + "<br>");
    }
}

let i = 1;
let n = +prompt("nhap n :");
while(i < n){
    document.writeln(i + "<br>");
    i = i+1;
}


let tonghsinh = n.length;
document.write("tonghs :" + tonghsinh + "<br>");

let dau = n[0];
document.write("ten dau :" + dau + "<br>");
document.write("item :" + n[10] + "<br>");
n[2] = "Hoang";
document.write("item 2 :" + n[2] + "<br>");
*/
//su dung for 
let n = ["Nam" , "Hung", "Linh", "Thanh", "Thang", "Dang"];
for (let index = 0; index < n.length; index++) {
    let item = n[index]
    document.writeln(item + ",");
    

}
//c2 : su dung for-in : lap qua chi so cua phan tu
for(const index in n){
    document.writeln(n[index] + " ");
}
//c3 : su dung for-off : lap qua phan tu trong mang 
for(const item of n){
    document.writeln(item);
}
//c4 : su dung foreach
n.forEach((item, index) => {
    document.writeln("chi so :" + index + "value" + item)
})

n.push["minh"];
n.unshift("Bao" + ",")
console.log(n + ",")

//xoa phan tu trong mang
n.splice(1,2) //xoa 2 phan tu o vi tri thu nhat

console.log(n)
//xoa phan tu o
n.pop()
console.log(n)
//xoa phan tu o dau
n.shift();
console.log(n)






