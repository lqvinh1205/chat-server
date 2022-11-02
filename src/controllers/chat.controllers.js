import { createMessage } from "../services/chat.services"

export const requestMessage = async (req,res) => {
    try {   
        const message = await createMessage(req.body)
        res.status(200).json(message)
    } catch (error) {
        res.status(400).json({ message: "Errors" })
    }
}