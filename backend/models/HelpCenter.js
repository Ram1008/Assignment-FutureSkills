import mongoose  from 'mongoose';

const Schema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      link:{
        type: String
      }
    });
    export const HelpCenterModel =  mongoose.model('helpCenter', Schema);

