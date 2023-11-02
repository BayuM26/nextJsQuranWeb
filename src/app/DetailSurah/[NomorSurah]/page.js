const ArrowBack = require("@/components/ArrowBack");
const Nomor = require("@/components/Nomor");
const { default: Link } = require("next/link");

const DetailSurah = async({ params }) => {
    let ApiDetailSurah = await fetch(`https://equran.id/api/v2/surat/${params.NomorSurah}`)
    let DataApiDetailSurah = await ApiDetailSurah.json()
    var nomor = DataApiDetailSurah.data.nomor
    return(
        <div className="md:p-20 sm:p-10 p-2 space-y-4">
            <ArrowBack/>
            <div>
                <h1 className="text-2xl font-semibold text-center">{DataApiDetailSurah.data.namaLatin}</h1>
            </div>
            {
                DataApiDetailSurah.data.ayat.map((data) => {
                    return(
                        <div className="p-4">
                            <div className="space-y-10">
                                <div className="flex items-center justify-between">
                                    <div className="me-5">
                                        <Nomor dataNomor={data.nomorAyat}/>
                                    </div>
                                    <h3 className="md:text-4xl sm:text-3xl text-2xl font-serif bg-white md:p-4 sm:p-4 p-2 text-right border-2 rounded-md">{data.teksArab}</h3>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="md:text-lg sm:text-md text-sm text-slate-600">
                                        {data.teksLatin}
                                    </h4>
                                    <h3 className="md:text-xl sm:text-lg text-md">
                                        {data.teksIndonesia}
                                    </h3>
                                </div>
                            </div>

                            <hr/>
                        </div>
                    )
                })
            }

            <div className="flex justify-between items-center">
                {
                    (nomor-1 != 0)? 
                        <Link href={`/DetailSurah/${DataApiDetailSurah.data.nomor-1}`} className="px-2.5 py-2 rounded-md bg-blue-500 text-white">Surah Sebelumnya</Link>
                    : 
                        ''
                }

                {
                    (nomor < 114)?
                        <Link href={`/DetailSurah/${DataApiDetailSurah.data.nomor+1}`} className="px-2.5 py-2 rounded-md bg-blue-500 text-white">Surah Selanjutnya</Link>
                    :
                        ''
                }
                
            </div>
        </div>

    )
}

module.exports = DetailSurah