import { getstroeddata } from "../utilities/fakedb";

export const Productsandcart=async()=>{
    const productsData=await fetch('products.json')
    const products =await productsData.json();


const savecart =getstroeddata();
const initialCart=[];

   
    for(const id in savecart){
    const addedproduct=products.find(product => product.id===id);
    
        if(addedproduct){
            const quantity=savecart[id];
            addedproduct.quantity=quantity;
            initialCart.push(addedproduct);

        }

}
return {  products: products,initialCart: initialCart};

}