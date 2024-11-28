import { Link } from "react-router-dom";

export const NoEncontrado = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <section className="h-100 p-5 text-bg-dark rounded-3">
            <h2>!!ERORR!!</h2>
            <p>No encontrado, por favor regresar al inicio</p>
            <Link to="/" className="btn btn-outline-light">
              Volver al Inicio
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};
