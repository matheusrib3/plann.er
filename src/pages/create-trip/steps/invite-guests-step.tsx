import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    opeConfirmTripModal: () => void
    emailsToInvite: string[]



}


export function InviteGuestsStep({ openGuestsModal, emailsToInvite, opeConfirmTripModal }: InviteGuestsStepProps) {

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                    <span className='text-zinc-100 text-lg flex-2'>{emailsToInvite.length} pessoa(s) convidada(s)
                    </span>
                ) : (<span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>)}

                <input type="text" placeholder="" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </button>

            <div className='w-px h-6 bg-zinc-800'></div>

            <Button onClick={opeConfirmTripModal} variant="primary" size="default">
                Confirmar Viagem
                <ArrowRight className="size-5"></ArrowRight>
            </Button>
        </div>

    )

}