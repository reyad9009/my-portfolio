import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    
    setFormData({ name: "", email: "", message: "" });

    navigate("/");

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We will get back to you soon!",
      icon: "success",
      confirmButtonColor: "#4F46E5",
      confirmButtonText: "OK",
    });
  };

  return (
    <div id="contact" className="flex items-center justify-center px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-br from-[#9263ff] to-[#6429ef] p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row "
      >
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-6">
          <h2 className="text-6xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="mt-4 rounded-lg text-white text-xl">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
          <p className="mt-4 text-lg text-white">Email: <a href="mailto:tarekhossen105@gmail.com" className="text-white">tarekhossen105@gmail.com</a></p>
          <p className="mt-2 text-lg text-white">Phone: <a href="tel:+8801585761668" className="text-white">+8801585761668</a></p>
        </div>
        
        <div className="md:w-1/2 p-6 rounded-lg ">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-white font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-lg"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-lg"
                placeholder="johndoe@example.com"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-lg"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#9263ff] text-white py-3 rounded-lg hover:opacity-90 transition duration-300 text-xl font-semibold shadow-md flex items-center justify-center gap-3"
            >
              <FaPaperPlane /> Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
