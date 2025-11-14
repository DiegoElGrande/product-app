import type { Metadata } from 'next';
import { Main } from '@/widgets';

export const metadata: Metadata = {
    title: 'Dashboard | Product App',
    description: 'Main dashboard page',
};

export default function Home() {
    return <Main />;
}
