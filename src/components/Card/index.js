const { default: Link } = require("next/link");
const Audio = require("./Audio");
const Nomor = require("../Nomor");

const Card = ({Api}) => {
    
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {
            Api.data.map((data,index) => {
              return (
                <Link href={`/DetailSurah/${data.nomor}`} key={index} className="rounded-lg p-4 space-x-2 space-y-3 shadow-xl border bg-white">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center">
                            <Nomor dataNomor={data.nomor} />
                            <div className="p-2">
                                <h1 className="md:text-md sm:text-sm text-sm font-bold">{ data.namaLatin } <span className="font-normal text-xs">({data.arti})</span></h1>
                                <h1 className="md:text-sm sm:text-xs text-xs text-gray-400 flex items-center">
                                { data.tempatTurun } 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                                <span>{ data.jumlahAyat } Ayat</span></h1>
                            </div>
                        </div>
                        <p className="md:text-lg sm:text-md text-md md:flex sm:flex hidden font-serif">{data.nama}</p>
                    </div>
                    <Audio audioFile={data.audioFull['03']}/>
                </Link>
              )
            })
          }
        </div>
    )
}

module.exports = Card