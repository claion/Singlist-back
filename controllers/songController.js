export const searchSong = (req, res) => {
  console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  return res.send("search");
};

export const deleteSong = (req, res) => {
  res.send("delete");
};
