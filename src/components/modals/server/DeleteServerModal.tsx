import { useMutation } from '@apollo/client';
import { Button, Modal, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import {
	DeleteServerMutation,
	DeleteServerMutationVariables,
} from '../../../gql/graphql';
import { DELETE_SERVER } from '../../../graphql/mutations/server/DeleteServer';
import { useServer } from '../../../hooks/graphql/server/useServer';
import { useModal } from '../../../hooks/useModal';

function DeleteServerModal() {
	const { isOpen, closeModal } = useModal('DeleteServer');
	const { server } = useServer();

	const [deleteServer, { loading }] = useMutation<
		DeleteServerMutation,
		DeleteServerMutationVariables
	>(DELETE_SERVER, {
		variables: {
			serverId: server?.id,
		},
		refetchQueries: ['GetServers'],
		onCompleted: () => {
			closeModal();
			navigate('/');
		},
	});
	const navigate = useNavigate();

	return (
		<Modal opened={isOpen} onClose={closeModal} title="Delete Server">
			<Text fw={700}>Are you sure you want to delete this server?</Text>
			<Button
				mt="md"
				loading={loading}
				color="red"
				onClick={() => deleteServer()}
			>
				Delete Server
			</Button>
		</Modal>
	);
}

export default DeleteServerModal;
