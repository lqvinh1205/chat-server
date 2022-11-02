import _Message from "../models/chat.modals.js"

export const createMessage = async (data) => {
    const message = await _Message.create(data);
    return message;
}