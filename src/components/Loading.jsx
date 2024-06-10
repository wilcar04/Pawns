import BeatLoader from 'react-spinners/BeatLoader'

export default function Loading(){
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <BeatLoader color='#5E1414' size={20}/>
        </div>
    )
}