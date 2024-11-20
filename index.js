import { connect } from 'mongoose';
import  app  from './app.js';


connect('mongodb://127.0.0.1:27017/companyDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
