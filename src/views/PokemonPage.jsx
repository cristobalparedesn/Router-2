import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import Loading from "../components/Loading";

const PokemonPage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) setError(true);
      const pokeData = await res.json();
      setPokemon(pokeData);
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: Pokemon no encontrado</div>;

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Card className="pokemon-card d-flex flex-row border border-dark my-3">
        <div>
          <Card.Img
            className="card-image p-5 img-fluid"
            src={pokemon.sprites?.other?.dream_world?.front_default}
          />
        </div>
        <Card.Body className="gap-3 d-flex flex-column text-start justify-content-start border border-dark rounded m-3 w-50">
          <Card.Title className="alert bg-dark text-white text-center">
            # {pokemon.id} - {pokemon.name}
          </Card.Title>

          <Card.Text>
            <ul>
              {pokemon.stats?.map((item) => {
                return (
                  <li key={item.stat.name}>
                    <div className="d-flex">
                      <p className="me-2">{item.stat?.name}:</p>
                      <p>{item.base_stat}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <NavLink to="/pokemones">
        <Button className="mb-4">Volver a Selección de Pokemon's</Button>
      </NavLink>
    </div>
  );
};

export default PokemonPage;
