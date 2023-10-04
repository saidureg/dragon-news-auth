import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("password"));
  };

  return (
    <div className="bg-base-200">
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content w-1/2">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <h3 className="text-center text-4xl font-semibold text-[#403F3F] mt-16 mb-8">
              Login your account
            </h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
            </form>
            <p className="text-center mb-8 font-semibold text-[#706F6F]">
              Do not Have An Account ?{" "}
              <Link className="text-red-600" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
