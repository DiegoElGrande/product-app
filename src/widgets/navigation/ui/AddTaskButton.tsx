'use client';

import { useState } from 'react';
import { CreateTaskModal } from '@/features/create-task';

export const AddTaskButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="relative z-10 -translate-y-5 size-13 flex flex-col items-center justify-center ring-1 rounded-xl bg-white"
            >
                <div className="text-black">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            <CreateTaskModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};
