import { Header } from '@/widgets';
import { NavigationWrapper } from './NavigationWrapper';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <NavigationWrapper />
        </>
    );
}
