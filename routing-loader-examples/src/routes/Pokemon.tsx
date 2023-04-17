import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
// Types
import { PokemonType } from './Root';
import React from 'react';

export const pokemonLoader = async ({ params }: LoaderFunctionArgs): Promise<PokemonType> => {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  if (!results.ok) throw new Error('Something went wrong!');

  const pokemon = await results.json();

  return pokemon;
};

const Pokemon = () => {
  const pokemon = useLoaderData() as PokemonType;
  return (
       <React.Suspense fallback={<p>Loading data...</p>}>
    
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} />
    </React.Suspense>
  );
};

export default Pokemon;
