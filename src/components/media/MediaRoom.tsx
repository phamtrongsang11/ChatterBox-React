import {
	ControlBar,
	GridLayout,
	LiveKitRoom,
	ParticipantTile,
	RoomAudioRenderer,
	useTracks,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { Track } from 'livekit-client';
import { useNavigate, useParams } from 'react-router-dom';
import { useLivekitAccessToken } from '../../hooks/graphql/server/chat/useLivekitAccessToken';
function MediaRoom({
	chatId,
	audio,
	video,
}: {
	chatId: string | undefined;
	audio: boolean;
	video: boolean;
}) {
	const { token } = useLivekitAccessToken(chatId);
	const { serverId } = useParams();
	const navigate = useNavigate();

	return (
		<LiveKitRoom
			serverUrl={import.meta.env.VITE_LK_SERVER_URL}
			onDisconnected={() => navigate(`/servers/${serverId}`)}
			video={video}
			audio={audio}
			token={token}
			data-lk-theme="default"
			style={{ height: 'calc(80vh - 60px)' }}
		>
			<MyVideoConference />
			<RoomAudioRenderer />
			<ControlBar />
		</LiveKitRoom>
	);
}

function MyVideoConference() {
	const tracks = useTracks(
		[
			{ source: Track.Source.Camera, withPlaceholder: true },
			{ source: Track.Source.ScreenShare, withPlaceholder: false },
		],
		{ onlySubscribed: false }
	);
	return (
		<GridLayout
			tracks={tracks}
			style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}
		>
			<ParticipantTile />
		</GridLayout>
	);
}

export default MediaRoom;
