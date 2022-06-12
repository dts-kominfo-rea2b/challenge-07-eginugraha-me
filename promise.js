const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const [resIXX, resVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    const result = [...resIXX, ...resVGC]
    return result?.filter(item => item.hasil === emosi)?.length || 0
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
