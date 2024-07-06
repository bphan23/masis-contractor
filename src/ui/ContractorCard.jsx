function ContractorCard({ serviceName, imagePath, serviceDescription }) {
    return (
        <div className="grid-rows-[auto, 1fr, auto] rounded-md border border-gray-200 bg-orange-500 text-center">
            <h2 className="my-3 text-xl font-semibold">{serviceName}</h2>
            <img className="mx-auto" src={imagePath} alt={serviceName} />
            <p className="my-3">{serviceDescription}</p>
        </div>
    )
}

export default ContractorCard
