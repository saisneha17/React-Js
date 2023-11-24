import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './loader/loader';

function ProductsComponent() {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const cartProducts = [];
    const addToCart = (product, index) => {
        products[index].isCart = true;
        cartProducts.push(product);
        console.log(products, cartProducts);
    };
    const goToCart = () => {
        window.alert('Navigate to Cart');
    }
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        getAllProductsByLimit(0);
    }, []);
    const getAllProductsByLimit = (skip) => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/products?limit=20&skip=${skip}`).then((response) => {
            console.log(response);
            setIsLoading(false);
            setProducts(response.data.products);
            setFilteredProducts(response.data.products);
            setTotalPages(Array.from({ length: response.data.total / 20 }, (_, index) => index + 1));
            console.log(totalPages);
        }).catch(error => {

        });
    }
    let clearSearchQueryFunc;
    useEffect(() => {
        clearSearchQueryFunc = setTimeout(() => {
            const _filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredProducts(_filteredProducts);
        }, 1000);

        return () => {
            clearTimeout(clearSearchQueryFunc);
        };
    }, [searchQuery]);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-2">
                    <h3>Filters</h3>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className='col-sm'>
                            <div class="mb-3">
                                <label for="searchQuery" class="form-label">Search Product: </label>
                                <input type="text" class="form-control" id="searchQuery" onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search Product..." />
                            </div>
                        </div>
                    </div>
                    {isLoading ? (<Loader />) : (
                        <>
                            {filteredProducts.map((product, index) => (
                                <div className="row my-2 border-bottom py-4" key={'p' + index}>
                                    <div className="col-sm-3">
                                        <img src={product.thumbnail} width="160px" />
                                    </div>
                                    <div className="col-sm-6">
                                        <h3><Link to={`/product/${product.name}?productName=${product.name}&productPrice=${product.price}`}>{product.title}</Link></h3>
                                        <ul>
                                            {product.specifications && product.specifications.map((specification, index) => (
                                                <li key={'s' + index}>{specification}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <h3>{product.price}</h3>
                                        {product.isCart ? (
                                            <button className="btn btn-warning" onClick={goToCart}>Go to Cart</button>
                                        ) : (
                                            <button className="btn btn-success" onClick={() => addToCart(product, index)}>Add to Cart</button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="col-sm">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            {totalPages.map((pageNo, index) => (
                                                <li class="page-item" style={{ cursor: 'pointer' }} onClick={() => getAllProductsByLimit(index * 20)}><p class="page-link">{pageNo}</p></li>
                                            ))}
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProductsComponent;