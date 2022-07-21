import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

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
        setPoke = poke.sort((a, b) => a.id - b.id);
      });
    }
    ambilpoke(data);
  };

  useEffect(() => {
    datapokeall();
  }, []);

  const [cari, setCari] = useState("");

  console.log(poke);

  const [buka, setbuka] = useState(false);

  const handlebuka = () => {
    setbuka(!buka);
  };

  const tutup = () => {
    setbuka(false);
  };

  return (
    <>
      <div className="laptop:py-[20%] laptop:px-10 ">
        <div className="bg-white rounded-xl  shadow-2xl">
          <div className=" p-6 flex justify-center">
            <h1 className="font-bold laptop:text-6xl text-red-600 text-2xl">
              This List Of Pokemon
            </h1>
          </div>
          <div className="flex justify-center p-3">
            {buka ? (
              ""
            ) : (
              <input
                type="button"
                className="font-bold text-red-600 laptop:text-2xl"
                value="Search something? Hover Me"
                // onClick={handlebuka}
                onMouseMove={handlebuka}
              />
            )}

            {buka ? (
              <input
                className="w-[300px] border py-3 px-3 rounded-2xl shadow-lg hover:border hover:border-yellow-400"
                type="text"
                placeholder="Tulis disini yak"
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                onMouseLeave={tutup}
              />
            ) : (
              <p></p>
            )}
          </div>
          <div className="">
            <div className="px-[15%]">
              <div className="grid laptop:grid-cols-3 grid-cols-1  ">
                {poke.map((p) => {
                  if (p.name.toLowerCase().includes(cari.toLowerCase())) {
                    return (
                      <>
                        <div className="p-4">
                          <div className="p-3 bg-slate-200 shadow-2xl rounded-3xl">
                            <div className="flex justify-center">
                              <img src={p.sprites.front_default} alt={p.name} />
                            </div>
                            <h1 className="flex justify-center font-bold text-xl capitalize ">
                              {p.name}
                            </h1>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Poke;
