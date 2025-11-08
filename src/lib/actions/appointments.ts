"use server"

import { prisma } from "../prisma"

export async function getappointments(){
    try{
        const appointments =await prisma.appointment.findMany({
            include:{
            user:{ select:{firstName:true,lastName:true ,email:true}},
            doctor:{ select:{name:true ,imageUrl:true},}, 
            }
            ,orderBy:{createdAt:'desc'}
        },
    );
        return appointments;
    }catch(err){
        console.log("Faild to Sync Appointments " , err)
        throw new Error("Faild Fetch Appointments")
    }
}