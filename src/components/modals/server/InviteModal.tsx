import { useMutation } from '@apollo/client';
import { Button, Flex, Modal, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useClipboard } from '@mantine/hooks';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import {
	UpdateServerWithNewInviteCodeMutation,
	UpdateServerWithNewInviteCodeMutationVariables,
} from '../../../gql/graphql';
import { UPDATE_SERVER_WITH_NEW_INVITE_CODE } from '../../../graphql/mutations/server/UpdateServerWithNewInviteCode';
import { useServer } from '../../../hooks/graphql/server/useServer';
import { useModal } from '../../../hooks/useModal';

function InviteModal() {
	const { isOpen, closeModal } = useModal('InvitePeople');
	const { server } = useServer();

	const clipboard = useClipboard({
		timeout: 1000,
	});

	const [updateServerWithNewInviteCode, { loading }] = useMutation<
		UpdateServerWithNewInviteCodeMutation,
		UpdateServerWithNewInviteCodeMutationVariables
	>(UPDATE_SERVER_WITH_NEW_INVITE_CODE, {
		variables: {
			serverId: server?.id,
		},
	});

	const form = useForm({
		initialValues: {
			inviteCode: '',
		},
	});
	useEffect(() => {
		if (!server?.inviteCode) return;

		form.setValues({
			inviteCode: server?.inviteCode,
		});
	}, [server?.inviteCode]);
	const ref = useRef<HTMLInputElement>(null);
	return (
		<Modal opened={isOpen} onClose={closeModal} title="Invite People">
			<Stack>
				<Flex>
					<TextInput
						ref={ref}
						label="Server Invite Code"
						w="100%"
						{...form.getInputProps('inviteCode')}
						rightSection={
							<Button
								variant="transparent"
								onClick={() => {
									clipboard.copy(ref.current?.value || '');
								}}
								style={{ overflow: 'visible' }}
							>
								{!clipboard.copied ? <IconCopy /> : <IconCheck color="green" />}
							</Button>
						}
					/>
				</Flex>

				<Button
					disabled={loading}
					onClick={() => updateServerWithNewInviteCode()}
				>
					<Text mr="md">Generate New Invite Code</Text>
				</Button>
			</Stack>
		</Modal>
	);
}

export default InviteModal;
