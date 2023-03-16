import { app } from "./app.js"
import * as dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})