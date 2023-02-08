import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const getImg = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
      );
      const pokeData = await res.json();
      console.log(pokeData);
      setPokemones(pokeData.results);
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };
  useEffect(() => {
    getImg();
  }, []);

  const handleClick = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
    if (e.target.value) setError(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="container px-4">
      <Form className="d-flex flex-wrap container-card gap-3">
        <h3 className="alert alert-secondary mb-0 mt-5 text-start">
          Busca a tu Pokemon
        </h3>
        <Form.Select className="bg-light" onChange={handleChange}>
          {pokemones.map((pokemon) => (
            
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          
          ))}
        </Form.Select>
        <Button variant="primary"  onClick={handleClick}>
          Ver Detalles
        </Button>
      </Form>
      {error && (
        <div className="alert alert-danger my-3">
          Seleccione un Pokemon antes de continuar
        </div>
      )}
    </div>
  );
};

export default Pokemones;
