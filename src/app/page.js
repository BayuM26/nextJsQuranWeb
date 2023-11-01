const Card = require("@/components/Card")
const { default: Image } = require("next/image")

const Home = async() => {
  let ApiListSurah = await fetch('https://equran.id/api/v2/surat')
  let DataApiListSurah = await ApiListSurah.json()
  
  return (
      <>
        <div className="relative">
          <Image
              src="/images/ic_quran_logo.png"
              alt="....."
              width={300}
              height={300}
              className="absolute z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="w-full object-cover h-screen opacity-60 absolute bg-gradient-to-tr from-green-700 to-green-500"></div>
          <Image
            src="/images/gambarAlquran.jpg"
            alt="....."
            width={1000}
            height={1000}
            className="w-full object-cover h-screen"
          />
        </div>
        <div className="p-10 block md:max-w-6xl sm:max-w-6xl max-w-7xl m-auto space-y-10">
          <Card Api={DataApiListSurah}/>
        </div>
      </>
  )
}

module.exports = Home