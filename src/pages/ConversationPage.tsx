import { useParams } from 'react-router-dom';
import ChatWindow from '../components/modals/chat/ChatWindow';

function ConversationPage() {
	const { conversationId } = useParams();
	return (
		<>
			<ChatWindow chatName={conversationId} chatType="conversation" />
		</>
	);
}

export default ConversationPage;
