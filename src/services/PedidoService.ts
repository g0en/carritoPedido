import { PedidoDto } from '../types/Pedido';
import PreferenceMP from '../entities/PreferenceMP';



export async function savePedido(pedido : PedidoDto){
	let urlServer = 'http://localhost:8080/pedido';
	let method:string = "POST";
	if(pedido && pedido.id !== null){
		method = "PUT";
		urlServer += "/editar"
	}else{
		urlServer += "/crear"
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

export async function createPreferenceMP(pedido?:PedidoDto){
    let urlServer = 'http://localhost:8080/mercadoPago/crearPreferenceMp';
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