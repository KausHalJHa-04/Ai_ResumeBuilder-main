import React, { useState, useEffect } from "react";
import { useResume } from "../../context/ResumeContext";
import { enhanceTextWithGemini } from "../../services/geminiService";
import html2pdf from "html2pdf.js";

import {
  FaChevronLeft,
  FaChevronRight,
  FaMagic,
  FaFileDownload,
  FaShareAlt,
  FaUserCircle,
} from "react-icons/fa";

const enhancementOptions = [
  "summary",
  "experience",
  "education",
  "skills",
  "achievements",
  "projects",
  "certifications",
  "languages",
  "interests",
];

const Sidebar = ({ onEnhance, resumeRef }) => {
  const { resumeData, setResumeData } = useResume();
  const [collapsed, setCollapsed] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [enhancingSection, setEnhancingSection] = useState(null);
  const [downloadRequested, setDownloadRequested] = useState(false);

  const handleDownloadPDF = () => {
    setDownloadRequested(true);
  };

  useEffect(() => {
    if (downloadRequested && resumeRef?.current) {
      const element = resumeRef.current;

      setTimeout(() => {
        html2pdf()
          .set({
            margin: 0.5,
            filename: "My_Resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          })
          .from(element)
          .save()
          .catch((err) => {
            console.error("❌ PDF Download Error:", err);
            alert("Something went wrong while generating the PDF.");
          });

        setDownloadRequested(false);
      }, 300);
    }
  }, [downloadRequested, resumeRef]);

  const handleEnhanceSection = async (section) => {
    setEnhancingSection(section);
    let contentToSend = "";

    switch (section) {
      case "summary":
        contentToSend = resumeData.summary;
        break;
      case "skills":
        contentToSend = resumeData.skills?.join(", ");
        break;
      case "education":
        contentToSend = resumeData.education
          .map(
            (edu) =>
              `${edu.degree}\n${edu.institution}\n${edu.duration}\n${edu.location}`
          )
          .join("\n\n");
        break;
      case "experience":
        contentToSend = resumeData.experience
          .map((exp) => exp.accomplishment?.join("\n"))
          .join("\n\n");
        break;
      case "achievements":
        contentToSend = resumeData.achievements?.join("\n") || "";
        break;
      case "projects":
        contentToSend = resumeData.projects
          .map(
            (proj) =>
              `${proj.name} – ${proj.technologies?.join(", ")}\n${
                proj.description
              }`
          )
          .join("\n\n");
        break;
      case "certifications":
        contentToSend = resumeData.certifications
          .map((cert) => `${cert.title} from ${cert.issuer} - ${cert.date}`)
          .join("\n");
        break;
      case "languages":
      case "interests":
        contentToSend = resumeData[section]?.join(", ");
        break;
      default:
        contentToSend = JSON.stringify(resumeData[section]);
    }

    const aiResponse = await enhanceTextWithGemini(section, contentToSend);
    if (!aiResponse) {
      setEnhancingSection(null);
      return;
    }

    const updated = { ...resumeData };

    const splitClean = (text, delimiter = "\n") =>
      text
        .split(delimiter)
        .map((s) => s.replace(/^[-*•]\s*/, "").trim())
        .filter(Boolean);

    if (
      ["summary", "achievements", "languages", "interests"].includes(section)
    ) {
      updated[section] = splitClean(aiResponse, /,|\n/);
    } else if (section === "skills") {
      updated.skills = splitClean(aiResponse, /,|\n/);
    } else if (section === "experience") {
      updated.experience = resumeData.experience.map((exp, index) => ({
        ...exp,
        accomplishment:
          aiResponse.split("\n\n")[index]?.split("\n").filter(Boolean) ||
          exp.accomplishment,
      }));
    } else if (section === "education") {
      updated.education = aiResponse.split("\n\n").map((block) => {
        const [degree, institution, duration, location] = block.split("\n");
        return {
          degree: degree?.trim(),
          institution: institution?.trim(),
          duration: duration?.trim(),
          location: location?.trim(),
        };
      });
    } else if (section === "projects") {
      updated.projects = resumeData.projects.map((proj, index) => {
        const block = aiResponse.split("\n\n")[index] || "";
        const [titleLine, ...descLines] = block.trim().split("\n");
        const [name, techUsed = ""] = titleLine.split(" – ");
        return {
          ...proj,
          name: name?.trim() || proj.name,
          technologies:
            techUsed.split(",").map((t) => t.trim()) || proj.technologies,
          description: descLines.join(" ").trim() || proj.description,
        };
      });
    } else if (section === "certifications") {
      updated.certifications = aiResponse.split("\n").map((line, index) => {
        const [titleOrg = "", date = ""] = line.split(/\s*[-–]\s*/);
        const [title = "", issuer = ""] = titleOrg.split(" from ");
        return {
          ...resumeData.certifications[index],
          title: title.trim() || resumeData.certifications[index]?.title,
          issuer: issuer.trim() || resumeData.certifications[index]?.issuer,
          date: date.trim() || resumeData.certifications[index]?.date,
        };
      });
    } else {
      updated[section] = aiResponse;
    }

    setResumeData(updated);
    setEnhancingSection(null);
    if (onEnhance) onEnhance(section);
  };

  return (
    <div
      className={`min-h-screen bg-white shadow-lg border-r p-4 flex flex-col justify-start gap-4 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
      style={{ position: "relative" }}
    >
      <button
        className="absolute -right-3 top-4 bg-gray-200 border border-gray-300 rounded-full p-1 shadow hover:bg-gray-300 transition-all"
        style={{ zIndex: 10 }}
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      <div className="flex items-center gap-2 mb-2">
        <FaUserCircle size={collapsed ? 32 : 40} className="text-red-600" />
        {!collapsed && (
          <span className="font-bold text-lg text-red-700">My Resume</span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <button
          className={`w-full flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all ${
            collapsed ? "justify-center px-2" : ""
          }`}
          onClick={() => setShowOptions((prev) => !prev)}
          title="Enhance with AI"
        >
          <FaMagic />
          {!collapsed && "Enhance with AI"}
        </button>

        {showOptions && !collapsed && (
          <div className="pl-4 flex flex-col gap-2">
            {enhancementOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleEnhanceSection(option)}
                disabled={enhancingSection === option}
                className="flex items-center gap-2 text-left text-red-700 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaMagic className="text-red-500" />
                {enhancingSection === option
                  ? `Enhancing ${option}...`
                  : `Enhance ${
                      option.charAt(0).toUpperCase() + option.slice(1)
                    }`}
              </button>
            ))}
          </div>
        )}

        <button
          disabled={downloadRequested}
          className={`w-full flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all ${
            collapsed ? "justify-center px-2" : ""
          }`}
          onClick={handleDownloadPDF}
          title="Download PDF"
        >
          <FaFileDownload />
          {!collapsed && "Download PDF"}
        </button>

        <button
          className={`w-full flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all ${
            collapsed ? "justify-center px-2" : ""
          }`}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "My Resume",
                url: window.location.href,
              });
            } else {
              alert("Sharing not supported on this device");
            }
          }}
          title="Share Resume"
        >
          <FaShareAlt />
          {!collapsed && "Share"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
