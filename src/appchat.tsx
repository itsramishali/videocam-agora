import React, { Component, useEffect } from "react";
import {
    Provider,
    Chat,
    ConversationList,
    useClient,
    rootStore,
} from "chatuim2";
import "chatuim2/style.css";

const appKey = "411089371#1275052"; // Replace with your appKey
const user = "ramishali-420"; // Replace with your user ID
const agoraToken = "007eJxTYLDvYFl698PWJ6d+v1ry6Xb0KtFvKvvuXFvydz0/j8+BM4vWKzCYpqSlGZqlpBimmSeZGJkkJhkmWholGhobpFqmGBuam63nOpjaEMjIoBOmw8LIwMrAyMDEAOIzMAAA89khkw=="; // Replace with your agora chat token

// Remove the declaration of the 'conversation' variable
// const conversation: Conversation = {
//   chatType: "singleChat", // 'singleChat' || 'groupChat'
//   conversationId: "agora", // Target user id or group id
//   name: "Agora", // Target user nickname or group name
//   lastMessage: {},
// };

const ChatApp: React.FC = () => {
    interface Conversation {
        chatType: string;
        conversationId: string;
        name: string;
        lastMessage: any; // Update the type based on the actual structure
        unreadCount: number; // Add the unreadCount property
    }

    const conversation: Conversation = {
        chatType: "singleChat", // 'singleChat' || 'groupChat'
        conversationId: "agora", // Target user id or group id
        name: "Agora", // Target user nickname or group name
        lastMessage: {},
        unreadCount: 0, // Add the unreadCount property
    };

    const client = useClient();

    useEffect(() => {
        client &&
            client
                .open({
                    user,
                    agoraToken,
                })
                .then((res: any) => {
                    console.log("get token success", res);
                    // create a conversation
                    rootStore.conversationStore.addConversation(conversation as import("c:/Users/user/videocam/node_modules/chatuim2/types/module/store/ConversationStore").Conversation);
                });
    }, [client]);

    return (
        <div>
            <div>
                <ConversationList />
            </div>
            <div>
                <Chat />
            </div>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <Provider
                initConfig={{
                    appKey,
                }}
            >
                <ChatApp />
            </Provider>
        );
    }
}

export default App;



