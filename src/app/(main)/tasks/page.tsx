import type { Metadata } from 'next';
import { TasksList } from '@/widgets';

export const metadata: Metadata = {
    title: 'Tasks | Product App',
    description: 'Tasks management page',
};

export default function TasksPage() {
    return <TasksList />;
}

