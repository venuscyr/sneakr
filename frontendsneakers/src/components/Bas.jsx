import { LucideIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-violet-500 py-6">
      <div className="flex justify-center items-center gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors"
        >
          <LucideIcon name="instagram" size={40} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <LucideIcon name="facebook" size={40} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition-colors"
        >
          <LucideIcon name="linkedin" size={40} />
        </a>

        {/* Snapchat */}
        <a
          href="https://www.snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
        >
          <LucideIcon name="snapchat" size={40} />
        </a>
      </div>
      <p className="text-center text-white mt-4 text-sm">
        © 2024 Sneaker Shop. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
