var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: 'New Balance 2002R Grey Black',
      category: 'Shoes',
      description: 'SKU: ML2002RA RETAIL PRICE: $120 RELEASE DATE: OCT 10, 2020',
      image: 'https://th.bing.com/th/id/OIP.oCYMy6iFccC0RtpHkpqqvgHaFM?w=294&h=206&c=7&r=0&o=5&pid=1.7'
    },
    {
      name: 'Balenciaga',
      category: 'Shoes',
      description: 'SKU: ML2012RA RETAIL PRICE: $1,005 RELEASE DATE: DEC 10, 2021',
      image: 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/84/P00798279.jpg'
    },
    {
      name: 'Air Jordan XXX1',
      category: 'Shoes',
      description: 'SKU: ML2022RA RETAIL PRICE: $999 RELEASE DATE: JAN 25, 2023',
      image: 'https://www.nicekicks.com/files/2016/07/Air-Jordan-XXX1.jpg'
    },
    {
      name: 'Timberland 6 ',
      category: 'Shoes',
      description: 'SKU: ML2005RA RETAIL PRICE: $899 RELEASE DATE: MAY 17, 2019',
      image: 'https://images.garmentory.com/images/3941350/original/Timberland-6-In-Premium-Boot-Waterproof-Orange-TB072066-827-20200622092859.png?1592818144'
    },
  ]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-products',(req,res)=>{
  res.render('admin/add-products')
})
router.post('/add-products',(req,res)=>{
  

  productHelper.addProduct(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images'+id+".jpg",(err,done)=>{
      if(!err){
        res.render("admin/add-products")
      }else{
        console.log(err);
      }
    })
    
  })
})

module.exports = router;
