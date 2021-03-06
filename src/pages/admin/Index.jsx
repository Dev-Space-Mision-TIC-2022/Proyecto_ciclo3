import React from "react";
import { Link } from "react-router-dom";
import logo from "../admin/logo.PNG";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "../../components/PrivateRoute";

const Admin = ({ children }) => {
  const { logout } = useAuth0();
  return (
    <PrivateRoute>
      <div className="flex w-full h-full">
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <div className="flex flex-col md:flex-row flex-nowrap h-full ">
          <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
              <div className="flex items-center justify-center h-20 shadow-md">
                <Link
                  to="/admin"
                  className="hover:translate-x-2 h-12 transform"
                >
                  <img src={logo} />
                </Link>
              </div>
              <ul className="flex flex-col py-4">
                <li>
                  <Link
                    to="/admin/ventas"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-shopping-bag"></i>
                    </span>
                    <span className="text-sm font-medium">Ventas</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/Productos"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-mouse"></i>
                    </span>
                    <span className="text-sm font-medium">Productos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/Usuarios"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-user"></i>
                    </span>
                    <span className="text-sm font-medium">Usuarios</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-chat"></i>
                    </span>
                    <span className="text-sm font-medium">Soporte</span>
                  </a>
                </li>

                <li>
                  <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-log-out"></i>
                    </span>
                    <span
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      className="text-sm font-medium"
                    >
                      Cerrar sesi??n
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col items-stretch justify-start bg-gray-100">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Admin;
