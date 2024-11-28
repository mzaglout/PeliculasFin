import foto from "../../../assets/img/traje.jpg"
export const Acerca = () => {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card" style={{ width: "18rem", padding: "20px" }}>
        <img src={foto} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Mohamed Zaglout</h5>
          <p className="card-text">
          Fundador de una marca que crea soluciones tecnológicas innovadoras y sostenibles. Con su visión y liderazgo, ha logrado posicionar la empresa como líder en el sector, ofreciendo productos de alta calidad que mejoran la vida diaria de sus usuarios.
          </p>
          <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ver redes sociales
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
