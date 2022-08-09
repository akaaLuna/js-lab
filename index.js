const result = []

const numbers = [0, 1, 2, 3, 4]
for (item of numbers) {
    result.push(item);
}
console.log(result)


for (index in numbers) {
    item = numbers[index] + 5
    result.push(item)

}
console.log(result)

for (var i = 0; i < numbers.length; i++) {
    item = numbers[i] +10
result.push(item)

}
console.log(result)

var x =  0
while (x < numbers.length){
    item = numbers[x] +15
    result.push(item)
    x++
}
console.log(result)

var j= 0
do { 

    
   item = numbers[j] +20
   result.push(item) 
   j++
} while (j<numbers.length)
console.log(result)