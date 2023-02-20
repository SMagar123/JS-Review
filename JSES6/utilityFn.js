module.exports.result=(((item) => {
    return item.filter((e) => {
      return e % 2 == 0;
    });
  })([12,23,523,53,34]))