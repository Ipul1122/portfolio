import { FaHtml5, FaReact, FaLaravel } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { useState } from 'react';

export default function Hero() {

    const [showFullText, setShowFullText] = useState(false);
    const textOverflow = "A final undergraduate management informatics students. I do love building a website from static and dynamic. Able to work alone or with team, good communication, highly adaptable to new environments, and willingly accept critiscm as a contribution for efficiency. "
    const limited = textOverflow.length > 30 ? textOverflow.slice(0, 32) + '...' : textOverflow;

return (
    <section
    id="hero"
    className="min-h-screen flex items-center justify-center bg-white px-6"
    >
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
        <p className="text-lg text-gray-700 ">Hey, I'm Muhammad Syaifulloh 👋</p>

        <h1 className="text-6xl font-extrabold leading-tight">
            <span className="text-blue-600">Junior</span>
            <span className="text-gray-900"> Web</span> <br />
            <span className="text-gray-900">Developer</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-xl">
            {showFullText ? textOverflow : limited}
        </p>
        <button onClick={() => setShowFullText(!showFullText)}
            className='text-sm text-blue-600 hover:underline mt-2'>
                {showFullText ? 'Tampilkan Sedikit' : 'Tampilkan Selengkapnya'}
        </button>

        <div className="flex gap-4">
            <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
            My Resume
            </a>
            <a
            href="#projects"
            className="border border-blue-800 text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
            My Projects
            </a>
        </div>
        </div>

        {/* Right */}
        <div className="relative w-full flex justify-center">
        {/* Foto Profil */}
        <img
            src="ipul.jpeg" // Ganti dengan foto kamu
            alt="Foto Profil"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-300 shadow-lg"
        />

        {/* Ikon Mengambang */}
        <FaHtml5 className="text-orange-600 text-3xl absolute top-0 left-1/4 animate-bounce" />
        <FaReact className="text-blue-500 text-3xl absolute top-1/4 right-14 animate-bounce delay-100" />
        <FaLaravel className="text-red-600 text-3xl absolute bottom-1/4 left-14 animate-bounce delay-200" />
        <SiNextdotjs className="text-black text-3xl absolute bottom-0 right-1/4 animate-bounce delay-300" />
        </div>
    </div>
    </section>
)
}
