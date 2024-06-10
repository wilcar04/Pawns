import { AiFillProduct } from "react-icons/ai";

export default function NoInfo({ message }){
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <AiFillProduct size={70} className="text-gray-600 "/>
            <p className="text-gray-600 font-medium text-xl mt-4 w-52 ">{message}</p>
        </div>
    )
}