import {products} from "../../../src/dataDetails"

export default function handler(req, res) {
  const {id} = req.query;
  const product = products.find(product => product.id === Number(id));
  
  res.status(200).json(product);
}


// product.categories[0].features[0]  get "Realiability"
