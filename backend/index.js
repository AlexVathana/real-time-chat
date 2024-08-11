const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/authenticate", async (req, res) => {
  const { username} = req.body;


try {
  const r = await axios.put(
    'https://api.chatengine.io/users/',
    { username: username, secret: username, first_name: username }, 
    { headers: { "private-key": "00d97452-82a2-43d5-824b-4ff9f8b1dd7c" } } 
  );
  return res.status(r.status).json(r.data);
} catch (e) {
  return res.status(e.response.status).json(e.response.data);
}

});

app.listen(3001);