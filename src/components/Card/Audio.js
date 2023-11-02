"use client"

const Audio = ({audioFile}) => {
    return(
        <div className="flex justify-center w-full">
            <audio src={audioFile} controls/>
        </div>
    )
}

module.exports = Audio