// happy coding 👻
function fibonacci(n: number):number {
    if (n==1||n==0) return 0;
    if (n==2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

let num = parseInt(<string>prompt('Input a number:'));
let sum:number = 0;
for (let i = 1; i <= num; i++) {
    sum += fibonacci(num);
    document.writeln(String(fibonacci(i)));
}
document.writeln("Sum = "+ String(sum));
// console.log(fibonacci(sum));