function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compute(n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    const s = add(i, i + 1); //
    const m = multiply(s, 2);
    rows.push({ i, s, m });
  }
  return rows;
}

const result = compute(3);
console.log("Result:", result);
