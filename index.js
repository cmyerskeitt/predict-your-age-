function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let a1 = age1*age1 
    console.log(a1)
    console.log(age1)
    let a2 = age2*age2 
    let a3 = age3*age3 
    let a4 = age4*age4
    let a5 = age5*age5 
    let a6 = age6*age6
    let a7 = age7*age7
    let a8 = age8*age8
    let ages = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8
    let result = Math.sqrt(ages)/2
    return Math.floor(result)
}