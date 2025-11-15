'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from '@/widgets';

function getActiveTab(pathname: string): 'dashboard' | 'tasks' {
    if (pathname === '/tasks') {
        return 'tasks';
    }
    return 'dashboard';
}

export function NavigationWrapper() {
    const pathname = usePathname();
    const activeTab = getActiveTab(pathname);

    return <Navigation activeTab={activeTab} />;
}
