"use client"
import { getappointments } from "@/lib/actions/appointments";
import { useQuery } from "@tanstack/react-query";

export function useGetAppointments(){
    const result = useQuery({
        queryKey: ["getAppointments"],
        queryFn: getappointments,
    });

    return result;
}