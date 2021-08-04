// 연습장입니다.

const item = { type: "👔", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);
console.log(shirt0);

// ✅ Better! Code ✨
const shirt = { ...item, ...detail, price: 30 };
console.log(shirt);
