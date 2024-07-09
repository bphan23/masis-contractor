function ContractorCard({ serviceName, imagePath, serviceDescription }) {
    return (
        <div className="grid-rows-[auto, 1fr, auto] mb-7 rounded-md border border-gray-200 bg-stone-100 text-center lg:mb-0">
            <h2 className="my-3 font-semibold">{serviceName}</h2>
            <img className="mx-auto" src={imagePath} alt={serviceName} />
            <p className="my-3 px-2">{serviceDescription}</p>
        </div>
    )
}

export default ContractorCard
