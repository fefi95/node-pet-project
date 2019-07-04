import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27018/pet-project', {
  useNewUrlParser: true,
  useCreateIndex: true
});