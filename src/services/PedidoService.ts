import { Pedido } from '../entities/Pedido';
import PreferenceMP from '../entities/PreferenceMP';



export async function savePedido(pedido : Pedido){
	let urlServer = 'http://localhost:8080/pedido';
	let method:string = "POST";
	if(pedido && pedido.id !== null){
		method = "PUT";
	}
	await fetch(urlServer, {
	  method: method,
	  body: JSON.stringify(pedido),
	  headers: {
		"Content-Type": 'application/json'
	  },
	  mode: "cors"
	});
	
}

export async function createPreferenceMP(pedido?:Pedido){
    let urlServer = 'http://localhost:8080/api/pedidos/create-preference-mp';
	let method:string = "POST";
    const response = await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(pedido),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
    return await response.json() as PreferenceMP;   
}