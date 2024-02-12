import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName :{
    type: String,
    required: true,
    minLength:[3,"First name must contain atleast 3 characters"],
    maxLength:[30,"First name cannot exceed 30 characters"],
  },
  lastName :{
    type: String,
    required: true,
    minLength:[3,"Last name must contain atleast 3 characters"],
    maxLength:[30,"Last name cannot exceed 30 characters"],
  },
  email:{
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email address"],

  },
  phone:{
    type: String,
    required: true,
    minLength:[10,"Phone number must contain only 10 digits"],
    maxLength:[10,"Phone number must contain only 10 digits"],
  },
  time:{
    type:String,
    required: true,
  },
  // date:{
  //   type:String,
  //   required: true,
  // },
  date:{
    type:String,
    required: true,
    validate: {
      validator: function(value) {
        // Parse the date string to a Date object
        const selectedDate = new Date(value);
        // Get today's date
        const today = new Date();
        // Calculate the maximum allowed date (today + 5 days)
        const maxAllowedDate = new Date(today);
        maxAllowedDate.setDate(today.getDate() + 5);
        // Check if the selected date is within the allowed range
        return selectedDate >= today && selectedDate <= maxAllowedDate;
      },
      message: 'Date must be within the next 5 days starting from today.'
    }
  },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);