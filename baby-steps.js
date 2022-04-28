var numbers = process.argv;
var sum = 0;
for (let index = 2; index < numbers.length; index++) {
    sum = sum + Number(numbers[index]);
}
console.log(sum);