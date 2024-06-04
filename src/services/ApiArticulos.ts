import ArticuloManufacturado from "../entities/ArticuloManufacturado";

export async function getAllArticuloManufacturado(){
	const urlServer = 'http://localhost:8080/articuloManufacturado';
	const response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json() as ArticuloManufacturado[];
}