import { useMutation } from "@tanstack/react-query"
import Loading from "./components/Loading"
import { changeOfferState, createPawn } from "./api/queries"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"


export default function Sandbox() {

    const auth = useAuthUser()

    // * Tablas

    // Poner oferta en curso
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => changeOfferState(35, 'en_curso'),
    //     onSuccess: () => console.log("Éxito")
    // })

    // Rechazar oferta
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => changeOfferState(35, 'rechazada'),
    //     onSuccess: () => console.log("Éxito")
    // })

    // Tienda confirma que llegó producto
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => changeOfferState(35, 'finalizada', 8),
    //     onSuccess: () => console.log("Éxito")
    // })

    // TODO: Probar
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => createPawn(auth.id, 2, 3000),
    //     onSuccess: () => console.log("Éxito")
    // })

    // TODO: Probar
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => shopBuysItem(auth.id, 200000, 3),
    //     onSuccess: () => console.log("Éxito")
    // })

    
    // *    Detalle

    // TODO: Probar
    // Contra ofertar producto
    const { data, mutate, isPending } = useMutation({
        mutationFn: () => shopProposePrice(2, 3),
        onSuccess: () => console.log("Éxito")
    })


    // *    Checkout

    // TODO: Probar
    // Cliente paga para recuperar producto
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => payPawn(idPawn, name, lastName, address, department, municipality, 
    //         phone, email, info),
    //     onSuccess: () => console.log("Éxito")
    // })

    // TODO: Probar
    // Cliente compra
    // const { data, mutate, isPending } = useMutation({
    //     mutationFn: () => clientBuysItem(idUser, price, idProduct, name, lastName, address, department, municipality,
    //         phone, email, additionalInfo),
    //     onSuccess: () => console.log("Éxito")
    // })


    function callMutation(){
        mutate()
    }

    if (isPending) {
        return <Loading />
    }

    return (
        <>
            <button onClick={callMutation} className=" mt-20 bg-slate-500 rounded text-white p-4">
                Probar
            </button>

            {
                !(data === undefined) &&
                JSON.stringify(data)
            }
        </>
    )
}