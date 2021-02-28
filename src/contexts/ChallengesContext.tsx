import { createContext, ReactNode, useState } from 'react';
import { Modal } from '../components/Modal';

interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    closeModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        setLevel(level + 1);
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            levelUp,
            challengesCompleted,
            currentExperience,
            startNewChallenge,
            closeModal
        }}>
            {children}

            { isModalOpen && <Modal />}
        </ChallengesContext.Provider>
    );
}