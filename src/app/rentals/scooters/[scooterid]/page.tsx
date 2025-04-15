"use client";

import { useParams } from "next/navigation";

export default function ScooterPage(){
    const id = useParams().scooterid;
    return (
        <>
        <div>
            Welcome to the scooter page {id}
        </div>
        </>
    )
}