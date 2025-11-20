const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const fs = require("fs");

// Serve static files from the React app (prefer `dist` from Vite, fallback to `build`)
const distPath = path.join(__dirname, "../frontend/dist");
const buildPath = path.join(__dirname, "../frontend/build");
const staticPath = fs.existsSync(distPath) ? distPath : buildPath;

if (fs.existsSync(staticPath)) {
  app.use(express.static(staticPath));
} else {
  console.warn(
    "Warning: No frontend build found. Expected `dist` or `build` folder in frontend/."
  );
}

// Fallback for client-side routing (React Router)
// Use a middleware rather than a route pattern to avoid path-to-regexp issues in some environments
app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  if (req.path.startsWith("/api")) return next();

  const indexFile = path.join(staticPath, "index.html");
  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile);
  }

  return next();
});

// Contact form endpoint
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter (using Gmail as example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to me (notification)
  const notificationEmail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0;">NEW CONTACT FORM SUBMISSION!</h2>
        </div>
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
          <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p style="margin: 0; font-style: italic; color: #555;"><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      </div>
    `,
  };

  // Reply email to sender
  const replyEmail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject:
      "Thank you for contacting Mohammed Ashique S - MERN Stack Developer",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0;">Thank You for Reaching Out!</h2>
        </div>

        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">Thank you for your interest in my work! I have successfully received your message and truly appreciate you taking the time to reach out.</p>

          <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p style="margin: 0; font-style: italic; color: #555;">"${message}"</p>
          </div>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">I will review your message carefully and get back to you within <strong>24 hours</strong>. In the meantime, feel free to:</p>

          <ul style="color: #333; line-height: 1.8;">
            <li>Check out my projects on <a href="https://github.com/mohammedashiqueofficial7" style="color: #667eea;">GitHub</a></li>
            <li>Connect with me on <a href="https://linkedin.com/in/mohammed-ashique-s-13613b339" style="color: #667eea;">LinkedIn</a></li>
            <li>Call me directly at <strong>+91 79028 57903</strong></li>
          </ul>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #333;">Best regards,</p>
            <p style="margin: 5px 0 0 0; font-weight: bold; color: #667eea;">Mohammed Ashique S</p>
            <p style="margin: 0; color: #666; font-size: 14px;">MERN Stack Developer | Computer Science Graduate</p>
            <p style="margin: 0; color: #666; font-size: 14px;">📍 Thiruvananthapuram, Kerala, India</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(notificationEmail);
    await transporter.sendMail(replyEmail);

    res.status(200).json({
      message: "Message sent successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send message. Please try again." });
  }
});

// Get portfolio data
router.get("/portfolio", (req, res) => {
  const portfolioData = {
    personalInfo: {
      name: "Mohammed Ashique S",
      title: "Aspiring Software Developer | MERN Stack Developer",
      location: "Thiruvananthapuram, Kerala, India",
      email: "ashiqueoffl7@gmail.com",
      phone: "+91 79028 57903",
      linkedin: "linkedin.com/in/mohammed-ashique-s-13613b339",
      github: "github.com/mohammedashiqueofficial7",
    },
    about:
      "I'm a passionate Computer Science graduate from 2023, eager to make my mark in the software development industry. Based in Thiruvananthapuram, India, I recently completed an intensive MERN Stack internship at Srishti Innovative (2024-2025), where I gained hands-on experience building real-world applications. My journey in programming started during my B.Tech studies, and I've been dedicated to mastering modern web technologies. I believe in learning by doing, which is why I've built multiple projects using the MERN stack to solidify my understanding and showcase my capabilities. I'm excited about the opportunity to contribute to innovative projects and grow as a developer in a collaborative, growth-focused environment.",
    education: [
      {
        degree: "MERN STACK DEVELOPER",
        institution: "Srishti Innovative , Trivandrum",
        period: "2024-2025",
      },
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Sarabhai Institute of Science and Technology, KTU",
        period: "2019-2023",
      },
      {
        degree: "Higher Secondary Education",
        institution: "Govt. VHSS Paruthippally",
        period: "2017-2019",
      },
      {
        degree: "Secondary Education",
        institution: "Govt. VHSS Paruthippally",
        period: "2016-2017",
      },
    ],
    experience: [
      {
        title: "MERN Stack Developer Intern",
        company: "Srishti Innovative, Trivandrum",
        period: "2024-2025",
        responsibilities: [
          "Built and deployed full-stack web applications using React.js, Node.js, and MongoDB",
          "Collaborated with developers to improve application performance and maintainability",
        ],
      },
    ],
    skills: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Material-UI",
        "Framer Motion",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Middleware",
        "Server-side Rendering",
        "Python",
      ],
      database: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "PostgreSQL",
        "Database Design",
        "Aggregation",
      ],
      tools: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "npm",
        "Webpack",
        "Babel",
        "ESLint",
        "Figma",
        "MS Office",
      ],
    },
    projects: [
      {
        title: "Blog Management Website [Frontend]",
        description:
          "Full-featured blog platform with user authentication, blog management, and AI-powered chat assistance",
        tech: "MERN Stack",
        github: "https://github.com/mohammedashiqueofficial7/BlogProject",
        features: [
          "User authentication with JWT tokens",
          "Rich text editor for blog creation",
          "AI-powered chat assistance for content",
          "Responsive design with modern UI",
          "Real-time notifications and updates",
          "Advanced search and filtering system",
        ],
      },
      {
        title: "Blog Management Website [Backend]",
        description:
          "Robust backend API for blog management with advanced features and security",
        tech: "MERN Stack",
        github: "https://github.com/mohammedashiqueofficial7/BlogBackend",
        features: [
          "RESTful API architecture",
          "JWT authentication & authorization",
          "MongoDB database with Mongoose ODM",
          "File upload handling for images",
          "Input validation and sanitization",
          "Error handling and logging system",
        ],
      },
      {
        title: "E-Commerce Website",
        description:
          "Complete online shopping platform with user authentication and product management",
        tech: "MERN Stack",
        github: "https://github.com/mohammedashiqueofficial7",
        features: [
          "User registration and authentication",
          "Product catalog with categories",
          "Shopping cart functionality",
          "Secure payment integration",
          "Order management system",
          "Admin dashboard for inventory",
        ],
      },
      {
        title: "Simple Blog Website",
        description:
          "Blog management system for posting and managing content with clean, minimal design",
        tech: "React.js",
        github: "https://github.com/mohammedashiqueofficial7/Blog-Website",
        features: [
          "Clean and minimal user interface",
          "Responsive design for all devices",
          "Dynamic content rendering",
          "SEO-friendly structure",
          "Fast loading performance",
          "Easy content management",
        ],
      },
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio showcasing projects, skills, and professional experience",
        tech: "React.js",
        github: "https://github.com/mohammedashiqueofficial7/My-new-Portfolio",
        features: [
          "Modern responsive design",
          "Dark/Light mode toggle",
          "Smooth animations and transitions",
          "Contact form with email integration",
          "Project showcase with live demos",
          "Skills visualization and progress bars",
        ],
      },
    ],
  };

  res.json(portfolioData);
});

// Use router
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
