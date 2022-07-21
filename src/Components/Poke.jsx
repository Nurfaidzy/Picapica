import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Poke = () => {
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [poke, setPoke] = useState([]);

  const datapokeall = async () => {
    const response = await axios.get(page);
    const data = await response.data.results;
    setPage(data.next);

    function ambilpoke(results) {
      results.forEach(async (pokemons) => {
        const response = await axios.get(pokemons.url);
        const data = await response.data;
        setPoke((currentPoke) => [...currentPoke, data]);
        poke.sort((a, b) => a.id - b.id);
      });
    }
    ambilpoke(data);
  };

  useEffect(() => {
    datapokeall();
  }, []);

  return (
    <>
      <div className="laptop:py-[20%] laptop:px-10 ">
        <div className="bg-white rounded-xl  shadow-2xl">
          <div className=" p-6 flex justify-center">
            <h1 className="font-bold laptop:text-6xl text-red-600">
              This List Of Pokemon
            </h1>
          </div>
          <p className="flex justify-center">Search something?</p>

          <div className="">
            <div className="px-[15%]">
              <div className="grid laptop:grid-cols-3 grid-cols-1 ">
                {poke.map((poke) => (
                  <div className="p-4">
                    <div className="p-3 bg-slate-200 shadow-2xl rounded-3xl">
                      <div className="flex justify-center">
                        <img
                          src={poke.sprites.front_default}
                          alt={poke.name}
                          className=""
                        />
                      </div>
                      <h1 className="flex justify-center font-bold text-xl capitalize ">
                        {poke.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Poke;
