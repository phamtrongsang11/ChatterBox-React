import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';

import { useMutation } from '@apollo/client';
import { useAuth, useSession } from '@clerk/clerk-react';
import { CREATE_PROFILE } from '../graphql/mutations/CreateProfile';

import {
	CreateProfileMutation,
	CreateProfileMutationVariables,
} from '../gql/graphql';

import { useProfileStore } from '../stores/profileStore';

const RootLayout = () => {
	const profile = useProfileStore((state) => state.profile);
	const setProfile = useProfileStore((state) => state.setProfile);

	const { session } = useSession();
	const { isSignedIn } = useAuth();

	const [CreateProfile] = useMutation<
		CreateProfileMutation,
		CreateProfileMutationVariables
	>(CREATE_PROFILE, {});

	useEffect(() => {
		if (!isSignedIn) setProfile(null);
	}, [isSignedIn, setProfile]);

	useEffect(() => {
		const createProfileFn = async () => {
			if (!session?.user) return;

			try {
				await CreateProfile({
					variables: {
						input: {
							email: session?.user.emailAddresses[0].emailAddress,
							name: session?.user.fullName || '',
							imageUrl: session?.user.imageUrl,
						},
					},
					onCompleted: (data) => {
						setProfile(data.createProfile);
					},
					refetchQueries: ['GetServer'],
				});
			} catch (err) {
				console.log('Error creating profile in backend: ', err);
			}
		};
		if (profile?.id) return;
		createProfileFn();
	}, [session?.user, profile?.id]);

	return (
		<div>
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default RootLayout;
