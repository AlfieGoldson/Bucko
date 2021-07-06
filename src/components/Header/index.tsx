import { Header as HeaderContent } from './Header';
import { MobileNavProvider } from './MobileNavProvider';

export const Header = (): JSX.Element => {
    return (
        <MobileNavProvider>
            <HeaderContent />
        </MobileNavProvider>
    );
};
