import { products } from '../productsData';
import { saveAs } from 'file-saver';

const myJSON = JSON.stringify(products);
console.log(myJSON);
const file = new File([myJSON], { type: 'application/json' });
saveAs(file, 'myFile.json');
