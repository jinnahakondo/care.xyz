import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-yellow-500">
            {/* Full Stars */}
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={"full" + i} />
            ))}

            {/* Half Star */}
            {hasHalfStar && <FaStarHalfAlt />}

            {/* Empty Stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={"empty" + i} />
            ))}
        </div>
    );
};