import './productCard.style.css';

const ProductCard = ({product}) => {
    const {name, price, imageUrl}=product;
    return(
    <div class="product-card">
        <div class="badge">Hot</div>
        <div class="product-tumb">
            <img src={imageUrl} alt="" />
        </div>
        <div class="product-details">
            <span class="product-catagory">Women,bag</span>
            <h4><a href="/">{name}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div class="product-bottom-details">
                <div class="product-price"><small>$96.00</small>${price}</div>
                <div class="product-links">
                    <a href="/"><i class="fa fa-heart"></i></a>
                    <a href="/"><i class="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ProductCard;