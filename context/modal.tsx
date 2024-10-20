'use client';

import {
    FC,
    PropsWithChildren,
    useMemo,
    useContext,
    useState,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';

type ModalContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    openModal: () => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const value = useMemo(
        () => ({
            isOpen,
            setIsOpen,
            openModal,
            closeModal,
        }),
        [isOpen],
    );

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
