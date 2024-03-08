




type car ={
     manufacture:string
     model: string
     [key: string]: any;
}



function creatCar(manufacture: string, model: string, optional: Record<string, any>): car {
return{
     manufacture,
     model,
     ...optional
}


}


const myCar: car = creatCar("toyota","corolla", {color: "white",   year:"2024"})

console.log(myCar)