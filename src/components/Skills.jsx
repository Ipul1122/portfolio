export default function Skills() {
const programmingIcons = [
    "html-icon", "css-icon", "boostrap-icon", "tailwindcss-icon", "js-icon", "react-icon", 
    "nextJs-icon", "php-icon", "laravel-icon", "mysql-icon"
];

const toolIcons = ["vscode-icon", "git-icon", "github-icon", "figma-icon", "drawIo-icon", "canva-icon", "ai-icon"];

return (
    <section id="skills" className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Skills</h2>

        {/* Programming */}
        <div className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Programming</h3>
        <div className="overflow-hidden">
            <div className="flex gap-2.5 animate-loop-scroll">
            {[...Array(2)].map((_, index) => (
                <div className="flex gap-2.5" key={index}>
                {programmingIcons.map((icon) => (
                    <img
                    key={icon + index}
                    src={`/skills-icons/programmingIcons/${icon}.svg`}
                    alt={icon}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out flex-shrink-0"
                    title={icon.toUpperCase()}
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
        </div>

        {/* Tools */}
        <div>
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <div className="overflow-hidden">
            <div className="flex gap-2.5 animate-loop-scroll">
            {[...Array(2)].map((_, index) => (
                <div className="flex gap-2.5" key={index}>
                {toolIcons.map((icon) => (
                    <img
                    key={icon + index}
                    src={`/skills-icons/toolsIcon/${icon}.svg`}
                    alt={icon}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out flex-shrink-0"
                    title={icon.toUpperCase()}
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
    </section>
);
}