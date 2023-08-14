import { ExportOutlined } from '@ant-design/icons';
import styles from './ProductCard.module.css';
import { Link } from "react-router-dom";

function ProductCard(props) {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    return (
        <div className={styles.product}>
            <div className={styles.productInfo}>
                <p>{props.name}</p>
                <Link to={props.link}>
                    <ExportOutlined className={styles.icon} />
                </Link>
            </div>
            <p className={styles.productPrice}>Rp {formatPrice(props.price)}</p>
        </div>
    )
}

export default ProductCard