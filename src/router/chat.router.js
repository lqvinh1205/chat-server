import { Router } from "express";
import { requestMessage } from "../controllers/chat.controllers";

const router = Router()

router.post("/messages", requestMessage)     

export default router