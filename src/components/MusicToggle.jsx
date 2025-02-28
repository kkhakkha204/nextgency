import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/assets/kiep-do-den-cover-cung-cac-hao-han-128-ytshorts.savetube.me.mp3")); // Đổi thành đường dẫn file nhạc của bạn

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            className="fixed top-5 right-5 w-14 h-14 rounded-full bg-[#f2c94d] border-4 border-[#394e2d] flex items-center justify-center shadow-lg text-[#394e2d]
                 transition-all duration-300 hover:bg-[#394e2d] hover:text-[#f2c94d] z-30"
            onClick={toggleMusic}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
        >
            {isPlaying ? (
                <FaVolumeUp className="text-2xl animate-pulse" />
            ) : (
                <FaVolumeMute className="text-2xl" />
            )}
        </motion.button>
    );
};

export default MusicToggle;
