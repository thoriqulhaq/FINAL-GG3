import { useState, useEffect } from 'react';
import axios from 'axios';
import useWebSocket from './useWebSocket';

function useComment(videoId) {
    const [listComment, setListComment] = useState([]);
    const [newComment, setNewComment] = useState({
        videoId: videoId,
        username: '',
        message: '',
    });
    const socket = useWebSocket();
    

    const getComment = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/comment', {
                params: {
                    videoId: videoId,
                    limit: 1000,
                }
            });
            setListComment(response.data.data.docs);
        } catch (error) {
            console.log(error);
        }
    }

    const submitComment = async () => {
        try {
            await axios.post(process.env.REACT_APP_API_URL + '/comment', newComment);
            setNewComment({
                videoId: videoId,
                username: '',
                message: '',
            });
        } catch (error) {
            console.log(error);
        }

        if (socket) {
            socket.emit('submitComment', newComment);
        }
    }

    useEffect(() => {
        getComment();

        if (socket) {
            socket.on('newComment', () => {
                getComment();
            });
        }
    }, [videoId, socket]);

    return {
        listComment,
        newComment,
        setNewComment,
        submitComment,
    };
}

export default useComment;
