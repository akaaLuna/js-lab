function log(args) {
    console.log(args)
}
log("abc")
const items = ["a", "b", "c"]

log("for of")
for (item of items) {
    log(item)
}
log("for in")
for (index in items) {
    log(index)
}
log(" for canonical")
for (var i = 0; i < items.length; i++) {
    log(items[i])
}
log("while")
var j = 0
while (j < items.length) {
    log(items[j])
    j++
}
log("do while")
var k = 0;
do {

    log(items[k])
    k++
} while (k < items.length)