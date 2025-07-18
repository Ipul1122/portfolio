import { useState } from "react";
import { Phone, User, MessageCircle, Send } from "lucide-react";

const Contact = () => {
const [form, setForm] = useState({
nama: "",
telepon: "",
pesan: "",
countryCode: "+62",
});

const countryCodes = [
{ code: "+62", country: "Indonesia", flag: "🇮🇩" },
{ code: "+60", country: "Malaysia", flag: "🇲🇾" },
{ code: "+65", country: "Singapore", flag: "🇸🇬" },
{ code: "+66", country: "Thailand", flag: "🇹🇭" },
{ code: "+84", country: "Vietnam", flag: "🇻🇳" },
{ code: "+63", country: "Philippines", flag: "🇵🇭" },
{ code: "+1", country: "USA", flag: "🇺🇸" },
{ code: "+44", country: "UK", flag: "🇬🇧" },
{ code: "+91", country: "India", flag: "🇮🇳" },
{ code: "+86", country: "China", flag: "🇨🇳" },
];

const handleChange = (e) => {
const { name, value } = e.target;

if (name === "telepon") {
    // Only allow numbers
    const numericValue = value.replace(/\D/g, "");
    setForm({ ...form, [name]: numericValue });
} else {
    setForm({ ...form, [name]: value });
}
};

const handleSend = (e) => {
e.preventDefault();
const { nama, telepon, pesan, countryCode } = form;

// Clean phone number and add country code
const cleanedPhone = telepon.replace(/\D/g, "");
let fullPhoneNumber = countryCode.replace("+", "") + cleanedPhone;

// Remove leading zero if exists for Indonesian numbers
if (countryCode === "+62" && cleanedPhone.startsWith("0")) {
    fullPhoneNumber = "62" + cleanedPhone.substring(1);
}

const message = `Halo, Kak saya ${nama}%0ANo Telp : ${countryCode}${cleanedPhone}%0APesan : ${encodeURIComponent(pesan)}`;
const nomorTujuan = "6285693672730";
const url = `https://wa.me/${nomorTujuan}?text=${message}`;
window.open(url, "_blank");
};

return (
<section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 px-4 py-16"
>
    <div className="w-full max-w-lg">
    <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        Hubungi Saya
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
        Kirim pesan langsung ke WhatsApp
        </p>
    </div>

    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 dark:shadow-slate-900/50">
        {/* Nama Input */}
        <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <User className="w-4 h-4" />
            Nama Lengkap
        </label>
        <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        </div>

        {/* Phone Input */}
        <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <Phone className="w-4 h-4" />
            Nomor Telepon
        </label>
        <div className="flex gap-2">
            <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="px-3 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
            {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                {item.flag} {item.code}
                </option>
            ))}
            </select>
            <input
            type="tel"
            name="telepon"
            value={form.telepon}
            onChange={handleChange}
            required
            placeholder="81234567890"
            className="flex-1 px-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Hanya masukkan angka tanpa awalan 0
        </p>
        </div>

        {/* Message Input */}
        <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <MessageCircle className="w-4 h-4" />
            Pesan
        </label>
        <textarea
            name="pesan"
            value={form.pesan}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tulis pesan Anda di sini..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
        ></textarea>
        </div>

        {/* Submit Button */}
        <button
        type="submit"
        onClick={handleSend}
        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
        <Send className="w-5 h-5" />
        Kirim ke WhatsApp
        </button>
    </div>
    </div>
</section>
);
};

export default Contact;