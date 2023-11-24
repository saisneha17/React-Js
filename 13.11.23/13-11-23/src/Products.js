function ProductsComponent() {
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
        }
    ];
    const cartProducts = [];
    const addToCart = (product, index) => {
        products[index].isCart = true;
        cartProducts.push(product);
        console.log(products, cartProducts);
    };
    const goToCart = () => {
        window.alert('Navigate to Cart');
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-2">
                    <h3>Filters</h3>
                </div>
                <div className="col-sm-10">
                    {products.map((product, index) => (
                        <div className="row my-2 border-bottom py-4" key={'p' + index}>
                            <div className="col-sm-3">
                                <img src={product.imgSrc} width="160px" />
                            </div>
                            <div className="col-sm-6">
                                <h3>{product.name}</h3>
                                <ul>
                                    {product.specifications.map((specification, index) => (
                                        <li key={'s' + index}>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h3>{products[0].price}</h3>
                                {product.isCart ? (
                                    <button className="btn btn-warning" onClick={goToCart}>Go to Cart</button>
                                ): (
                                    <button className="btn btn-success" onClick={() => addToCart(product, index)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsComponent;