const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const BusinessSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("business", BusinessSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/business", async (req, res) => {
  try {
    const get = await Business.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/business/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getBusinessId = await Business.findById(getId);
    res.send(getBusinessId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/business", (req, res) => {
  const getBody = req.body;
  const postBusiness = new Business(getBody);
  postBusiness.save();
  res.send(postBusiness);
});

app.delete("/business/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const deletBusiness = await Business.findByIdAndDelete(deletBody);
    res.send(deletBusiness);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server qalxdi, port:", PORT);
});
