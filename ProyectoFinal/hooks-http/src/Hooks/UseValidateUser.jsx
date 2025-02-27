export function UseValidateUser({age}){

    try {

        if(age < 18){
            // throw "El usuario es menor de edad";
            throw new Error("El usuario es menor de edad");
        }

        console.log("TRY");
    } catch (error) {
        console.log("CATCH: " + error);
    } finally {
        console.log("FINALLY");
    }
}