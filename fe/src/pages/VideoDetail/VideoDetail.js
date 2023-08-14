import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoDetail.module.css';
import { Link, useParams } from "react-router-dom";
import { Layout, Input, Button } from 'antd';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import ProductCard from '../../components/ProductCard/ProductCard';
import CommentItem from '../../components/CommentItem/CommentItem';
import axios from 'axios';
import useComment from '../../hooks/useComment';
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

function VideoDetail() {
    const bottomRef = useRef(null);
    const { id } = useParams();
    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [listProduct, setListProduct] = useState([]);
    const { listComment, newComment, setNewComment, submitComment } = useComment(id);
    
    const getVideo = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/video/' + id)
            .then((response) => {
                setVideo(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    const getProduct = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/product', {
            params: {
                videoId: id,
                limit: 3,
            }
        })
            .then((response) => {
                setListProduct(response.data.data.docs);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    const checkEmbedUrl = (url = '') => {
        if (url.includes('youtube')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be')) {
            return url.replace('youtu.be', 'youtube.com/embed');
        } else {
            return url;
        }
    }
    
    useEffect(() => {
        setIsLoading(true);
        getVideo();
        getProduct();
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [listComment]);
    
    return (
        <Layout className={styles.layoutStyle}>
            {
                isLoading ? (
                    <div className={styles.emptyState}>
                        <LoadingOutlined className={styles.loadingIcon} />
                    </div>
                ) : (
                    <>
                    <Header className={styles.headerStyle}>
                            <div className={styles.headerLeft}>
                                <Link to={'/'}>
                                    <CloseOutlined className={styles.icon} />
                                </Link>
                                <p>{video.title}</p>
                            </div>
                            <p>-</p>
                        </Header>
                        <Layout hasSider>
                            <Content className={styles.contentStyle}>
                                <iframe src={checkEmbedUrl(video.embeddedUrl)} title="MacBook Air M2 After 10 Months: Here&#39;s What You Need To Know!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <div className={styles.productSection}>
                                    {
                                        listProduct.map((item) => {
                                            return (
                                                <ProductCard 
                                                    id={item.id} 
                                                    name={item.name} 
                                                    price={item.price}
                                                    link={item.link}
                                                    key={item.id}
                                                />
                                            )}
                                        )
                                    }
                                </div>
                            </Content>
                            <Sider className={styles.siderStyle} width={'30%'}>
                                <div className={styles.commentSection}>
                                    <div className={styles.commentList}>
                                        {
                                            listComment.map((item) => {
                                                return (
                                                    <CommentItem 
                                                        name={item.username} 
                                                        date={item.createdAt}
                                                        message={item.message}
                                                        key={item.id}
                                                    />
                                                )}
                                            )
                                        }
                                        <div ref={bottomRef} />
                                    </div>
                                    <div className={styles.commentForm}>
                                        <Input 
                                            showCount
                                            placeholder="Nama"
                                            maxLength={20}
                                            className={styles.inputStyle}
                                            bordered={false}
                                            value={newComment.username}
                                            onChange={(e) => {
                                                setNewComment({
                                                    ...newComment,
                                                    username: e.target.value,
                                                })
                                            }}
                                        />
                                        <TextArea
                                            showCount
                                            placeholder='Tulis komentar disini...'
                                            maxLength={100}
                                            className={styles.textAreaStyle}
                                            bordered={false}
                                            value={newComment.message}
                                            onChange={(e) => {
                                                setNewComment({
                                                    ...newComment,
                                                    message: e.target.value,
                                                })
                                            }}
                                        />
                                        <Button 
                                            className={styles.buttonStyle}
                                            onClick={() => {
                                                submitComment();
                                            }}
                                        >
                                            Komentari
                                        </Button>
                                    </div>
                                </div>
                            </Sider>
                        </Layout>
                    </>
                )
            }
        </Layout>
    );
}

export default VideoDetail;