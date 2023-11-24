import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Product() {
    const products = [
        {
            name: 'POCO X5 5G (Supernova Green, 256 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/0/-original-imagnqpnhtwr8chu.jpeg?q=70',
            price: 14999,
            specifications: [
                '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
                '48MP + 8MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 695 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories',
                '16.94 cm (6.67 inch) Full HD+ Display',
            ],
            isCart: false,
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/x/-original-imagzjhwyujd6mzy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/f/w/-original-imagzjhwtxgavcwh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/p/q/-original-imagzjhwkgvefqrm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70'
            ]
        },
        {
            name: 'POCO X5 5G (Wildcat Blue, 256 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/e/l/-original-imagnqpndcmxghyq.jpeg?q=70',
            price: 14999,
            specifications: [
                '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
                '16.94 cm (6.67 inch) Full HD+ Display',
                '48MP + 8MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 695 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            isCart: false,
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/x/-original-imagzjhwyujd6mzy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/f/w/-original-imagzjhwtxgavcwh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/p/q/-original-imagzjhwkgvefqrm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70'
            ]
        },
        {
            name: 'APPLE iPhone 14 (Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: 57999,
            specifications: [
                '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
                '16.94 cm (6.67 inch) Full HD+ Display',
                '48MP + 8MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 695 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            isCart: false,
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/x/-original-imagzjhwyujd6mzy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/f/w/-original-imagzjhwtxgavcwh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/p/q/-original-imagzjhwkgvefqrm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70'
            ]
        },
        {
            name: 'APPLE iPhone 14 Plus (Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70',
            price: 64999,
            specifications: [
                '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
                '16.94 cm (6.67 inch) Full HD+ Display',
                '48MP + 8MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 695 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            isCart: false,
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/x/-original-imagzjhwyujd6mzy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/f/w/-original-imagzjhwtxgavcwh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/p/q/-original-imagzjhwkgvefqrm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70'
            ]
        },
        {
            name: 'vivo T2x 5G (Aurora Gold, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
            price: 11999,
            specifications: [
                '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
                '16.94 cm (6.67 inch) Full HD+ Display',
                '48MP + 8MP + 2MP | 13MP Front Camera',
                '5000 mAh Battery',
                'Qualcomm Snapdragon 695 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            isCart: true,
            imgSrcs: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/x/-original-imagzjhwyujd6mzy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/f/w/-original-imagzjhwtxgavcwh.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/p/q/-original-imagzjhwkgvefqrm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/i/g/-original-imagq3tyhzayxetq.jpeg?q=70'
            ]
        }
    ];
    const { productName } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const filteredProduct = products.find(product => product.name === productName);
    const [bannerImg, setBannerImg] = useState(filteredProduct.imgSrcs[0]);
    const cartProducts = [];
    const addToCart = () => {
        products[products.findIndex(product => product.name === productName)].isCart = true;
        cartProducts.push(filteredProduct);
        console.log(products, cartProducts);
    };
    const goToCart = () => {
        window.alert('Navigate to Cart');
    }
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-sm-6">
                    <div className='row'>
                        <div className='col-sm-3'>
                            {filteredProduct.imgSrcs.map(img => (
                                <div className='border' style={{padding: '5px', marginBottom: '5px', cursor: 'pointer'}}>
                                    <img src={img} width="75px" onClick={() => setBannerImg(img)}/>
                                </div>
                            ))}
                        </div>
                        <div className='col-sm-9'>
                            <img src={bannerImg} />
                            <div className='my-4'>
                                {filteredProduct.isCart ? (
                                    <button className="btn btn-warning btn-lg me-2" onClick={goToCart}>Go to Cart</button>
                                ): (
                                    <button className="btn btn-success btn-lg me-2" onClick={() => addToCart()}>Add to Cart</button>
                                )}
                                <button className="btn btn-warning btn-lg">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='col-sm-6'>
                    <h3>{filteredProduct.name}</h3>
                    <h4>₹ {filteredProduct.price}</h4>
                    <ul>
                        {filteredProduct.specifications.map((specification, index) => (
                            <li key={'s' + index}>{specification}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product;