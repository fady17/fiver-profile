
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ImagesSliderProps {
    images: string[];
    children: React.ReactNode;
    overlay?: boolean;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
}

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
                                                              images,
                                                              children,
                                                              overlay = true,
                                                              overlayClassName,
                                                              className,
                                                              autoplay = true,
                                                              direction = "up",
                                                          }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const loadImages = async () => {
            try {
                const loadPromises = images.map((image) => {
                    return new Promise<string>((resolve, reject) => {
                        const img = new Image();
                        img.src = image;
                        img.onload = () => resolve(image);
                        img.onerror = reject;
                    });
                });

                const loaded = await Promise.all(loadPromises);
                setLoadedImages(loaded);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images", error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [images]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === "ArrowLeft") {
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        let interval: number | undefined;
        if (autoplay && !isLoading) {
            interval = window.setInterval(() => {
                handleNext();
            }, 5000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (interval) window.clearInterval(interval);
        };
    }, [isLoading, autoplay]);

    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            y: "-150%",
            transition: {
                duration: 1,
            },
        },
        downExit: {
            opacity: 1,
            y: "150%",
            transition: {
                duration: 1,
            },
        },
    };

    if (isLoading) {
        return <div className={cn("h-full w-full flex items-center justify-center", className)}>Loading...</div>;
    }

    return (
        <div
            className={cn(
                "overflow-hidden h-full w-full relative flex items-center justify-center",
                className
            )}
            style={{
                perspective: "1000px",
            }}
        >
            {children}
            {overlay && (
                <div
                    className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
                />
            )}

            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={loadedImages[currentIndex]}
                    initial="initial"
                    animate="visible"
                    exit={direction === "up" ? "upExit" : "downExit"}
                    variants={slideVariants}
                    className="image h-full w-full absolute inset-0 object-cover object-center"
                />
            </AnimatePresence>
        </div>
    );
};