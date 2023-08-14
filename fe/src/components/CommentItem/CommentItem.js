import styles from './CommentItem.module.css';

function CommentItem(props) {
    const formatDate = (date) => {
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('id-ID', { month: 'long' });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${day} ${month} ${year}`;
    }
    
    
    return (
        <div className={styles.commentItem}>
            <div className={styles.commentInfo}>
                <p className={styles.commentName}>{props.name}</p>
                <p className={styles.commentDate}>{formatDate(props.date)}</p>
            </div>
            <div className={styles.commentContent}>
                <p className={styles.commentText}>{props.message}</p>
            </div>
        </div>
    )   
}

export default CommentItem;