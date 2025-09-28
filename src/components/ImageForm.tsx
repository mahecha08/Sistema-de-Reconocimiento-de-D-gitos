import React, { useState } from "react";
import type { imagen } from "../models/image";
import { History } from "../components/historial"

export const ImageForm = () => {
    const [invert, setInvert] = useState<boolean>(false)
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [imageResponse, setImageResponse] = useState<imagen | null>(null)
    const [cargar, setCargar] = useState<boolean>(false)
    //! ajustar el htmlInput element
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files?.length > 0) {
            const selectedImage = e.target.files[0]
            setImage(selectedImage)

            const objectUrl = URL.createObjectURL(selectedImage)
            setPreview(objectUrl)

        }

    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCargar(true)
        if (!image) {
            alert("no se ha seleccionado ninguna imagen")
            setCargar(false)
            return
        }
        const formData = new FormData()
        formData.append("invert", `${invert}`)
        formData.append("image", image!)

        fetch("http://ec2-54-81-142-28.compute-1.amazonaws.com:8080/predict", {
            method: "POST",
            body: formData
        }).then(
            (Response) => {
                if (!Response.ok) {
                    alert(`Error: ${Response.statusText}`)
                }
                return Response.json() as unknown as imagen
            })
            .then((imagaeResponse) => {
                setImageResponse(imagaeResponse);

                // Guardar en LocalStorage
                const history = JSON.parse(localStorage.getItem("history") || "[]");
                history.push({
                    prediction: imagaeResponse.prediction,
                    accuracy: imagaeResponse.accuracy,
                    process_time: imagaeResponse.process_time,
                    date: new Date().toLocaleString(),
                });
                localStorage.setItem("history", JSON.stringify(history));
            })
            .catch(error => alert(`Error: ${error}`)).finally(() => setCargar(false))

    }

    return (
        <>
            <div className="flex min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 p-10">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent bg-clip-padding bg-gradient-to-r from-gray-200 to-gray-50">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Subir Imagen
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="invert"
                                    id="invert"
                                    className="h-5 w-5 text-gray-600 rounded border-gray-300 focus:ring-gray-400"
                                    onChange={() => {
                                        setInvert(!invert)
                                    }}
                                />
                                <label
                                    htmlFor="invert"
                                    className="text-gray-700 text-sm"
                                >
                                    Invertir imagen
                                </label>
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="image"
                                    className="text-gray-700 text-sm mb-2"
                                >
                                    Selecciona una imagen
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
                                file:rounded-lg file:border-0 
                                file:text-sm file:font-semibold 
                                file:bg-gray-300 file:text-gray-800 
                                hover:file:bg-gray-400 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                            </div>

                            {image && (
                                <p className="mt-2 text-sm text-slate-500">archivo seleccionado: {image.name}</p>
                            )}

                            {preview && (
                                <div className="flex justify-center">
                                    <img src={preview} alt="Vista de la imagen" className="max-h-40 border border-slate-900 shadow-sm" />
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={cargar}
                                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold shadow-md hover:opacity-90 transition"
                            >
                                {cargar ? 'Se esta subiendo la imagen' : 'Enviar'}
                            </button>
                        </form>
                        <br />
                        {imageResponse && (
                            <div>
                                <h2>Resultado del reconocimiento </h2>
                                <p>Prediccion: {imageResponse.prediction}</p>
                                <p>Porcentaje de prediccion: {imageResponse.accuracy}</p>
                                <p>Tiempo de prediccion: {imageResponse.process_time}</p>
                            </div>
                        )}
                    </div>
                </div>
                <History />
            </div>
        </>
    );
};
