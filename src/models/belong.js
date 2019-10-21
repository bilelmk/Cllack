
import {Schema, model} from 'mongoose'

const belongSchema = Schema({
   date:{
        type:String
    },
    member:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:'channel'
    }
})

export default model('belong',belongSchema)