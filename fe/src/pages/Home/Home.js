import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import VideoCard from '../../components/VideoCard/VideoCard';
import axios from 'axios';
import { Layout, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;

function Home() {
    const [listVideo, setListVideo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(process.env.REACT_APP_API_URL + '/video')
            .then((response) => {
                setListVideo(response.data.data.docs);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);
    
    return (
        <Layout className={styles.layoutStyle}>
            <Header className={styles.headerStyle}>
                <p>TOKOPEDIA PLAY</p>
            </Header>
            <Content className={styles.contentStyle}>
                {
                    isLoading ?  (
                        <div className={styles.emptyState}>
                            <LoadingOutlined className={styles.loadingIcon} />
                        </div>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {
                                listVideo.map((item) => {
                                    return (
                                        <VideoCard 
                                            id={item.id} 
                                            title={item.title} 
                                            thumbnail={item.thumbnail}
                                            key={item.id}
                                        />
                                    )}
                                )
                            }
                        </Row>
                    )
                }
            </Content>
            <Footer className={styles.footerStyle}>
                <p>Tokopedia Play ©2023 Created by Thoriqulhaq Jibril Al Qudsy</p>
            </Footer>
        </Layout>
    );
}

export default Home;