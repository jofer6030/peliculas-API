import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

console.log(process.env.API);
const API = process.env.API;

const List = () => {
  const [state, setState] = useState({
    data: [],
  });
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const api = async () => {
    // const res = await fetch("./assets/data.json");
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    // console.log(resJSON);   
    setLoading(false)
    setState({ data: resJSON.Search });
  };

  useEffect(() => {
    api();
  }, []);


  const handleSubmit = async e => {
      e.preventDefault();
      if(searchTerm === '') {
          return setError('Por Favor escribe un texto válido')
      }
      
      const res = await fetch(`${API}&s=${searchTerm}`)
      const data = await res.json()
      
      if(!data.Search) {
        return setError('No hay resultados')
      }
      setState({ data: data.Search})
      setError('')
      setSearchTerm('')
  }
  if(loading) {
    return <h3 className="text-white">LOADING...</h3>
  }

  return (
    <>
        <div className="row">
            <div className="col-md-4 offset-md-4 p-4">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={e => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        autoFocus
                    />
                </form>
                <p className='text-white'>{error && error }</p>
            </div>
        </div>
      <div className="row">
        {state.data.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default List;
