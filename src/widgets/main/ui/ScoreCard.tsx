interface ScoreCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    change?: string;
    icon?: React.ReactNode;
    color: 'blue' | 'purple' | 'green';
}

export const ScoreCard = ({ title, value, color }: ScoreCardProps) => {
    const colorClasses = {
        blue: 'bg-blue-500/20 border-blue-500/30',
        purple: 'bg-purple-500/20 border-purple-500/30',
        green: 'bg-green-500/20 border-green-500/30',
    };

    const strokeColors = {
        blue: '#3b82f6',
        purple: '#a855f7',
        green: '#22c55e',
    };

    // Преобразуем value в число (если это строка, пытаемся извлечь число)
    const numericValue =
        typeof value === 'number'
            ? value
            : parseInt(String(value), 10) || 0;
    // Ограничиваем значение от 0 до 100
    const percentage = Math.min(Math.max(numericValue, 0), 100);

    // Параметры для 3/4 круга
    const radius = 40;
    const strokeWidth = 6;
    const circumference = (2 * Math.PI * radius * 3) / 4; // Длина 3/4 круга
    const offset = circumference - (percentage / 100) * circumference;

    // Центр круга
    const centerX = 48;
    const centerY = 48;

    return (
        <article
            className={`relative size-30 flex flex-col justify-center items-center overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20`}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 96 96"
                className="absolute top-0 left-0"
            >
                <path
                    d={`M ${centerX} ${
                        centerY + radius
                    } A ${radius} ${radius} 0 1 1 ${
                        centerX + radius
                    } ${centerY}`}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                {/* Заполненный 3/4 круг */}
                <path
                    d={`M ${centerX} ${
                        centerY + radius
                    } A ${radius} ${radius} 0 1 1 ${
                        centerX + radius
                    } ${centerY}`}
                    fill="none"
                    stroke={strokeColors[color]}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-500 ease-out"
                />
            </svg>
            <div className="text-white text-xl font-bold z-10">
                {value}
            </div>
            <h2 className="text-gray-400 text-xs">{title}</h2>
        </article>
    );
};
