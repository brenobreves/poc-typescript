import Joi from "joi";
import { createSong } from "protocols";

const songSchema = Joi.object<createSong>({
    artist: Joi.string().required(),
    title:  Joi.string().required(),
    album:  Joi.string().required()
})

export default songSchema;