import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) );


  return pokemonsArr.map( (_, index) => index+1 )


}

const getPokemonOptions  = async () => {
  const mixedPokemon = getPokemons().sort( () => Math.random()-0.5 )
  return await getPokemonNames( mixedPokemon.splice(0,4)  )

}

const getPokemonNames = async ( [a,b,c,d] = [] )=> {

  const resp = await  pokemonApi.get(`/1`)

  const arrPromise = [
    await pokemonApi.get(`/${a}`),
    await pokemonApi.get(`/${b}`),
    await pokemonApi.get(`/${c}`),
    await pokemonApi.get(`/${d}`)
  ]
  const [p1,p2,p3,p4] = await Promise.all(arrPromise)

  return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id},

  ]

}



export default  getPokemonOptions

