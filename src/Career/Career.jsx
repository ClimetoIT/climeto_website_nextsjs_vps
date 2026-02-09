import React, { useState } from "react";
import { Briefcase, MapPin, Clock, Send, X, CheckCircle, Sparkles, TrendingUp, Users } from "lucide-react";
import emailjs from "@emailjs/browser";

// Cloudinary details
const CLOUD_NAME = "day3dgjd9"; // Your Cloudinary cloud name
const UPLOAD_PRESET = "react_resume_upload"; // Unsigned upload preset

// Job Card Component
const JobCard = ({ job, onApply, index }) => {
  const { title, location, type, department, description, requirements } = job;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl p-8 border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-100/50 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-100 to-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200">
              {department}
            </span>
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-200">
              {type}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-5 text-gray-600 text-sm">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-green-500" />
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{type}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      </div>

      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>

      {isExpanded && (
        <div className="mb-5 p-5 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 animate-fadeIn">
          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Requirements
          </h4>
          <ul className="space-y-2">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => onApply(title)}
          className="flex-1 px-6 py-3.5 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Apply Now
        </button>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3.5 bg-white border-2 border-green-200 text-green-700 rounded-xl font-bold hover:bg-green-50 hover:border-green-400 transition-all duration-300"
        >
          {isExpanded ? "Less" : "Details"}
        </button>
      </div>
    </div>
  );
};

// Main Component
export default function ClimetoCareers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [sending, setSending] = useState(false);
  const [uploading, setUploading] = useState(false); // resume upload state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
    resumeUrl: ""
  });

  const jobs = [
   { title: "Business Development Executive", location: "Vapi, Gujarat", type: "Hybrid", department: "Business Development", description: "Drive business growth by identifying new clients, managing relationships, and supporting sales strategies.", requirements: ["Experience in sales or business development", "Strong communication & negotiation skills", "Ability to manage hybrid working schedule", "Goal-oriented and self-driven attitude"], }, { title: "Business Development Executive", location: "Bangalore", type: "Hybrid", department: "Business Development", description: "Identify opportunities, pitch services, and build strong business partnerships in the Bangalore region.", requirements: ["Previous BD or sales experience", "Good presentation & communication skills", "Hybrid working flexibility", "Understanding of sustainability sector (preferred)"], }, { title: "Business Development Manager", location: "Indore", type: "Onsite", department: "Business Development", description: "Lead the BD team, develop strategies, manage key accounts, and ensure overall business growth.", requirements: ["3+ years in BD or sales leadership", "Team management & strategic planning skills", "Strong relationship-building ability", "Onsite availability in Indore"], }, { title: "Environmental Research and Development Specialist", location: "Indore", type: "Onsite", department: "Research & Development", description: "Lead environmental research initiatives, develop innovative sustainability solutions, and drive R&D projects for climate impact.", requirements: ["Master's degree in Environmental Science or related field", "Research experience in sustainability or climate tech", "Strong analytical and problem-solving skills", "Experience with environmental impact assessment"], }, { title: "Internship Opportunities", location: "Indore", type: "Onsite", department: "All Departments", description: "Exciting internship opportunities across Sustainability, Sales, Management, and other departments. Perfect for students and recent graduates passionate about making a difference.", requirements: ["Currently pursuing or recently completed relevant degree", "Strong eagerness to learn and grow", "Good communication skills", "Passion for sustainability and environmental impact"], }, { title: "Full Stack Developer", location: "Indore", type: "Onsite", department: "Technology", description: "Build and maintain innovative web applications for our sustainability platform. Work with modern technologies to create impactful digital solutions.", requirements: ["3+ years experience with React, Node.js, and modern frameworks", "Strong knowledge of databases (SQL/NoSQL)", "Experience with cloud platforms (AWS/Azure)", "Understanding of RESTful APIs and microservices"], },
    // Add more jobs as needed
  ];

  const onApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ name: "", email: "", phone: "", message: "", resume: null, resumeUrl: "" });
    setTimeout(() => {
      const el = document.querySelector("#applicant-name");
      if (el) el.focus();
    }, 50);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


const uploadToCloudinary = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`;

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", UPLOAD_PRESET);
  form.append("folder", "resumes");

  try {
    const res = await fetch(url, {
      method: "POST",
      body: form
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Cloudinary error:", data);
      return null;
    }

    return data.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return null;
  }
};

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
    setUploading(true);

    const uploadedUrl = await uploadToCloudinary(file);
    if (uploadedUrl) {
      setFormData((prev) => ({ ...prev, resumeUrl: uploadedUrl }));
    } else {
      alert("Failed to upload resume. Try again.");
      setFormData((prev) => ({ ...prev, resumeUrl: "" }));
    }
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.resumeUrl) {
      alert("Please fill in all required fields and ensure your resume is uploaded.");
      return;
    }

    setSending(true);
    try {
      const templateParams = {
        job: selectedJob,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "No additional message provided",
        resume_url: formData.resumeUrl
      };

      await emailjs.send(
        "service_a2z5zy2", // replace with your EmailJS service ID
        "template_kgarj8w", // replace with your EmailJS template ID
        templateParams,
        "4eY9uaRaYhI4OzB-_" // replace with your EmailJS public key
      );

      alert("Application sent successfully! We'll get back to you soon.");
      setSelectedJob(null);
      setFormData({ name: "", email: "", phone: "", message: "", resume: null, resumeUrl: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert(`Failed to send application. Please email jobs@climeto.com directly.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 rounded-full text-green-700 font-semibold mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span>We're Hiring!</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-blue-600 mb-6 leading-tight">
            Join Our Team
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Build the future of sustainability with Climeto. We're looking for passionate individuals ready to make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <JobCard key={idx} job={job} onApply={onApply} index={idx} />
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn" style={{ zIndex: 9999 }}>
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative transform animate-slideUp max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedJob}</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input id="applicant-name" name="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input name="phone" type="text" value={formData.phone} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join us?</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500" rows={4} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resume *</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-3 border-2 border-dashed border-gray-300 rounded-xl" required />
                {uploading && <p className="text-sm text-blue-600 mt-2">Uploading resume...</p>}
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setSelectedJob(null)} className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold">Cancel</button>
                <button type="submit" disabled={sending || uploading} className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {sending ? <>Sending...</> : uploading ? <>Uploading...</> : <>Submit Application <Send className="w-5 h-5" /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
        @keyframes slideUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
      `}</style>
    </div>
  );
}
