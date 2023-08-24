import React, { useEffect , useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from "./Loader"
import CoinCard from './CoinCard.jsx'
import ErrorComponent from './ErrorComponent'

const Coins = () => {
  
  const [coins,setCoins] = useState([]);
  const [loading,setloading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] =useState('inr');
 
  const  CurrencySymb = currency==="inr" ?"₹":currency ==="eur"?"€":"$";
  
   const changePage=(page)=>{
   setPage(page);
   setloading(true); 
   }

   const btns= new Array(132).fill(1);

  useEffect(()=>{
    const fetchCoin = async()=>{
           
          try{
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data);    
            setloading(false);
            console.log(data);

          } catch(error){
                 setError(true);
                 setloading(false);
          }
    }

    fetchCoin();
  },[currency,page])
    
  if(error)
  return <ErrorComponent msg={"Error While Fetching Coins"}/>

  return (
    <Container maxW={'container.xl'}>
     {loading ? <Loader/>: <>

     <RadioGroup value={currency} onChange={setCurrency}
       p={'8'} >
      <HStack spacing={'4'} > 
        <Radio value={"inr"}>₹ INR</Radio>
        <Radio value={"eur"}>€ EUR</Radio>
        <Radio value={"usd"}>$ USD</Radio>
      </HStack>
     </RadioGroup>

     <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
       {
        coins.map((i) => (
        <CoinCard id={i.id} name={i.name} img={i.image} 
         price={i.current_price} key={i.id} symbol={i.symbol}
         currencySym={CurrencySymb}/>
        ))
       } 
     </HStack>
   
      <HStack w={'full'} overflowX={'auto'} p={'8'} >
        
        {
           btns.map((item,index)=>(
            
            <Button key={index} backgroundColor={"blackAlpha.900"} 
            color={'white'} 
            onClick={()=>changePage(index+1)}>{index+1}</Button>

           ))
        }

      </HStack>      
     </> }
    </Container>
  )
}

export default Coins
