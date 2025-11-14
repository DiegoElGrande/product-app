import { DashboardLink } from './DashboardLink';
import { TasksLink } from './TasksLink';
import { AddTaskButton } from './AddTaskButton';

interface NavigationProps {
    activeTab?: 'dashboard' | 'tasks';
}

export const Navigation = ({
    activeTab = 'dashboard',
}: NavigationProps) => {
    return (
        <nav className="flex flex-row justify-around px-5 my-2 ">
            <DashboardLink isActive={activeTab === 'dashboard'} />
            <AddTaskButton />
            <TasksLink isActive={activeTab === 'tasks'} />
        </nav>
    );
};
