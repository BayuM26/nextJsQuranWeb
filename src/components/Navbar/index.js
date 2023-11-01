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
            <div className="relative">
                <input type="text" className="rounded-md border-2 text-sm p-2 md:w-52 sm:w-52 w-full" placeholder="Serach ...."/>
                <button className="absolute top-3 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

module.exports = Navbar