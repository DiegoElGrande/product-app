'use client';

import React from 'react';

interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    priority?: 'high' | 'medium' | 'low';
}

export const TasksList = () => {
    // Mock данные для задач
    const tasks: Task[] = [
        {
            id: '1',
            title: 'Завершить проект',
            description: 'Доработать финальные детали',
            completed: false,
            priority: 'high',
        },
        {
            id: '2',
            title: 'Провести встречу с командой',
            description: 'Обсудить планы на следующую неделю',
            completed: false,
            priority: 'medium',
        },
        {
            id: '3',
            title: 'Обновить документацию',
            completed: true,
            priority: 'low',
        },
        {
            id: '4',
            title: 'Проверить код',
            description: 'Code review для нового функционала',
            completed: false,
            priority: 'high',
        },
    ];

    const getPriorityColor = (priority?: string) => {
        switch (priority) {
            case 'high':
                return 'text-red-400';
            case 'medium':
                return 'text-yellow-400';
            case 'low':
                return 'text-green-400';
            default:
                return 'text-gray-400';
        }
    };

    const getPriorityLabel = (priority?: string) => {
        switch (priority) {
            case 'high':
                return 'Высокий';
            case 'medium':
                return 'Средний';
            case 'low':
                return 'Низкий';
            default:
                return '';
        }
    };

    return (
        <main className="px-4 py-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Мои задачи
                </h1>
                <p className="text-gray-400 text-sm">
                    Управляйте своими задачами и отслеживайте прогресс
                </p>
            </div>

            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        className={`bg-gray-900 rounded-xl p-4 border border-gray-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
                            task.completed
                                ? 'opacity-60'
                                : 'hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 cursor-pointer'
                        }`}
                        style={{
                            animationDelay: `${index * 50}ms`,
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                readOnly
                                className="mt-1 w-5 h-5 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900 transition-all duration-200 hover:scale-110 cursor-pointer"
                            />
                            <div className="flex-1">
                                <h3
                                    className={`text-white font-medium mb-1 ${
                                        task.completed
                                            ? 'line-through text-gray-500'
                                            : ''
                                    }`}
                                >
                                    {task.title}
                                </h3>
                                {task.description && (
                                    <p className="text-gray-400 text-sm mb-2">
                                        {task.description}
                                    </p>
                                )}
                                {task.priority && (
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`text-xs font-medium ${getPriorityColor(
                                                task.priority,
                                            )}`}
                                        >
                                            {getPriorityLabel(task.priority)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {tasks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400 mb-2">
                        У вас пока нет задач
                    </p>
                    <p className="text-gray-500 text-sm">
                        Нажмите кнопку "+tasks" для создания новой задачи
                    </p>
                </div>
            )}
        </main>
    );
};

