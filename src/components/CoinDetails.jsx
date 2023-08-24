import { Box, Button, Container, Radio, RadioGroup, HStack, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import Loader from "./Loader";
import axios from 'axios'
import { server } from '../index'
import { useParams } from "react-router-dom"
import Chart from "./Chart.jsx"


const CoinDetails = () => {

  const [coin, setCoin] = useState({});
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState("24h")
  const [chartArray, setArray] = useState([])

  const CurrencySymb = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  useEffect(() => {
    const fetchCoinDetails = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: ChartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

        setCoin(data);
        setArray(ChartData.prices);
        // console.log(chartArray);
        setloading(false);
      }
      catch (error) {
        setError(true);
        setloading(false);
      }
    }

    fetchCoinDetails();
  }, [params.id, currency, days])

  const Btns = ["24h", "7d", "14d", "30d", "60d", "180d", "1yr", "Max"];

  const switchDate = (key) => {
    switch (key) {      
      case "24h":
        setDays("24h");
        setloading(true);
        break;
      case "7d":
        setDays("7d");
        setloading(true);
        break;
      case "14d":
        setDays("14d");
        setloading(true);
        break;
      case "30d":
        setDays("30d");
        setloading(true);
        break;
      case "60d":
        setDays("60d");
        setloading(true);
        break;
      case "180d":
        setDays("200d");
        setloading(true);
        break;
      case "1yr":
        setDays("360d");
        setloading(true);
        break;
      case "max":
        setDays("max");
        setloading(true);
        break;
      default:
        setDays("24h");
        setloading(true);
        break;
    }
  }

  return <Container maxW={"container.xl"}>
    {
      loading ? <Loader /> : (
        <>
          <Box marginTop={'2'} width={'full'} borderWidth={1} > 
            <Chart arr={chartArray} currency={CurrencySymb} Days={days} />
          </Box>

          <HStack p={'4'} overflowX={'auto'} >
            {
              Btns.map((i) => (
                <Button key={i} onClick={() => switchDate(i)} >{i}</Button>
              ))
            }
          </HStack>


          <RadioGroup value={currency} onChange={setCurrency}
            p={'8'} >
            <HStack spacing={'4'} >
              <Radio value={"inr"}>₹ INR</Radio>
              <Radio value={"eur"}>€ EUR</Radio>
              <Radio value={"usd"}>$ USD</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p={'16'}
            alignItems={'flex-start'}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.large} w={'16'} h={'16'}
              objectFit={'contain'} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{CurrencySymb}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar high={`${CurrencySymb}${coin.market_data.high_24h[currency]}`}
              low={`${CurrencySymb}${coin.market_data.low_24h[currency]}`}
            />

            <Box w={'full'} p={'4'}>
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
              <Item title={"Circulatig Supply"} value={coin.market_data.circulating_supply} />
              <Item title={"Market Cap"} value={`${CurrencySymb}${coin.market_data.market_cap[currency]}`} />
              <Item title={"All Time High"} value={`${CurrencySymb}${coin.market_data.ath[currency]}`} />
              <Item title={"All Time Low"} value={`${CurrencySymb}${coin.market_data.atl[currency]}`} />
            </Box>

          </VStack>
        </>
      )
    }
  </Container>
}

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={"4"}>
    <Text letterSpacing={'widest'} fontFamily={'Bebas Neue'}>{title}</Text>
    <Text>{value == null ? "NA" : value}</Text>
  </HStack>
)

const CustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={'50'} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-evenly'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Text fontSize={'sm'} >Price Fluctuations </Text>
      <Badge children={high} colorScheme={'green'} />
    </HStack>
  </VStack>
)

export default CoinDetails
