const express = requrire ("express")
const app = express ();
const cors = require ("cors")

app.use(express.json());
app.use(cors());

app.use("/", require(".router"))