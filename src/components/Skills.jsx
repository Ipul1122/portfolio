export default function Skills() {
const programmingIcons = [
    "html-icon", "css-icon", "boostrap-icon", "tailwindcss-icon", "js-icon", "react-icon", 
    "nextJs-icon", "php-icon", "laravel-icon", "mysql-icon"
];

const toolIcons = ["vscode-icon", "git-icon", "github-icon", "figma-icon", "drawIo-icon", "canva-icon", "ai-icon"];

const SkillCategory = ({ title, icons, folder }) => (
    <div className="group">
    <h3 className="text-lg font-medium mb-6 text-gray-700 dark:text-gray-300 relative">
        {title}
        <div className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </h3>
            <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-4 md:p-6 max-w-4xl mx-auto">
        <div className="flex gap-3 md:gap-4 animate-loop-scroll justify-center">
        {[...Array(2)].map((_, index) => (
            <div className="flex gap-3 md:gap-4" key={index}>
            {icons.map((icon) => (
                <div
                key={icon + index}
                className="relative flex-shrink-0 group/icon"
                >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20">
                    <img
                    src={`/skills-icons/${folder}/${icon}.svg`}
                    alt={icon}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 grayscale group-hover/icon:grayscale-0 transition-all duration-300"
                    title={icon.replace('-icon', '').toUpperCase()}
                    />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
            </div>
        ))}
        </div>
    </div>
    </div>
);

return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Skills & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
        </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-12 md:gap-16">
        <SkillCategory 
            title="Programming" 
            icons={programmingIcons}
            folder="programmingIcons"
        />
        <SkillCategory 
            title="Tools" 
            icons={toolIcons}
            folder="toolsIcon"
        />
        </div>
    </div>

    <style jsx>{`
        @keyframes loop-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
        }
        
        .animate-loop-scroll {
        animation: loop-scroll 20s linear infinite;
        }
        
        .animate-loop-scroll:hover {
        animation-play-state: paused;
        }
    `}</style>
    </section>
);
}