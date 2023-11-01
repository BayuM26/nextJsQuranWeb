"use client"

const Audio = ({audioFile}) => {
    return(
        <div>
            <audio src={audioFile} controls/>
        </div>
    )
}

module.exports = Audio