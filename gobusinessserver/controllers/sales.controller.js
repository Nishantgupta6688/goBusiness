const mongoose = require("mongoose");

const firmData = mongoose.model("firmData");

exports.addSales = async (req, res) => {
  const { id, date, amount } = req.body;
  console.log(id, date, amount);

  await firmData.findOne({ customerId: id }).then((response) => {
    if (response === null) {
      const data = new firmData({
        customerId: id,
        sales: [
          {
            date: date,
            amount: amount,
          },
        ],
      });

      try {
        data.save().then(res.send("saved"));
        console.log(data, "abc");
      } catch (err) {
        res.status(422).send(err);
      }
    } else {
      firmData.findOneAndUpdate(
        { customerId: id },
        { $push: {
            sales: { date: date, amount: amount }
        } },
        null,
        function (err, docs) {
          if (err) {
            console.log(err, "hello");
          } else {
            console.log("Original Doc : ", docs);
            return;
          }
        }
      );
    }
  });
};

exports.getSales = async (req,res) => {
  const {id} = req.body;
  await firmData.findOne({customerId: id})
  .then((response) => {
    console.log(response);
    res.status(201).send(response.sales)
  })

}
