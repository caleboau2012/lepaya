var generate = function(req, res, next) {
  if (req.params.no) {
    // using set to prevent duplicate cards.
    const response = new Set();

    while (response.size < req.params.no) {
      response.add(parseInt(Math.random() * 100));
    }

    console.log(req.params, response);

    res.status(200).json(Array.from(response));
  } else {
    res.sendStatus(400);
  }
};

module.exports = generate;
