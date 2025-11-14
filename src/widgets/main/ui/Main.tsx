interface ScoreCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    change?: string;
    icon?: React.ReactNode;
    color: 'blue' | 'purple' | 'green';
}

const ScoreCard = ({
    title,
    value,
    subtitle,
    change,
    icon,
    color,
}: ScoreCardProps) => {
    const colorClasses = {
        blue: 'bg-blue-500/20 border-blue-500/30',
        purple: 'bg-purple-500/20 border-purple-500/30',
        green: 'bg-green-500/20 border-green-500/30',
    };

    const textColors = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        green: 'text-green-400',
    };

    return (
        <div
            className={`rounded-xl p-4 border ${colorClasses[color]} relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20`}
        >
            {icon && (
                <div
                    className={`absolute top-2 right-2 ${textColors[color]}`}
                >
                    {icon}
                </div>
            )}
            <div className="text-gray-400 text-xs mb-1">{title}</div>
            <div className="text-white text-2xl font-bold">{value}</div>
            {subtitle && (
                <div className="text-gray-400 text-xs mt-1">
                    {subtitle}
                </div>
            )}
            {change && (
                <div className="text-gray-500 text-xs mt-1">{change}</div>
            )}
        </div>
    );
};

export const Main = () => {
    const sleepIcon = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M8 2V4M8 12V14M2 8H4M12 8H14M3.757 3.757L5.172 5.172M10.828 10.828L12.243 12.243M3.757 12.243L5.172 10.828M10.828 5.172L12.243 3.757"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <circle
                cx="8"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );

    const activityIcon = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M8 2L10 6L14 8L10 10L8 14L6 10L2 8L6 6L8 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    // Mock data for the graph
    const graphData = [
        { day: 'Mon', health: 35, productivity: 30 },
        { day: 'Tue', health: 40, productivity: 35 },
        { day: 'Wed', health: 38, productivity: 32 },
        { day: 'Thu', health: 45, productivity: 40 },
        { day: 'Fri', health: 50, productivity: 45 },
        { day: 'Sat', health: 48, productivity: 42 },
        { day: 'Sun', health: 55, productivity: 50 },
    ];

    const maxValue = 60;
    const graphHeight = 120;
    const graphWidth = 280;

    return (
        <main className="px-4 py-6">
            {/* Score Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <ScoreCard
                    title="Productivity Score"
                    value={92}
                    change="-3"
                    color="blue"
                />
                <ScoreCard
                    title="Sleep Score"
                    value="7.1"
                    subtitle="HOURS"
                    icon={sleepIcon}
                    color="purple"
                />
                <ScoreCard
                    title="Activity Score"
                    value="7,850"
                    subtitle="STEPS"
                    icon={activityIcon}
                    color="green"
                />
                <ScoreCard
                    title="Sleep Score"
                    value="8.3"
                    subtitle="HOURS"
                    icon={sleepIcon}
                    color="purple"
                />
            </div>

            {/* Graph Section */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 text-white">
                    Health & Productivity Correlation (Last 7 Days)
                </h2>
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                    <div
                        className="relative"
                        style={{ height: `${graphHeight}px` }}
                    >
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                            <span>60</span>
                            <span>40</span>
                            <span>20</span>
                            <span>0</span>
                        </div>

                        {/* Graph area */}
                        <div className="ml-8 h-full relative">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[0, 1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="border-t border-gray-800"
                                        style={{
                                            height: `${graphHeight / 3}px`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Graph lines */}
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                                preserveAspectRatio="none"
                            >
                                {/* Health line (green) */}
                                <polyline
                                    points={graphData
                                        .map(
                                            (d, i) =>
                                                `${
                                                    (i /
                                                        (graphData.length -
                                                            1)) *
                                                    graphWidth
                                                },${
                                                    graphHeight -
                                                    (d.health / maxValue) *
                                                        graphHeight
                                                }`,
                                        )
                                        .join(' ')}
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {graphData.map((d, i) => (
                                    <circle
                                        key={`health-${i}`}
                                        cx={
                                            (i / (graphData.length - 1)) *
                                            graphWidth
                                        }
                                        cy={
                                            graphHeight -
                                            (d.health / maxValue) *
                                                graphHeight
                                        }
                                        r="4"
                                        fill="#10b981"
                                    />
                                ))}

                                {/* Productivity line (blue) */}
                                <polyline
                                    points={graphData
                                        .map(
                                            (d, i) =>
                                                `${
                                                    (i /
                                                        (graphData.length -
                                                            1)) *
                                                    graphWidth
                                                },${
                                                    graphHeight -
                                                    (d.productivity /
                                                        maxValue) *
                                                        graphHeight
                                                }`,
                                        )
                                        .join(' ')}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {graphData.map((d, i) => (
                                    <circle
                                        key={`prod-${i}`}
                                        cx={
                                            (i / (graphData.length - 1)) *
                                            graphWidth
                                        }
                                        cy={
                                            graphHeight -
                                            (d.productivity / maxValue) *
                                                graphHeight
                                        }
                                        r="4"
                                        fill="#3b82f6"
                                    />
                                ))}
                            </svg>

                            {/* X-axis labels */}
                            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                                {graphData.map((d) => (
                                    <span key={d.day}>{d.day}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-4 mt-8 text-xs">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-400">Health</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-gray-400">
                                Productivity
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <h3 className="text-sm font-semibold mb-2 text-white">
                    KEY INSIGHT
                </h3>
                <p className="text-sm text-gray-400">
                    Your productivity is 13% higher on days with higher
                    physical activity.
                </p>
            </div>
        </main>
    );
};
