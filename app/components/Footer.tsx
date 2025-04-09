import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16 py-8">
            <div className="container mx-auto px-4 text-center flex flex-col items-center space-y-4">
                {/* Divider */}
                <hr className="w-16 border-blue-500" />

                {/* Name or Branding */}
                <h2 className="text-lg font-semibold tracking-wide">Jishnu K S</h2>

                {/* Social Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Jishnuks1994"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jishnu-k-s-a98334273/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:jishnuks9421@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-400">© 2025 Jishnu K S. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
