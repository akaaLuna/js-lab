const items = ["a", "b", "c"]

for (item of items) {
    console.log(item)
}
for (item in items) {
    console.log(item)
}
for (i = 0; i < items.length; i++) {
    console.log(items[i])
}
console.log ("while")
var j = 0
while (
    j < items.length
) {
    console.log(items[j])
    j++
}
var k = 0
do{
    
    console.log(items[k])
    k++
}while(k<items.length)
