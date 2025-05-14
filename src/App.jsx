import { useState } from "react";
import Saludo from "./components/Saludo";
import Presentacion from "./components/Presentacion";

function App() {
  const [count, setCount] = useState(0);
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState("");
  const [mensajeBoton, setMensajeBoton] = useState(""); // Estado para mostrar mensaje al hacer clic (Actividad 5)

  const nombre = "Mauricio";
  const edad = 20;
  const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`; // Variable para mostrar el saludo con nombre y edad

  const numeros = [3, 7, 12, 5, 2]; // Array de números para las operaciones de map y filter

  // Operaciones sobre el array de números
  const cuadrados = numeros.map((num) => num * num);
  const mayoresA5 = numeros.filter((num) => num > 5);

  // Función para verificar si un número es par o impar
  const parOImpar = (numero) => {
    return numero % 2 === 0 ? "Par" : "Impar";
  };

  // Función para manejar el cambio en el input de número
  const manejarCambio = (e) => {
    const valor = e.target.value;
    setNumero(valor);
    setResultado(parOImpar(Number(valor)));
  };

  // Objeto persona con datos de ejemplo
  const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
  };

  // Desestructuración del objeto persona
  const { nombre: nombrePersona, edad: edadPersona, profesion } = persona;
  console.log(
    `${nombrePersona} tiene ${edadPersona} años y trabaja como ${profesion}.`
  );
  persona.ciudad = "Rosario"; // Agregando propiedad "ciudad" al objeto persona
  console.log(persona);

  // Función para procesar un array utilizando una función de callback
  const procesar = (array, callback) => {
    return array.map(callback);
  };

  const resultadoProcesado = procesar([2, 4, 6], (x) => x * 2); // Ejemplo de uso de la función procesar

  // Función para manejar el clic en el botón (Actividad 5)
  const manejarClic = () => {
    setMensajeBoton("¡Gracias por hacer clic!");
    setTimeout(() => setMensajeBoton(""), 3000); // Limpiar mensaje después de 3 segundos
  };

  // Array de productos con precios
  const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
  ];

  // Filtrar productos caros
  const productosCaros = productos.filter((p) => p.precio > 100);

  // Formatear productos para mostrar nombre y precio
  const productosFormateados = productos.map(
    (p) => `${p.nombre}: $${p.precio}`
  );

  // Calcular precio total de todos los productos
  const precioTotal = productos.reduce((acum, p) => acum + p.precio, 0);

  // Filtrar productos baratos y mostrar solo sus nombres en minúsculas
  const productosBaratos = productos
    .filter((p) => p.precio < 100)
    .map((p) => p.nombre.toLowerCase());

  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">
          Actividad 1: Fundamentos de JavaScript
        </h1>

        {/* Actividad 1 - Declarar variables */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            1. Declarar dos variables (nombre y edad)
          </h2>
          <p className="text-lg font-medium">{mensaje}</p>
        </div>

        {/* Actividad 2 - Array, map y filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">2. Array, Map y Filter</h2>
          <p className="text-lg font-medium">
            Array original: {numeros.join(", ")}
          </p>
          <p className="text-lg font-medium">
            Números al cuadrado: {cuadrados.join(", ")}
          </p>
          <p className="text-lg font-medium">
            Números mayores a 5: {mayoresA5.join(", ")}
          </p>
        </div>

        {/* Actividad 3 - Par o Impar */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            3. Función para verificar Par o Impar
          </h2>
          <div className="flex flex-col items-center">
            <input
              type="number"
              value={numero}
              onChange={manejarCambio}
              className="border border-gray-300 px-4 py-2 rounded mb-4"
              placeholder="Ingresa un número"
            />
            <p className="text-lg font-medium">
              El número {numero} es {resultado}.
            </p>
          </div>
        </div>

        {/* Actividad 2 - Desestructuración y objetos */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Actividad 2: Desestructuración y objetos
          </h2>
          <p className="text-lg font-medium">
            Revisa la consola para ver los resultados de la desestructuración y
            la adición de la propiedad ciudad.
          </p>
        </div>

        {/* Actividad 3 - Funciones y callbacks */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Actividad 3: Funciones y callbacks
          </h2>
          <p className="text-lg font-medium">
            Uso de la función <code>procesar([2, 4, 6], x =&gt; x * 2);</code>:
          </p>
          <p className="text-lg font-medium">
            Resultado procesado: {resultadoProcesado.join(", ")}
          </p>
        </div>

        {/* Actividad 4 - Primer componente en React */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Actividad 4: Primer componente en React
          </h2>
          <div className="space-y-4">
            <Saludo nombre="Martín" />
            <Presentacion nombre="Mauricio" edad={20} profesion="Programador" />
          </div>
        </div>

        {/* Actividad 5 - Tailwind CSS */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Actividad 5: Tailwind CSS</h2>
          <p className="text-lg font-medium mb-4">
            Botón con fondo azul, texto blanco, bordes redondeados y efecto
            hover:
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={manejarClic}
          >
            Hacer clic
          </button>
          {mensajeBoton && (
            <p className="text-lg font-medium mt-2 text-green-600">
              {mensajeBoton}
            </p>
          )}
        </div>

        {/* Actividad 6 - Métodos de Arrays: map, filter y reduce */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Actividad 6: Métodos de Arrays
          </h2>

          <p className="text-lg font-medium mb-2">Productos:</p>
          <ul className="text-lg font-medium mb-4">
            {productos.map((prod, index) => (
              <li key={index}>
                {prod.nombre}: ${prod.precio}
              </li>
            ))}
          </ul>

          <p className="text-lg font-medium">
            1. Productos con precio mayor a $100:{" "}
            {productosCaros.map((p) => p.nombre).join(", ")}
          </p>

          <p className="text-lg font-medium">
            2. Formato personalizado: {productosFormateados.join(" | ")}
          </p>

          <p className="text-lg font-medium">3. Precio total: ${precioTotal}</p>

          <p className="text-lg font-medium">
            4. Productos baratos (menos de $100):{" "}
            {productosBaratos.map((p) => p.toLowerCase()).join(", ")}
          </p>
        </div>

        {/* Actividad 7 - Tailblocks en React */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Actividad 7: Integración con Tailblocks
          </h2>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                ¡Hola! Soy Mauricio 👋
                <br className="hidden lg:inline-block" />
                Explorando React + Tailwind
              </h1>
              <p className="mb-8 leading-relaxed">
                Esta es una sección integrada desde Tailblocks, adaptada a JSX.
              </p>
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  onClick={() => alert("Gracias por visitar mi landing ✨")}
                >
                  ¡Explorar más!
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Foto de Mauricio"
                src="/foto-mauricio.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
