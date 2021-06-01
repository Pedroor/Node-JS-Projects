import { createConnection } from 'typeorm';

createConnection().then(() => console.log('🥊 connect database'));
