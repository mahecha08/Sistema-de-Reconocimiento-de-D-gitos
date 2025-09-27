import React, { useEffect, useState } from "react";
import type { imagen } from "../models/image";

interface HistoryItem extends imagen {
    date: string;
}

export const History = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("history") || "[]");
        setHistory(stored);
    }, []);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Historial de predicciones
            </h2>

            {history.length === 0 ? (
                <p className="text-gray-600">No hay registros todavía.</p>
            ) : (
                <div className="grid gap-6">
                    {history.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
                        >
                            <p className="text-sm text-gray-500 mb-2">📅 {item.date}</p>
                            <div className="space-y-1">
                                <p className="text-gray-800">
                                    <span className="font-semibold">Predicción:</span>{" "}
                                    {item.prediction}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-semibold">Precisión:</span>{" "}
                                    {(item.accuracy * 100).toFixed(2)}%
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-semibold">Tiempo:</span>{" "}
                                    {item.process_time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
