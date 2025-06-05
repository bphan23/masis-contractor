import React, { useState, lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-image-lightbox/style.css' // Lightbox styles
import GetInTouch from '../ui/GetInTouch'

const Lightbox = lazy(() => import('react-image-lightbox'))

const images = [
    '/images/deck2.webp',
    '/images/deck1.webp',
    '/images/plumbing1.webp',
    '/images/plumbing2.webp',
    '/images/painting2.webp',
    '/images/painting1.webp',
    '/images/flooring2.webp',
    '/images/flooring1.webp',
    '/images/roofing1.webp',
]

function Gallery() {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    // Initialize AOS once
    useEffect(() => {
        AOS.init({ once: true })
    }, [])

    return (
        <div className="bg-off-white mt-10 pt-12">
            <div className="my-16 text-center">
                <h1 className="text-[46px] font-semibold">Gallery</h1>
                <span className="border-masis-orange mt-4 inline-block w-44 border-t-2"></span>
            </div>

            <div className="flex justify-center">
                <div className="mb-20 grid max-w-[1300px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            className="h-[280px] w-[420px] cursor-pointer object-cover shadow-md"
                            data-aos="zoom-in"
                            onClick={() => {
                                setPhotoIndex(i)
                                setIsOpen(true)
                            }}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            {isOpen && (
                <Suspense
                    fallback={<div className="text-white">Loading...</div>}
                >
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                            images[
                                (photoIndex + images.length - 1) % images.length
                            ]
                        }
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + images.length - 1) % images.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                </Suspense>
            )}

            <GetInTouch />
        </div>
    )
}

export default Gallery
