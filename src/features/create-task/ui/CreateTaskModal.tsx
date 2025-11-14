'use client';

import { useState, useEffect } from 'react';

interface CreateTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateTaskModal = ({
    isOpen,
    onClose,
}: CreateTaskModalProps) => {
    const [taskName, setTaskName] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Небольшая задержка для плавной анимации появления
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            // Анимация закрытия
            setIsAnimating(false);
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика создания задачи
        console.log('Создание задачи:', {
            taskName,
            estimatedTime: estimatedTime ? parseInt(estimatedTime) : undefined,
        });
        setTaskName('');
        setEstimatedTime('');
        onClose();
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCancel = () => {
        setTaskName('');
        setEstimatedTime('');
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleOverlayClick}
        >
            <div
                className={`bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-800 transition-all duration-300 ${
                    isAnimating
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 translate-y-4'
                }`}
            >
                <h2 className="text-2xl font-bold text-white mb-6">
                    Create New Task
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Task Name Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="taskName"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Task Name
                        </label>
                        <div className="relative">
                            <input
                                id="taskName"
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter task name"
                                required
                            />
                            {taskName && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 animate-in fade-in zoom-in duration-200">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="transition-all duration-200"
                                    >
                                        <path
                                            d="M16.667 5L7.5 14.167 3.333 10"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <p className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M13.333 4L6 11.333 2.667 8"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            e.g, Finish Project Report
                        </p>
                    </div>

                    {/* Estimated Time Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="estimatedTime"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Estimated Time (min)
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-3 text-gray-400">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <circle
                                        cx="10"
                                        cy="10"
                                        r="8.333"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M10 5v5l3.333 2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <input
                                id="estimatedTime"
                                type="number"
                                value={estimatedTime}
                                onChange={(e) =>
                                    setEstimatedTime(e.target.value)
                                }
                                className="w-full px-4 py-3 pl-11 pr-11 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                placeholder="0"
                                min="0"
                            />
                            <div className="absolute right-3 text-gray-400">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <circle
                                        cx="10"
                                        cy="10"
                                        r="8.333"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M10 5v5l3.333 2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 active:scale-95 transition-all duration-200 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-200 font-medium hover:shadow-lg hover:shadow-green-500/20"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

