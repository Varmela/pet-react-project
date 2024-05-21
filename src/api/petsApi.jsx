import axios from "axios";

export async function getAllBirds(){
    const res = await axios.get('https://freetestapi.com/api/v1/birds ');
    return res.data;
    
}

 export async function getAllDogs(){
    const res = await axios.get('https://freetestapi.com/api/v1/dogs ');
 return res.data;
}

export async function getAllCats(){
    const res = await axios.get('https://freetestapi.com/api/v1/cats');
    return res.data;
}

