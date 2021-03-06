import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/Index";
import Login from "./pages/Login";
import Ventas from "./pages/admin/Ventas";
import CrearVenta from "./pages/admin/Crear-venta";
import Productos from "./pages/admin/Productos";
import CrearProducto from "./pages/admin/Crear-Producto";
import Usuarios from "./pages/admin/Usuarios";
import DetalleUsuario from "./pages/admin/Detalle-Usuario";
import DetalleProducto from "./pages/admin/Detalle-producto";
import DetalleVenta from "./pages/admin/Detalle-Venta";
import { Auth0Provider } from "@auth0/auth0-react";
import CrearUsuario from "./pages/admin/Crear-Usuario";
import Adminmain from "./pages/admin/Adminmain";

function App() {
  return (
    <Auth0Provider
      domain="proyecto-logitech-misiontic.us.auth0.com"
      clientId="68pjqQan9oQ8JMMczyBpy5xpRyF1pVqn"
      redirectUri='https://pure-gorge-25368.herokuapp.com/admin'
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path={["/admin"]}>
              <Switch>
                <Route path="/admin/crear-usuario">
                  <Admin>
                    <CrearUsuario />
                  </Admin>
                </Route>
                <Route path="/admin/detalle-usuario/:id">
                  <Admin>
                    <DetalleUsuario />
                  </Admin>
                </Route>
                <Route path="/admin/usuarios">
                  <Admin>
                    <Usuarios />
                  </Admin>
                </Route>
                <Route path="/admin/detalle-Venta/:id">
                  <Admin>
                    <DetalleVenta />
                  </Admin>
                </Route>
                <Route path="/admin/detalle-producto/:id">
                  <Admin>
                    <DetalleProducto />
                  </Admin>
                </Route>
                <Route path="/admin/crear-producto">
                  <Admin>
                    <CrearProducto />
                  </Admin>
                </Route>
                <Route path="/admin/productos">
                  <Admin>
                    <Productos />
                  </Admin>
                </Route>
                <Route path="/admin/crear-venta">
                  <Admin>
                    <CrearVenta />
                  </Admin>
                </Route>
                <Route path="/admin/ventas">
                  <Admin>
                    <Ventas />
                  </Admin>
                </Route>
                <Route path="/admin">
                  <Admin>
                    <Adminmain/>
                  </Admin>
                </Route>
              </Switch>
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
