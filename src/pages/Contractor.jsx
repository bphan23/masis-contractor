import ContractorForm from '../ui/ContractorForm'

function Contractor() {
    return (
        <div className="flex flex-col">
            <h1 className="my-7 text-center text-3xl font-semibold">
                Contractor Services
            </h1>

            <div className="mx-10 mb-10 grid grid-cols-2 grid-rows-3 gap-10">
                <div>
                    <img
                        src="../../public/images/construction-1.jpg"
                        alt="construction 1"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-2.jpg"
                        alt="construction 2"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-3.jpg"
                        alt="construction 3"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-4.jpg"
                        alt="construction 4"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-5.jpg"
                        alt="construction 5"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-6.jpg"
                        alt="construction 6"
                    />
                </div>
            </div>

            <div className="min-h-[500px] bg-[url('../public/images/bg.png')] bg-cover bg-fixed">
                <h2 className="mt-32 text-center text-5xl font-semibold uppercase text-white">
                    Let Us Bring Your Visions to Life
                </h2>
            </div>

            <h2 className="my-7 text-center text-2xl font-semibold">
                Free Estimate
            </h2>

            <ContractorForm />
        </div>
    )
}

export default Contractor
