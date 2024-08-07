import cors from 'cors'
import cookieParser from 'cookie-parser';

import express, {Application,Request,Response} from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';


const app: Application = express()
//parsers
app.use(express.json())
app.use(cookieParser())

app.use(cors({origin : "https://multiformstage-frontend.vercel.app"}));




app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
    res.send('Multi staged Form Root');
  });
  app.use(globalErrorHandler);
  app.use(notFound);


  export default app
  