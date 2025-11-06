export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Login</h1>
      <form className="flex flex-col space-y-4 w-80">
        <input type="email" placeholder="Email" className="p-3 border text-gray-500 rounded-lg"/>
        <input type="password" placeholder="Password" className="p-3 border text-gray-500 rounded-lg"/>
        <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}