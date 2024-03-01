import { useParams } from 'react-router-dom';
import ChatWindow from '../components/modals/chat/ChatWindow';
import { ChannelType } from '../gql/graphql';

function ChannelPage() {
	const { channelId, channelType } = useParams<{
		channelId: string;
		channelType: ChannelType;
	}>();

	return (
		<>
			<ChatWindow
				chatName={channelId}
				chatType="channel"
				channelType={channelType}
			/>
		</>
	);
}

export default ChannelPage;
