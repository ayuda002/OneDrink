import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";
import Jin from '../src/detail/jin_des.json';
import Head from 'next/head'
import Header from '../components/molecules/header'

type description ={
  name:string,
  image_url:string,
  image_url2:string,
  image_url3:string,
  description:string,
  price:string,
  url:string;
}

type Jin = description;


export default function Jin_Des(){
    return(
     <div className="m-5">
      <Head>
        <title>「ジン」の原料は何？初心者におすすめの銘柄紹介！</title>
        <meta name="description" content="「ジン」ってどんなお酒？原料は？初心者に飲みやすい銘柄は何？" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='mx-5 my-5'>
    <Header />
    </div>
    <Card className="w-100" color="blue">
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        ジンとは?
        </Typography>
        <Typography className="text-left">
        大麦、ライ麦、ジャガイモなどを原料とした蒸留酒。蒸留酒の中では比較的、個性が強くない上、西ヨーロッパでは古くから知られているため、そのまま飲むだけでなく、カクテルの材料として最も多く使われているものの一つである。
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3 ">
        <Typography variant="small" color="gray" className="flex gap-1 text-white">
         参照：<a href="https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%B3_(%E8%92%B8%E7%95%99%E9%85%92)">ウィキペディア</a>
        </Typography>
      </CardFooter>
    </Card>
    <div className='grid grid-cols-1 lg:grid-cols-4 my-5'>
    {Jin.map((item)=>(
       <Card key={item.name} className="mx-2 my-5">
       <div className="mx-auto relative">
       <a className="m-auto" href={item.image_url}>
         <img src={item.image_url2} alt="amazon_image"/></a>
         <img src={item.image_url3} width="1" height="1" alt="amazon_image"/>
       </div>
       <div className="text-center mt-4">
       <Typography variant="h5" className="mb-2">
          <a href={item.url}>{item.name}</a>
         </Typography>
       </div>
       <CardBody className="text-center mb-auto">
         <Typography className="text-left ">
         {item.description}
         </Typography>
       </CardBody>
       <CardFooter divider className="flex items-center justify-between py-3">
         <Typography variant="small">{item.price}</Typography>
         <a href={item.url}><Button>購入する</Button></a>
       </CardFooter>
     </Card>
    ))}
    </div>
    </div>
    )
}