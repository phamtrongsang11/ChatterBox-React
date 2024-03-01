import { Outlet } from 'react-router-dom';
import MobileSidebar from '../components/navigation/MobileSidebar';

function ChannelLayout() {
	return (
		<>
			<MobileSidebar />
			<Outlet />
		</>
	);
}

export default ChannelLayout;
