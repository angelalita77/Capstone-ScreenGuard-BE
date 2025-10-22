
import mongoose from 'mongoose';

// ============================================
// MODELS - /models/userSchema.js
// This will have the model for sthe user accounts
// ============================================

const userSchema = new mongoose.Schema ({
username: {
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
    },
email: {
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
    },
password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
},
// role: [{
//     type: String,
//     enum: ['parent', 'child'],
//     required: true 
//     }],
// parentId: {
//     type: mongoose.Schema.TypesObjectId,
//     ref: 'User',
//     default: null
// },
// children: [{
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: User // It will reference "Child" user IDs linked to parent
// }]

}, {
    timestamp: true
});

// create index
userSchema.index({username: 1});

//Export
export default mongoose.model("Users", userSchema);



