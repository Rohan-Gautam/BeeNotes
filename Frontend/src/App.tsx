
function App() {
    const handleLogin = () => {
        alert('Login button clicked');
    };

    const handleRegister = () => {
        alert('Register button clicked');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to Beenotes</h1>

            <div className="space-x-4">
                <button
                    onClick={handleLogin}
                    className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Login
                </button>

                <button
                    onClick={handleRegister}
                    className="px-6 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default App;
