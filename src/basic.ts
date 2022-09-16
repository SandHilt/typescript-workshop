let pi: number = 3.1415;
let r: any = "aaaa"

function radius(r: number): number {
  return pi * r * r;
}

r = radius(10);
console.log(r); // 314.15