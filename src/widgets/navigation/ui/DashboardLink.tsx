'use client';

import Link from 'next/link';
import { HomeIcon } from './HomeIcon';

interface DashboardLinkProps {
    isActive?: boolean;
}

export const DashboardLink = ({
    isActive = false,
}: DashboardLinkProps) => {
    return (
        <Link
            href="/"
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95 ${
                isActive
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300'
            }`}
        >
            <HomeIcon
                className={`transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-500'
                }`}
            />
            <span className="text-xs font-medium">Home</span>
        </Link>
    );
};
