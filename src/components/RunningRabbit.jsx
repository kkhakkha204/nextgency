import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RunningRabbit() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full h-96 flex items-end overflow-hidden">
            {/* Thảm cỏ */}
            <motion.div
                className="w-32 h-auto"
                initial={{x: screenWidth}} // Bắt đầu từ phải
                animate={{x: -120}} // Di chuyển sang trái
                transition={{
                    duration: 4, // Thời gian chạy hết màn hình
                    repeat: Infinity, // Lặp vô hạn
                    repeatType: "loop", // Lặp nhưng không quay ngược lại
                    ease: "linear",
                }}
            >
                <img src="/assets/images/banners/111.gif" alt="rabbit" />
            </motion.div>
        </div>
    );
}
