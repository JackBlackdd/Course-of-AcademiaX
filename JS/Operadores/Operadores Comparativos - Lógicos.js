// Y &&
// O ||
let a = 'java';
let b = 'javascript';
let c = 'c#';

console.log(a === 'java' && b === 'javascript');
console.log(a === 'java' || b === 'go');
console.log(true && true, true && false, false && true, false && false);
console.log(true || true, true || false, false || true, false || false);
console.log(c === 'c#' || (b === 'go' && a === 'javascript'));