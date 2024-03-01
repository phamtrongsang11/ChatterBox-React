import { ApolloProvider } from '@apollo/client';
import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from '@clerk/clerk-react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import client from './apolloClient.ts';
import DeleteChannelModal from './components/modals/channel/DeleteChannelModal.tsx';
import UpdatMessageModal from './components/modals/chat/UpdateMessageModal.tsx';
import ManageMemberModal from './components/modals/member/ManageMemberModal.tsx';
import CreateChannelModal from './components/modals/server/CreateChannelModal.tsx';
import CreateServerModal from './components/modals/server/CreateServerModal.tsx';
import DeleteServerModal from './components/modals/server/DeleteServerModal.tsx';
import InviteModal from './components/modals/server/InviteModal.tsx';
import LeaveServerModal from './components/modals/server/LeaveServerModal.tsx';
import ServerJoinModal from './components/modals/server/ServerJoinModal.tsx';
import UpdateServerModal from './components/modals/server/UpdateServerModal.tsx';
import './index.css';
import ChannelLayout from './layouts/ChannelLayout.tsx';
import RootLayout from './layouts/RootLayout.tsx';
import ServerLayout from './layouts/ServerLayout.tsx';
import ChannelPage from './pages/ChannelPage.tsx';
import ConversationPage from './pages/ConversationPage.tsx';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<SignedIn>{children}</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
};

const RouterComponent = () => {
	const navigate = useNavigate();

	return (
		<ClerkProvider
			publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
			navigate={(to) => navigate(to)}
		>
			<Routes>
				<Route path="" element={<RootLayout />}>
					<Route
						index
						element={
							<ProtectedRoute>
								<ServerJoinModal />
								<CreateServerModal />
							</ProtectedRoute>
						}
					/>
				</Route>

				<Route path="servers/:serverId" element={<ServerLayout />}>
					<Route
						index
						element={
							<ProtectedRoute>
								<CreateChannelModal />
							</ProtectedRoute>
						}
					/>
				</Route>

				<Route
					path="servers/:serverId/channels/:channelType/:channelId"
					element={<ChannelLayout />}
				>
					<Route
						index
						element={
							<ProtectedRoute>
								<LeaveServerModal />
								<UpdatMessageModal />
								<ManageMemberModal />
								<ServerJoinModal />
								<DeleteServerModal />
								<DeleteChannelModal />
								<CreateChannelModal />
								<UpdateServerModal />
								<CreateChannelModal />
								<InviteModal />
								<ChannelPage />
							</ProtectedRoute>
						}
					/>
				</Route>
				<Route
					path="servers/:serverId/conversations/:conversationId/members/:channelType/:memberId"
					element={<ChannelLayout />}
				>
					<Route
						index
						element={
							<ProtectedRoute>
								<LeaveServerModal />
								<UpdatMessageModal />
								<ManageMemberModal />
								<ServerJoinModal />
								<DeleteServerModal />
								<DeleteChannelModal />
								<CreateChannelModal />
								<UpdateServerModal />
								<CreateChannelModal />
								<InviteModal />
								<ConversationPage />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</ClerkProvider>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<MantineProvider>
				<BrowserRouter>
					<RouterComponent />
				</BrowserRouter>
			</MantineProvider>
		</ApolloProvider>
	</React.StrictMode>
);

export default RouterComponent;
