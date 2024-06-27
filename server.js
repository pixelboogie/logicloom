const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
const OpenAI = require("openai")

app.use(express.json())
app.use(cors())

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post('/completion', async (req, res) => {
    const text = req.body.text
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": text}
            ],
        model: "gpt-3.5-turbo",
      });
      console.log(completion.choices[0])
      res.send(completion.choices[0])
})

app.listen(PORT, () => console.log('Listening on port ${PORT}!'))