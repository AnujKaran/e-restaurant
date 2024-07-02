const productmodels = require("../Models/productModel")

const addProduct = async (req, res) => {
  try {
    const { title, imgURL, category, calories, price, desc, id } = req.body;
    const product = await productmodels.create({
      title,
      imgURL,
      category,
      calories,
      price,
      desc,
      id,
    });
    if(product){
    return res.status(200).send(product);
    }
    else{
        return res.status(400).send("Un-able to add product :)");
    }
  } catch (error) {
    return res.status(502).send("Internal server error");
  }
};

const getAllProduct = async(req,res)=>{
  
    try {
        const products = await productmodels.find();
        
        if(products){
            return res.status(200).send(products);
        }
    } catch (error) {
        return res.status(502).send("Internal server error");
        
    }
}
module.exports = {addProduct,getAllProduct}