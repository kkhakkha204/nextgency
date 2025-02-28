import React, { useState, useEffect } from "react";
import {MdCancel, } from "react-icons/md";

import {IoCheckmarkCircle, IoCloseCircle} from "react-icons/io5";
import {FaEdit, FaRedo} from "react-icons/fa"; // Icon cúp cho tổng điểm
import { motion } from "framer-motion";

export default function ScoreTracker() {
    const [numPlayers, setNumPlayers] = useState(() => JSON.parse(localStorage.getItem("numPlayers")) || null);
    const [tempPlayers, setTempPlayers] = useState(() => JSON.parse(localStorage.getItem("tempPlayers")) || []);
    const [players, setPlayers] = useState(() => JSON.parse(localStorage.getItem("players")) || []);
    const [scores, setScores] = useState(() => JSON.parse(localStorage.getItem("scores")) || []);
    const [rounds, setRounds] = useState(() => JSON.parse(localStorage.getItem("rounds")) || []);
    const [winner, setWinner] = useState(null);
    const [roundScores, setRoundScores] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        localStorage.setItem("numPlayers", JSON.stringify(numPlayers));
        localStorage.setItem("tempPlayers", JSON.stringify(tempPlayers));
        localStorage.setItem("players", JSON.stringify(players));
        localStorage.setItem("scores", JSON.stringify(scores));
        localStorage.setItem("rounds", JSON.stringify(rounds));
    }, [numPlayers, tempPlayers, players, scores, rounds]);

    const handleStart = () => {
        setPlayers(tempPlayers);
        setScores(Array(numPlayers).fill(0));
        setRounds([]);
    };

    const handleBack = () => {
        setNumPlayers(null);
        setTempPlayers([]);
        localStorage.removeItem("numPlayers");
        localStorage.removeItem("tempPlayers");
    };

    const handleAddRound = () => {
        if (winner === null) return;

        let totalWinPoints = 0;
        const newScores = [...scores];

        players.forEach((player, index) => {
            if (index !== winner) {
                const lossPoints = roundScores[player] || 0;
                totalWinPoints += lossPoints;
                newScores[index] -= lossPoints;
            }
        });

        newScores[winner] += totalWinPoints;
        setScores(newScores);
        setRounds([{ ...roundScores, [players[winner]]: totalWinPoints }, ...rounds.slice(0, 6)]);
        setRoundScores({});
        setShowPopup(false);
    };

    const handleNewGame = () => {
        setNumPlayers(null);
        setTempPlayers([]);
        setPlayers([]);
        setScores([]);
        setRounds([]);
        localStorage.removeItem("numPlayers");
        localStorage.removeItem("tempPlayers");
        localStorage.removeItem("players");
        localStorage.removeItem("scores");
        localStorage.removeItem("rounds");
    };

    return (
        <div className=" relative p-6 max-w-4xl mx-auto font-game z-50 pt-24">

            {!numPlayers ? (
                <div className="space-y-8 justify-center text-center flex flex-col">
                    <h2 className="text-3xl font-extrabold drop-shadow-md flex items-center gap-3 justify-center animate-bounce-custom">

                        Chọn số lượng <br/> con nghiện!

                    </h2>

                    <button
                        className="px-6 py-3 max-w-[200px] mx-auto rounded-3xl bg-[#647a4c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white"
                        onClick={() => {
                            setNumPlayers(4);
                            setTempPlayers(Array(4).fill(""));
                        }}>4 Con nghiện
                    </button>
                    <button
                        className="px-6 py-3 max-w-[200px] mx-auto rounded-3xl bg-[#647a4c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white"
                        onClick={() => {
                            setNumPlayers(5);
                            setTempPlayers(Array(5).fill(""));
                        }}>5 Con nghiện
                    </button>
                </div>
            ) : players.length === 0 ? (
                <div className="space-y-6 mx-6 text-center">
                    <h2 className="text-3xl font-extrabold drop-shadow-md flex items-center gap-3 justify-center animate-bounce-custom ">Nhập tên <br/> con nghiện :</h2>
                    {tempPlayers.map((_, i) => (
                        <input
                            key={i}
                            className="border-2 rounded-xl p-2 w-full"
                            placeholder={`Con nghiện ${i + 1}`}
                            onChange={(e) => {
                                const newPlayers = [...tempPlayers];
                                newPlayers[i] = e.target.value;
                                setTempPlayers(newPlayers);
                            }}
                        />
                    ))}
                    <button className="px-6 py-3 max-w-[200px] mx-auto rounded-3xl bg-[#647a4c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white mr-2" onClick={handleStart}>Bắt đầu</button>
                    <button className="px-6 py-3 max-w-[200px] mx-auto rounded-3xl bg-[#6a6d5c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white" onClick={handleBack}>Quay lại</button>
                </div>
            ) : (
                <div className="space-y-6 ">
                    <h2 className="text-3xl font-extrabold drop-shadow-md flex items-center gap-3 justify-center animate-bounce-custom">Bảng
                        Điểm
                    </h2>

                    <div
                        className="relative overflow-y-auto max-h-64 border-4 border-[#647a4c] rounded-lg shadow-lg bg-[#f2c94d]">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-[#647a4c] text-white text-lg">
                                {players.map((player, i) => (
                                    <th key={i} className="border-2 border-white p-3">{player}</th>
                                ))}
                            </tr>
                            </thead>

                            <tbody className="text-center">
                            <tr className="bg-[#e6b93d] font-bold">
                                {scores.map((score, i) => (
                                    <td key={i} className="border-2 border-[#647a4c] p-3 ">{score}</td>
                                ))}
                            </tr>
                            {rounds.map((round, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-[#ffeb99]" : "bg-[#e6b93d]"}>

                                    {players.map((player, j) => (
                                        <td key={j} className="border-2 border-[#647a4c] p-3">{round[player] || 0}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Ảnh PNG ở góc dưới bên phải */}
                    <img
                        src="/assets/images/logos/huong1.png"
                        alt="Trophy"
                        className="absolute bottom-0 right-3 w-28 h-auto opacity-100 drop-shadow-[0_15px_10px_rgba(0,0,0,0.5)]"
                    />


                    <motion.button
                        className="px-3 py-3 max-w-[200px] mx-auto rounded-full bg-[#647a4c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white mr-2"
                        onClick={() => setShowPopup(true)}
                        whileHover={{scale: 1.1, rotate: 5}}
                        whileTap={{scale: 0.9}}
                    >
                        Nhập Điểm
                    </motion.button>

                    <motion.button
                        className="px-3 py-3 max-w-[200px] mx-auto rounded-full bg-[#6a6d5c] border-x-4 border-y-2 border-[#394e2d] shadow-lg text-white"
                        onClick={handleNewGame}
                        whileHover={{scale: 1.1, rotate: -5}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaRedo className="text-xl"/>
                    </motion.button>
                    {showPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-[#f2c94d] p-6 rounded-xl shadow-2xl w-[22rem] relative">
                                {/* Icon đóng popup */}
                                <button
                                    className="absolute top-2 right-2 text-gray-800 hover:text-red-500 transition-all"
                                    onClick={() => setShowPopup(false)}
                                >
                                    <IoCloseCircle size={28}/>
                                </button>

                                <h2 className="text-xl font-extrabold text-center  mb-4">Nhập Điểm</h2>

                                {/* Chọn người thắng */}
                                <div className="mb-4">
                                    <label className="block font-bold text-[#647a4c] mb-1">Chọn người thắng</label>
                                    <select
                                        className="border-2 border-[#647a4c] bg-white p-2 w-full rounded-md text-gray-700 focus:outline-none"
                                        onChange={(e) => setWinner(Number(e.target.value))}
                                    >
                                        <option value="">-- Chọn --</option>
                                        {players.map((player, i) => (
                                            <option key={i} value={i}>{player}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Nhập điểm của các người chơi khác */}
                                {players.map((player, i) => (
                                    i !== winner && (
                                        <div key={i} className="flex flex-col   mb-3">
                                            <span className="w-24 font-bold text-[#647a4c]">{player}</span>
                                            <input
                                                className="border-2 border-[#647a4c] p-2 flex-1 rounded-md focus:outline-none"
                                                type="number"
                                                placeholder="Nhập điểm"
                                                onChange={(e) =>
                                                    setRoundScores({
                                                        ...roundScores,
                                                        [player]: Number(e.target.value) || 0,
                                                    })
                                                }
                                            />
                                        </div>
                                    )
                                ))}

                                {/* Nút bấm */}
                                <div className="flex justify-end space-x-3 mt-4">
                                    <button
                                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-opacity-80 transition-all flex items-center space-x-1"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        <MdCancel size={20}/> <span>Hủy</span>
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-opacity-80 transition-all flex items-center space-x-1"
                                        onClick={handleAddRound}
                                    >
                                        <IoCheckmarkCircle size={20}/> <span>Xác nhận</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}
