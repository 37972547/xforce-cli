
let beforeAdvance = () => {
  console.log("beforeAdvance");
}

let tx1 = () => {
  console.log("tx1");
}

module.exports = {
  beforeAdvance,
  tx1
};