import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = parseInt(process.env.PORT) || 5000

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        msg: 'typescript node rules!'
    })
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to the typscript Node server on port ${port}`)
})