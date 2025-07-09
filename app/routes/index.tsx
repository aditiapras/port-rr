import { Github, Mail } from "lucide-react";
import type { Route } from "./+types";

export function meta({ matches }: Route.MetaArgs) {
  // Define SEO metadata with rich, relevant content
  const title = "Aditia Prasetian | Full Stack Developer & Creative Coder";
  const description =
    "Full stack developer specializing in React Router, Remix, Next.js and custom solutions for creative entrepreneurs. Building intuitive and stylish web applications with modern tech stacks.";
  const websiteUrl = "https://aditiaprs.com"; // Replace with your actual domain

  return [
    // Basic Meta Tags - These are fundamental for search engines
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "full stack developer, React Router, Remix, photographer platform, creative coding, web development, portfolio, aditia, aditiapras, aditia prasetian, aditya",
    },
    { name: "author", content: "Aditia Prasetian" },
    { name: "language", content: "en" },
    { name: "robots", content: "index, follow, max-image-preview:large" },

    // Canonical URL - Important for preventing duplicate content issues
    { tagName: "link", rel: "canonical", href: websiteUrl },

    // Open Graph Meta Tags - Enhance appearance when shared on social platforms
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: websiteUrl },
    { property: "og:site_name", content: "Aditia Prasetian" },
    // Uncomment and add your actual image path when available
    {
      property: "og:image",
      content: `https://drive.google.com/uc?id=1gFPQvI4BJyzouADDZ8-p0P7JL6pFJ2ay`,
    },
    { property: "og:image:width", content: "512" },
    { property: "og:image:height", content: "512" },
    { property: "og:locale", content: "en_US" },

    // Twitter Card Meta Tags - Optimize appearance when shared on Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    // Uncomment when you have a Twitter handle
    // { name: "twitter:creator", content: "@yourtwitterhandle" },
    {
      name: "twitter:image",
      content: `https://drive.google.com/uc?id=1gFPQvI4BJyzouADDZ8-p0P7JL6pFJ2ay`,
    },

    // Additional SEO enhancements
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
    { name: "application-name", content: "Aditia Prasetian" },
  ];
}

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col relative">
      <header className="h-16 dark:bg-neutral-900/90 bg-white/80 fixed top-0 w-full z-50 backdrop-blur-xl"></header>
      <div className="flex flex-col gap-8 px-6 md:px-0 mt-16 max-w-xl w-full mx-auto tracking-wide">
        <p className="text-2xl font-bold">Hi there! </p>
        <p className="text-neutral-500">
          I’m Aditia—your friendly neighborhood vibe coder.
        </p>
        <p className="text-neutral-500">
          I’m a full stack developer who believes that every idea deserves a
          chance to shine. For me, coding is more than just logic and
          syntax—it’s about bringing imagination to life and having a blast
          while doing it. I love exploring new concepts, experimenting with
          fresh tech, and collaborating with anyone who shares the same energy.
        </p>
        <p className="text-neutral-500">
          Right now, I’m channeling my passion into a project close to my heart:
          building a platform for photographers to serve their photos to
          clients. Forget the hassle of generic file-sharing tools—this is all
          about making the process smooth, stylish, and secure. It’s my way of
          giving photographers a better alternative to Google Drive, tailored
          just for them.
        </p>
        <p className="text-neutral-500">
          When it comes to frameworks, I’m all about React Router and Remix.
          There’s something magical about how React Router handles navigation—it
          just clicks with my workflow. Remix, on the other hand, brings a
          modern twist that makes building web apps genuinely exciting.
          Honestly, these two have become my go-to tools, even more than
          Next.js.
        </p>
        <p className="text-neutral-500">
          Authentication? No worries! I’m a big fan of better-auth.com and
          Clerk. They take the pain out of user management and let me focus on
          what I love: building cool features and delivering great experiences.
        </p>
        <p className="text-neutral-500">
          I’m always up for a chat about creative coding, new tech, or wild
          project ideas. Whether you’re a fellow developer, a photographer, or
          just someone who loves good vibes, I’d love to connect and see what we
          can create together.
        </p>
        <p className="text-neutral-500">
          Thanks for stopping by! Let’s make something awesome—and have a little
          fun along the way. See you around the code playground!
        </p>
      </div>
      <footer className="w-full md:px-0 px-6 flex items-center justify-center mt-16 h-12 border-t border-neutral-600">
        <div className="max-w-xl w-full flex items-center justify-between">
          <a
            className="text-sm text-neutral-500 flex items-center gap-2 dark:hover:text-white hover:text-black transition-colors"
            href="mailto:aditiapras97@gmail.com"
          >
            <Mail className="size-4" />
            aditiapras97@gmail.com
          </a>

          <a
            href="https://github.com/aditiapras"
            className="text-sm text-neutral-500 flex items-center gap-2 dark:hover:text-white hover:text-black transition-colors"
          >
            <Github className="size-4" /> GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
