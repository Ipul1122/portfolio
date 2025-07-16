import { useState } from "react";

const Contact = () => {
const [form, setForm] = useState({
    nama: "",
    telepon: "",
    pesan: "",
});

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSend = (e) => {
    e.preventDefault();
    const { nama, telepon, pesan } = form;
    const message = `Halo, Kak saya ${nama}%0ANo Telp : ${telepon}%0APesan : ${encodeURIComponent(pesan)}`;
    const nomorTujuan = "6285693672730";
    const url = `https://wa.me/${nomorTujuan}?text=${message}`;
    window.open(url, "_blank");
};

return (
    <section
    id="contact"
    className="py-16 bg-gradient-to-br bg:white dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"
    >
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white dark:text-white">Kontak Saya</h2>

        <div className="flex justify-center">
        <form
            onSubmit={handleSend}
            className="w-full max-w-md bg-white dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl shadow-lg space-y-4"
        >
            <div>
            <label className="block text-sm font-medium text-gray-300 dark:text-white">Nama</label>
            <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                placeholder="Masukkan nama anda"
                className="mt-1 block w-full p-2 bg-white dark:bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-300 dark:text-white">No. Telepon</label>
            <input
                type="tel"
                name="telepon"
                value={form.telepon}
                onChange={handleChange}
                required
                pattern="[0-9]+"
                placeholder="081234567890"
                className="mt-1 block w-full p-2 bg-white dark:bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-300 dark:text-white">Pesan</label>
            <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Halo, saya mau berbisnis dengan Anda..."
                className="mt-1 block w-full p-2 bg-white dark:bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
            </div>

            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
            Kirim ke WhatsApp
            </button>
        </form>
        </div>
    </div>
    </section>
);
};

export default Contact;
