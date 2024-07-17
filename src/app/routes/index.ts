import { Router } from "express";
import { FormRoutes } from "../modules/form/form.route";

const router = Router()

router.use('/forms',FormRoutes)
export default router;
