import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the backend");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
