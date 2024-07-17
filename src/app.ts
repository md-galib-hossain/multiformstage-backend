import cors from 'cors'
import cookieParser from 'cookie-parser';

import express, {Application,Request,Response} from 'express'


const app: Application = express()
//parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Multi staged Form Root');
  });

  export default app
  