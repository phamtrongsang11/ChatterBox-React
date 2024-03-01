import React, { useEffect } from 'react';
import ServerHeader from './ServerHeader';
import classes from './ServerSidebar.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useServer } from '../../hooks/graphql/server/useServer';
import { Divider, ScrollArea, Stack } from '@mantine/core';
import ServerSidebarSection from './ServerSidebarSection';
import ServerChannel from './ServerChannel';
import { ChannelType } from '../../gql/graphql';
import ServerMember from './ServerMember';
const ServerSidebar = () => {
	const navigate = useNavigate();
	const { serverId, memberId, channelId } = useParams();

	const { textChannels, audioChannels, videoChannels, server, role, members } =
		useServer();

	useEffect(() => {
		if (!channelId && !memberId && textChannels.length) {
			navigate(`/servers/${serverId}/channels/TEXT/${textChannels[0]?.id}`);
		}
	});

	const [activeMemberId, setActiveMemberId] = React.useState<number | null>();
	const [activeChannelId, setActiveChanneId] = React.useState<number | null>();

	useEffect(() => {
		if (memberId) {
			setActiveMemberId(parseInt(memberId));
			setActiveChanneId(null);
		}
		if (channelId) {
			setActiveChanneId(parseInt(channelId));
			setActiveMemberId(null);
		}
	}, [channelId, memberId, textChannels]);

	if (!server || !role) return null;

	return (
		<nav className={classes.nav}>
			<ServerHeader server={server} memberRole={role} />
			<Divider my="md" />
			{/* ServerSearch */}
			<ScrollArea>
				{!!textChannels.length && (
					<ServerSidebarSection
						sectionType="channels"
						channelType={ChannelType.Text}
						role={role}
						label="Text Channels"
					/>
				)}
				<Stack>
					{textChannels.map((channel) => (
						<ServerChannel
							key={channel?.id}
							channel={channel}
							isActive={activeChannelId === channel?.id}
							role={role}
							server={server}
						/>
					))}
				</Stack>

				{!!audioChannels.length && <Divider my="md" />}
				{!!audioChannels.length && (
					<ServerSidebarSection
						sectionType="channels"
						channelType={ChannelType.Audio}
						role={role}
						label="Audio Channels"
					/>
				)}
				<Stack>
					{audioChannels.map((channel) => (
						<ServerChannel
							key={channel?.id}
							channel={channel}
							isActive={activeChannelId === channel?.id}
							role={role}
							server={server}
						/>
					))}
				</Stack>

				{!!videoChannels.length && <Divider my="md" />}
				{!!videoChannels.length && (
					<ServerSidebarSection
						sectionType="channels"
						channelType={ChannelType.Video}
						role={role}
						label="Video Channels"
					/>
				)}
				<Stack>
					{videoChannels.map((channel) => (
						<ServerChannel
							key={channel?.id}
							channel={channel}
							isActive={activeChannelId === channel?.id}
							role={role}
							server={server}
						/>
					))}
				</Stack>

				{!!members?.length && <Divider my="md" />}
				{!!members?.length && (
					<ServerSidebarSection
						sectionType="members"
						role={role}
						label="Member"
					/>
				)}
				<Stack>
					{members?.map((member) => (
						<ServerMember
							key={member?.id}
							member={member}
							server={server}
							isActive={activeMemberId === member?.id}
						/>
					))}
				</Stack>
			</ScrollArea>
		</nav>
	);
};

export default ServerSidebar;
