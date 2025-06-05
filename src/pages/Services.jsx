import GetInTouch from '../ui/GetInTouch'

function Services() {
    return (
        <>
            {/* Header and Services Section */}
            <div className="bg-off-white mt-10 pt-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="my-16 text-center">
                        <h1 className="text-[46px] font-semibold text-gray-900">
                            Services
                        </h1>
                        <span className="border-masis-orange mt-4 inline-block w-44 border-t-2"></span>
                    </div>

                    <section className="space-y-24 pb-24 text-gray-800">
                        {[
                            {
                                title: 'Roofing',
                                text: [
                                    'MASIS GENERAL CONTRACTOR has the experience and knowledge to ensure your roofing installation, repair, and maintenance projects are completed on schedule and with the highest quality of craftsmanship.',
                                    "If you're looking for a new roof or roofing repair, give us a call today at (206) 510-8575. We’ll sit down with you to provide a free initial consultation and estimate.",
                                ],
                                images: ['roofing1.webp', 'roofing2.webp'],
                            },
                            {
                                title: 'Flooring',
                                text: [
                                    "Whether you’re renovating your home or business, or installing flooring for the first time, it's one of the best ways to dramatically improve the look of a room, kitchen, or workspace.",
                                    "We'll help you determine the best options for your needs. Call us for a free estimate on your flooring project!",
                                ],
                                images: ['flooring1.webp', 'flooring2.webp'],
                            },
                            {
                                title: 'Painting',
                                text: [
                                    'Painting is one of the best investments a property owner can make in home or building maintenance.',
                                    "Whether it's a house, apartment, barn, or commercial building — call us at 541-260-7220 for a free painting estimate. We'll review your options and budget during a detailed consultation.",
                                ],
                                images: ['painting1.webp', 'painting2.webp'],
                            },
                            {
                                title: 'Plumbing',
                                text: [
                                    'Insulation might not be visible, but it’s crucial for comfort and energy efficiency in homes and businesses.',
                                    'From fiberglass to cellulose, batting to blown-in, our crew has the experience to handle it all. Proper insulation is a great investment that reduces energy bills and improves comfort year-round.',
                                ],
                                images: ['plumbing1.webp', 'plumbing2.webp'],
                            },
                            {
                                title: 'Decks and Patios',
                                text: [
                                    'Is your old deck becoming an eyesore or safety hazard? Give us a call — we’ll take a look and suggest the best ways to restore or rebuild it.',
                                    'We have extensive experience building decks, patios, porches, pool decks, built-in bars, and fire pits using a wide selection of materials to fit your style and budget.',
                                ],
                                images: ['deck1.webp', 'deck2.webp'],
                            },
                            {
                                title: 'Home Additions',
                                text: [
                                    'A well-planned home addition not only increases your home’s value, it also boosts your comfort and functionality today.',
                                    "The best home additions balance your current needs with future resale value. Let's help you get the most out of your living space.",
                                ],
                                images: [
                                    'construction-5.jpg',
                                    'construction-6.jpg',
                                ],
                            },
                        ].map((service, idx, arr) => (
                            <div
                                key={idx}
                                className={`${idx === arr.length - 1 ? 'pb-12' : ''} space-y-6`}
                            >
                                <h2 className="text-2xl font-bold text-black">
                                    {service.title}
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    {service.text.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    {service.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={`/images/${img}`}
                                            alt={`${service.title} ${i + 1}`}
                                            className="h-80 w-full max-w-md rounded-xl object-cover shadow-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* Full-width Contact Banner */}
            <div className="w-full">
                <GetInTouch />
            </div>
        </>
    )
}

export default Services
