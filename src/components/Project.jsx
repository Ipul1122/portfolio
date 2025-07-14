import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // atau pakai icon lain jika tersedia

const Project = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const projects = [
{
    title: "Sistem Presensi TPA",
    description: "Website presensi murid TPA berbasis Laravel dengan fitur absensi, jadwal, statistik, dan notifikasi.",
    image: "/projects/tpa-presensi.png",
    github: "https://github.com/Ipul1122/management-presensi-",
    live: "https://tpa-presensi.vercel.app",
    technologies: [
    { name: "Laravel", icon: "/skills-icons/programmingIcons/laravel-icon.svg" },
    { name: "Tailwind CSS", icon: "/skills-icons/programmingIcons/tailwindcss-icon.svg" },
    { name: "MySQL", icon: "/skills-icons/programmingIcons/mysql-icon.svg" },
    ],
},
{
    title: "Portofolio Pribadi",
    description: "Website portofolio untuk menampilkan informasi pribadi, skill, project, dan kontak.",
    image: "/projects/portfolio.png",
    github: "https://github.com/Ipul1122",
    live: "https://portfolio-muhammad.vercel.app",
    technologies: [
    { name: "React JS", icon: "/tech/react.png" },
    { name: "Next.js", icon: "/tech/nextjs.png" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    ],
},
];

const handlePrev = () => {
setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
};

const handleNext = () => {
setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
};

const project = projects[currentIndex];

return (
<section id="projects" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Project Saya</h2>

    <div className="relative max-w-3xl mx-auto ">
        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl">
        <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full object-cover h-56"
        />
        <div className="p-6 flex flex-col items-center text-center gap-y-4">
            <h3 className="text-xl font-semibold text-gray-900 text-center">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>

            <div className="mt-4">
            <p className="sm:text-sm md:text-xl lg:text-2xl font-medium text-gray-700 mb-5">Teknologi:</p>
            <div className="flex flex-wrap items-center gap-4">
                {project.technologies.map((tech, idx) => (
                <div key={idx} className="relative group">
                    <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="cursor-pointer"
                    />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md 
                    bg-black text-white text-xs opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 whitespace-nowrap z-10">
                    {tech.name}
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Tombol */}
            <div className="mt-6 flex gap-4">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition"
            >
                GitHub
            </a>
            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
            >
                Live Demo
            </a>
            </div>
        </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="absolute inset-y-0 left-0 flex items-center">
        <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            aria-label="Sebelumnya"
        >
            <ChevronLeft />
        </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
        <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            aria-label="Selanjutnya"
        >
            <ChevronRight />
        </button>
        </div>
    </div>
    </div>
</section>
);
};

export default Project;
