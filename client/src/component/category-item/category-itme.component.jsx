import './category-item.style.scss';

const categoryItem=({category})=>{
    const {imageUrl, title}=category;
    return(
        <div className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img src={imageUrl} alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">Women,bag</span>
			<h4><a href="/">{title}</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div className="product-bottom-details">
                <div className="button-box">
                    <button className="twelve">Shop Now</button>
                </div>
			</div>
		</div>
	</div>
    )
}

export default categoryItem;