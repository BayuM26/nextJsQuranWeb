const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const Navbar = () => {
    return (
        <div className="flex md:flex-row sm:flex-row flex-col md:space-y-0 sm:space-y-0 space-y-5 justify-between place-items-center bg-gradient-to-tr from-green-700 to-green-500 p-4 px-20 shadow-lg">
            <Link href={"/"} className="text-xl flex items-center space-x-4 font-bold text-white hover:text-slate-200">
                <Image 
                    src="/images/ic_quran_logo.png"
                    alt="...."
                    width={50}
                    height={50}
                />
                <p>Qur`an Website</p>
            </Link>
        </div>
    )
}

module.exports = Navbar