import { Header as HeaderContent } from './Header';
import { MobileNavProvider } from './MobileNavProvider';

export const Header = () => {
	return (
		<MobileNavProvider>
			<HeaderContent />
		</MobileNavProvider>
	);
};
