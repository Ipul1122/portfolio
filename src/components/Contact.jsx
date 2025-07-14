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

    // Enkode pesan untuk URL ke whatsapp
    const message = `Halo, Kak saya ${nama}%0ANo Telp : ${telepon}%0APesan :${encodeURIComponent(pesan)}`;


    // Ganti nomor WhatsApp tujuan di bawah ini
    const nomorTujuan = "6285693672730";
    const url = `https://wa.me/${nomorTujuan}?text=${message}`;

    window.open(url, "_blank");
};

return (
    <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Kontak Saya</h2>

        <div className="grid md:grid-cols-2 gap-10">
        {/* Google Maps */}
        <div className="w-full h-80">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.162499912432!2d106.78143601314383!3d-6.161508536551134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7003b1e2f63%3A0xfc5f3bac3ccea4e4!2sMasjid%20Jami%20Al%20ikhlas!5e0!3m2!1sid!2sid!4v1752451899834!5m2!1sid!2sid"
            width="100%"
            height="125%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow"
            ></iframe>
        </div>

        {/* Form */}
        <form
            onSubmit={handleSend}
            className="bg-blue-100 p-6 rounded-xl shadow space-y-4"
        >
            <div>
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                placeholder="Masukkan nama anda"
                className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
            <input
                type="tel"
                name="telepon"
                value={form.telepon}
                onChange={handleChange}
                required
                pattern="[0-9]+"
                placeholder="081234567890"
                className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Pesan</label>
            <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Halo, saya mau berbisnis dengan Anda..."
                className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
            </div>

            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
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
