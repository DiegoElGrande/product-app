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
        <nav className="flex flex-row justify-around shadow-[0_0_30px] shadow-amber-50/20 px-5 py-1 ">
            <DashboardLink isActive={activeTab === 'dashboard'} />
            <AddTaskButton />
            <TasksLink isActive={activeTab === 'tasks'} />
        </nav>
    );
};
