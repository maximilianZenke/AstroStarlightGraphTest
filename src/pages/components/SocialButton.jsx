import React from "react";

const icons = {
    linkedin: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#01000E"
            viewBox="0 0 24 24"
            className="w-10 h-10"
        >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-1.8 3.7-1.8 3.9 0 4.6 2.5 4.6 5.8V24h-4v-8.6c0-2.1 0-4.7-2.8-4.7-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
        </svg>
    ),
    github: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#01000E"
            viewBox="0 0 24 24"
            className="w-10 h-10"
        >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.18 1.77 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18a10.88 10.88 0 0 1 2.86-.38c.97 0 1.94.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.41-5.24 5.7.41.35.78 1.03.78 2.09v3.1c0 .31.21.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
    ),
};

const SocialButton = ({ href, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[160px] h-[80px] bg-[#B8B8B8] rounded-lg shadow hover:bg-[#a5a5a5] transition duration-300"
        >
            {icons[icon]}
        </a>
    );
};

export default SocialButton;
