"use client";

import { useParams } from "next/navigation"

export default function BikePage() {
    const id = useParams().bikeid;
    console.log(id);
    return (
     <>
     <div>
        Welcome to the bike page {id}
     </div>
     </>
    )
}