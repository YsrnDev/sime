import Dashboard from './dashboard';

const Login = () => {
  return (
    <div className="pt-36 bg-slate-900 h-screen">
      <form action={<Dashboard />} className="relative w-full py-16 px-10 md:py-20 md:px-16 xl:py-32 xl:px-20 flex flex-col gap-y-8 max-w-xs md:max-w-md xl:max-w-xl mx-auto border-2 border-slate-200 rounded-md shadow-xl z-10">
        <img src={require('../assets/logo.png')} className="w-36 md:w-44 xl:w-60 mx-auto" />
        <div className="text-white text-center space-y-1">
          <h1 className="text-3xl">Welcome Back!</h1>
          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <input type="text" className="w-full p-1 border-2 border-slate-200 rounded-md" id="username" placeholder="Username"></input>
          <input type="password" className="w-full p-1 border-2 border-slate-200 rounded-md" id="password" placeholder="Password" />
        </div>
        <div className="flex justify-between items-center text-white">
          <a href="#" className="text-xs">
            Forget your password?
          </a>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:scale-75 transition duration-300 py-1 px-4 rounded-md">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
