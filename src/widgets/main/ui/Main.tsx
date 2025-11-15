import { ScoreCard } from './ScoreCard';
import { HealthProductivityChart } from './HealthProductivityChart';

export const Main = () => {
    return (
        <main className="h-full px-4 flex flex-col justify-around">
            <section className="flex justify-around w-full">
                <ScoreCard title="Productivity" value={92} color="blue" />
                <ScoreCard title="Sleep" value={71} color="purple" />
                <ScoreCard title="Activity" value={78} color="green" />
            </section>

            <HealthProductivityChart />

            {/* <article className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <h3 className="text-sm font-semibold mb-2 text-white">
                    KEY INSIGHT
                </h3>
                <p className="text-sm text-gray-400">
                    Your productivity is 13% higher on days with higher
                    physical activity.
                </p>
            </article> */}
        </main>
    );
};
