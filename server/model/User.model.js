import mongoose from "mongoose";
import moment from "moment-timezone";

// const dateIndia = moment.tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm ZZ');
// console.log(dateIndia);
export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    fullname: {
        type: String, default: function () {
            const fullname = this.firstName + " " + this.lastName;
            return fullname;
        }
    },
    points: { type: Number }

});

export default mongoose.model.Users || mongoose.model('User', UserSchema);