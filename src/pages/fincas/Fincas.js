import React, {useState} from'react'
import FincaRegister from '../../components/Register/FincaRegister'
import { FaPlusSquare } from 'react-icons/fa';
import './Fincas.css'

const Fincas = ()=>{
    const [newFinca, setNewFinca] = useState(false)
    const [finca, setFinca] = useState({
        id: "",
        nombre: "",
        hectareas: "",
        arboles: ""
      });
    const [fincas, setFincas] = useState([
    {
        id: 1,
        nombre: 'Arcadia',
        hectareas: 5,
        arboles: 20000
    },
    {
        id: 2,
        nombre: 'Fatima',
        hectareas: 3,
        arboles: 15000
    },
    {
        id: 3,
        nombre: 'Loma',
        hectareas: 2,
        arboles: 10000
    }
    ]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFinca({ ...finca, [name]: value });
    };
    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(finca)
        setFincas([...fincas, finca]);
        setFinca([{
            id: "",
            nombre: "",
            hectareas: "",
            arboles: ""
          }])
        setNewFinca(false)
    }

    return(
        <main>
            <div className="fincas-header">
                <h1 className="title-finca finca-items">Fincas</h1>
                {newFinca ? <div className="finca-items"><FincaRegister handleSubmit={handleSubmit} handleChange={handleChange} finca={finca}/> </div>: <div className="finca-items"> <button className="new-button-finca" onClick={()=>setNewFinca(true)}><FaPlusSquare size={20}/></button> </div>}
            </div>
            <div>
                <table className="table-fincas">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Hectareas</th>
                            <th>N° De Arboles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fincas.map((finca, index) => {
                            return (
                                <tr key={finca.id}>
                                    <td>{finca.nombre}</td>
                                    <td>{finca.hectareas}</td>
                                    <td>{finca.arboles}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
            
        </main>
    )
}
 export default Fincas;