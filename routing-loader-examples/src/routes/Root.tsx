import { Link, Outlet, useLoaderData } from 'react-router-dom';

export interface PokemonType {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonsType {
  pokemons: {
    results: PokemonType[];
  };
}

export const rootLoader = async (): Promise<PokemonsType> => {
  const results = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (!results.ok) throw new Error('Something went wrong!');

  const pokemons = await results.json();

  return { pokemons };
};

const Root = () => {
  const { pokemons } = useLoaderData() as PokemonsType;

  return (
    <>
      <header>
        {pokemons.results.map(pokemon => (
          <Link style={{ marginRight: 20 }} key={pokemon.name} to={`pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        ))}
      </header>
      <Outlet />
    </>
  );
};

export default Root;
