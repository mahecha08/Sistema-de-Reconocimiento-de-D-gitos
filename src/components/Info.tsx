export const Info = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200">
                <div className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Albert Mahecha Reyes
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Proyecto corte 2 - Programación avanzada
                    </p>
                    <div className="flex justify-center">
                        <a href="../image">
                            <button className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition shadow">
                                Ir a probar API
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
