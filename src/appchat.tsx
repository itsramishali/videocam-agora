import React, { Component, useEffect } from "react";
import {
    Provider,
    Chat,
    ConversationList,
    useClient,
    rootStore,
} from "chatuim2";
import "chatuim2/style.css";

const appKey = "411089371#1275052";
const user = "ramishali-420";
const agoraToken = "007eJxTYLDvYFl698PWJ6d+v1ry6Xb0KtFvKvvuXFvydz0/j8+BM4vWKzCYpqSlGZqlpBimmSeZGJkkJhkmWholGhobpFqmGBuam63nOpjaEMjIoBOmw8LIwMrAyMDEAOIzMAAA89khkw==";

const ChatApp: React.FC = () => {
    interface Conversation {
        chatType: string;
        conversationId: string;
        name: string;
        lastMessage: any;
        unreadCount: number;
    }

    const conversation: Conversation = {
        chatType: "singleChat",
        conversationId: "agora",
        name: "Agora",
        lastMessage: {},
        unreadCount: 0,
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
                    // Create a conversation
                    rootStore.conversationStore.addConversation(conversation);
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

class Appchat extends Component {
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

export default Appchat;




