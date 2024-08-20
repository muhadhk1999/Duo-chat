import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const messageObject = { message }; // Wrap the message in an object
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(messageObject), // Send the message object
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
