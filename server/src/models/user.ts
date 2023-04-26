import { Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is invalid'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [4, 'Name too short'],
    maxLength: [30, 'Name too long']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    // select: false,
  }
})

const User = models.User || model('User', UserSchema);

export default User;
