"use client";
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return(
        <div>
            <h4>Review {reviewId} not found for product {productId}</h4>
        </div>
    )
}