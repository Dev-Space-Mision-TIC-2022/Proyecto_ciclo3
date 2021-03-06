import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const [valor, setValor] = useState(0);
  const [nombre, setNombre] = useState("");
  const [inventario, setInventario] = useState(0);
  const [desc, setDesc] = useState("");

  const guardar = async () => {
    const options = {
      method: "POST",
      url: "https://thawing-crag-36588.herokuapp.com/Productos",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Nombre: nombre,
        Descripcion: desc,
        Valor: valor,
        inventario: inventario,
      },
    };

    console.log(options);
    await axios
      .request(options)
      .then(function (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto guardado con exito",
          showConfirmButton: false,
          timer: 2500,
        }).then((x) => {});
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex-row h-full items-center justify-center min-h-screen min-w-full px-5 py-12 lg:px-20 bg-gray-900">
      <div className="flex-col text-green-400 text-3xl ">
        Registrar Producto
      </div>
      <div className="flex-col w-full">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
          <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">
              Nombre del Producto
            </label>
            <input
              required
              onChange={(x) => {
                setNombre(x.target.value);
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Nombre del producto"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              for="name"
              className="text-base leading-7 text-blueGray-500 text-center"
            >
              Descripci??n
            </label>
            <input
              required
              onChange={(x) => {
                setDesc(x.target.value);
              }}
              type="text"
              id="desc"
              name="desc"
              placeholder="Descripci??n"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              for="name"
              className="text-base leading-7 text-blueGray-500 m-4"
            >
              Inventario
            </label>
            <input
              required
              onChange={(x) => {
                setInventario(x.target.value);
              }}
              type="number"
              id="inventario"
              name="Inventario"
              placeholder="Cantidad de items disponibles"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative pt-4">
            <label
              for="name"
              className="text-base leading-7 text-blueGray-500 m-4"
            >
              Valor
            </label>
            <input
              required
              onChange={(x) => {
                setValor(x.target.value);
              }}
              type="number"
              id="valor"
              name="valor"
              placeholder="Costo por unidad"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="flex items-center w-full pt-4 mb-4">
            <input
              type="button"
              onClick={(x) => {
                guardar();
              }}
              className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-green-400  rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-900 "
              value={"Guardar"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearProducto;
