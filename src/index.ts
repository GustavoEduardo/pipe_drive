import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./routes"

const app = express()
app.use(cors())
app.use(express.json({limit: 999999999999999}))
app.use(express.urlencoded({ extended: true }));
app.use(routes)
app.use(express.static("static"));
app.listen(3000)