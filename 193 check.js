const map = new Map();

map.set({ a: 23, b: 75 }, "lala");
map.set("kaka", "lalalolo");

console.log(map);

const sese = map.get({ a: 23, b: 75 });
const keke = map.get("kaka");
console.log(sese);
console.log(keke);
