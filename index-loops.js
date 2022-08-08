console.log("a");

var items = [123, 456];

for (let item in items) {
  console.log(item);
}
for (let item of items) {
  console.log(item);
}
var i = 0;
while (i < items.length) {
  console.log(`while ${items[i]}`);

  i++;
}
for (let i = 0; i < items.length; i++) {
  console.log(`canonical for ${items[i]}`, items[i]);
}

i = 0;
do {
  console.log(`do-while ${items[i]}`);
  i++;
} while (i < items.length);
