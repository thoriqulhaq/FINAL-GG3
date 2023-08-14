import styles from './VideoCard.module.css';
import { Col } from 'antd';
import { Link } from "react-router-dom";

function VideoCard(props) {
    return (
        <Col>
            <Link to={'/video/'+props.id}>
                <div className={styles.cardWrapper} >
                    <div className={styles.cardThumbnail}>
                        <img className={styles.cardImage} alt="example" src={props.thumbnail} />
                    </div>
                    <div className={styles.cardDetail}>
                        <p className={styles.cardTitle}>{props.title}</p>
                        <p className={styles.cardSubtitle}>-</p>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default VideoCard;