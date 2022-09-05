import React from'react'
import './FincaRegister.css'

const FincaRegister = (props)=>{
    const {handleChange, finca, handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
              <div className="form-group">
                <small>Nombre</small>
                <input  onChange={handleChange}
                  value={finca.nombre} type="text" name="nombre" placeholder="Digita nombre finca"/>
              </div>
              <div className="form-group">
                <small>Hectareas</small>
                <input onChange={handleChange}
                  value={finca.hectareas} type="number" name="hectareas"/>
              </div>
              <div className="form-group">
                <small>Arboles</small>
                <input onChange={handleChange}
                  value={finca.arboles} type="number" name="arboles"/>
              </div>
              <div className="form-group">
                  <button>
                    Guardar Finca
                  </button>
              </div>
        </form>
    )
}
 export default FincaRegister;