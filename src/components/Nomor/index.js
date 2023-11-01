const { default: Image } = require("next/image")

const Nomor = ({dataNomor}) => {
    return(
        <div className="relative object-cover w-12">
            <p className="text-center">
                { dataNomor }
            </p>
            <Image 
                src="/images/desainNomorAyat.png" 
                alt="...."
                width={200}
                height={200}
                className="absolute -top-3.5"
            />
        </div>
    )
}

module.exports = Nomor