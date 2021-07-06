import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';

interface MobileNavContext {
    mobileNavOpened: boolean;
    setMobileNavOpened: Dispatch<SetStateAction<boolean>>;
}

const mobileNavContext = createContext<MobileNavContext>({
    mobileNavOpened: false,
    setMobileNavOpened: () => ({}),
});

export const useMobileNav = (): MobileNavContext =>
    useContext(mobileNavContext);

interface Props {
    children: ReactNode;
}

export const MobileNavProvider = ({ children }: Props): JSX.Element => {
    const [mobileNavOpened, setMobileNavOpened] = useState(false);

    return (
        <mobileNavContext.Provider
            value={{ mobileNavOpened, setMobileNavOpened }}
        >
            {children}
        </mobileNavContext.Provider>
    );
};
