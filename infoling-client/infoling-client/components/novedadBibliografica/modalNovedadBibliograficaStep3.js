import { useRouter } from 'next/router'

function ModalNovedadBibliograficaStep3() {

    const router = useRouter()

    const closeModal = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <>
            <input type="checkbox" id="modal-form-nb-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-12">Gracias</h3>
                    <div className="p-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla enim voluptatem corporis fuga officia eius harum necessitatibus, unde nihil ullam cumque natus dolor earum facere, aspernatur quia? Cum, dolorum.
                        </p>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-secondary" onClick={(e)=>closeModal(e)}>
                            De nada
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalNovedadBibliograficaStep3
