const About = () => {
return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tentang Saya</h2>

        <div className="grid md:grid-cols-2 gap-10">
        {/* KIRI: Informasi Pribadi & Pendidikan */}
        <div className="space-y-8">
            {/* Info Pribadi */}
            <div>
            <h3 className="text-xl font-semibold mb-3">Informasi Pribadi</h3>
            <p>Saya Muhammad Syaifulloh seorang mahasiswa akhir yang aktif dan merain nilai IPK diatas 3.0
                <br />
                Saya memiliki pengalaman dalam pengembangan web, terutama dengan teknologi seperti Laravel, React, dan Tailwind CSS.
                <br />
            </p>
            </div>

            {/* Timeline Pendidikan */}
            <div>
            <h3 className="text-xl font-semibold mb-3">Pendidikan</h3>
            <ul className="border-l-2 border-blue-500 space-y-4 pl-4">
                <li>
                <div className="text-sm">
                    <p className="font-semibold">2022 - 2025</p>
                    <p>Akademik Teknik Informatika Tunas Bangsa</p>
                </div>
                </li>
                <li>
                <div className="text-sm">
                    <p className="font-semibold">2019 - 2022</p>
                    <p>SMK Tanjung </p>
                </div>
                </li>
            </ul>
            </div>
        </div>

        {/* KANAN: Timeline Pengalaman Kerja */}
        <div className="space-y-8">
            <div>
            <h3 className="text-xl font-semibold mb-3">Pengalaman Kerja</h3>
            <ul className="border-l-2 border-green-500 space-y-4 pl-4">
                <li>
                <div className="text-sm">
                    <p className="font-semibold">2024 - Sekarang</p>
                    <p>Freelance Web Developer</p>
                    <p className="text-gray-500 dark:text-gray-400">Mengerjakan project personal & client (Laravel, React, Tailwind, Native)</p>
                </div>
                </li>
                <li>
                <div className="text-sm">
                    <p className="font-semibold">2025</p>
                    <p>Asisten Dosen Pemrograman</p>
                    <p className="text-gray-500 dark:text-gray-400">Membantu mengajar materi flowchart, DFD, ERD dan bahasa Pemrograman</p>
                </div>
                </li>
                <li>
                <div className="text-sm">
                    <p className="font-semibold">Februari - Mei 2025</p>
                    <p>Magang di PT. Radar Teknologi Komputer (IT and Edutech Solutions)</p>
                    <ul className="list-disc ml-5 text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                    <li>Mengerjakan project mengenai story telling atas bencana alam yang disebabkan oleh manusia.</li>
                    <li>Membangun portfolio dinamis menggunakan Laravel.</li>
                    <li>Mengembangkan project bisnis laundry.</li>
                    </ul>
                </div>
                </li>

            </ul>
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default About;
