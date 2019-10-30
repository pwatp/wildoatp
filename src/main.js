import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css';

import { getFullName } from './js/utils';

const firstName = getFullName(process.env.TWILIO_NUM);

console.log(firstName);
