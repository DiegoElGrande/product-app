'use client';

import Link from 'next/link';
import React from 'react';
import { TasksIcon } from './TasksIcon';

interface TasksLinkProps {
    isActive?: boolean;
}

export const TasksLink = ({ isActive = false }: TasksLinkProps) => {
    return (
        <Link
            href="/tasks"
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
        >
            <div
                className={`transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-500'
                }`}
            >
                <TasksIcon />
            </div>
            <span className="text-xs font-medium">Tasks</span>
        </Link>
    );
};

