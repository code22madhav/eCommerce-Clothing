import './productCard.style.css';

const ProductCard = ({product}) => {
    const {name, price, imageUrl}=product;
    return(
    <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
            <img src={imageUrl} alt="" />
        </div>
        <div className="product-details">
            <span className="product-catagory">Women,bag</span>
            <h4><a href="/">{name}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>${price}</div>
                <div className="product-links">
                    <a href="/"><i className="fa fa-heart"></i></a>
                    <a href="/"><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ProductCard;