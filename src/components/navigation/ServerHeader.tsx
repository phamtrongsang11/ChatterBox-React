import { Divider, Flex, Menu, Text, rem } from '@mantine/core';

import {
	IconArrowDown,
	IconLinkPlus,
	IconPlus,
	IconSettings,
	IconTrash,
	IconUsers,
	IconX,
} from '@tabler/icons-react';
import { MemberRole, Server } from '../../gql/graphql';
import { useModal } from '../../hooks/useModal';

const ServerHeader = ({
	server,
	memberRole,
}: {
	server: Server;
	memberRole: MemberRole;
}) => {
	const isAdmin = memberRole === MemberRole.Admin;
	const isModerator = memberRole === MemberRole.Moderator || isAdmin;

	const inviteModal = useModal('InvitePeople');
	const updateServerModal = useModal('UpdateServer');
	const createChannelModal = useModal('CreateChannel');
	const deleteServerModal = useModal('DeleteServer');
	const manageMembersModal = useModal('ManageMembers');
	const leaveServerModal = useModal('LeaveServer');

	return (
		<Menu shadow="md" width={rem(300)}>
			<Menu.Target>
				<Flex
					p="md"
					justify={'space-between'}
					align="center"
					w="100%"
					style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}
				>
					{server?.name} <IconArrowDown />
				</Flex>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item onClick={inviteModal.openModal} rightSection={<IconPlus />}>
					Invite People
				</Menu.Item>

				{isAdmin && (
					<Menu.Item
						onClick={updateServerModal.openModal}
						rightSection={<IconSettings />}
					>
						Update Server
					</Menu.Item>
				)}
				{isAdmin && (
					<Menu.Item
						onClick={manageMembersModal.openModal}
						rightSection={<IconUsers />}
					>
						Manage Members
					</Menu.Item>
				)}
				{isModerator && (
					<Menu.Item
						onClick={createChannelModal.openModal}
						rightSection={<IconLinkPlus />}
					>
						Create Channel
					</Menu.Item>
				)}
				{isModerator && <Divider />}
				{isAdmin && (
					<Menu.Item
						onClick={deleteServerModal.openModal}
						color="red"
						rightSection={<IconTrash />}
					>
						<Text>Delete Server</Text>
					</Menu.Item>
				)}
				{!isAdmin && (
					<Menu.Item
						onClick={leaveServerModal.openModal}
						color="red"
						rightSection={<IconX />}
					>
						<Text>Leave Server</Text>
					</Menu.Item>
				)}
			</Menu.Dropdown>
		</Menu>
	);
};

export default ServerHeader;
