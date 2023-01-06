import Head from 'next/head'
import Header from '../components/molecules/header'
import Accordion_Menu from '../components/molecules/accordion'

import Beel_data from '../src/beer.json'
import Japan_Wine from '../src/japan_wine.json'
import shochu from '../src/shochu.json'
import Wine from '../src/wine.json'
import Whisky from '../src/whisky.json';
import Gin from '../src/gin.json'
import Vodka from '../src/vodka.json';
import Ram from '../src/ram.json';
import Liqueur from '../src/liqueur.json';
import Rare from '../src/rare.json';

type alcohol ={
  name:string,
  degrees:string,
  detail:string,
  coment:string,
  key:number
}

type Beel_data = alcohol;
type Japan_Wine = alcohol;
type shochu = alcohol;
type Wine = alcohol;
type Whisky = alcohol;
type Gin = alcohol;
type Vodka = alcohol;
type Ram = alcohol;
type Liqueur = alcohol;
type Rare = alcohol;

export default function Home() {
  return (
    <div>
      <Head>
        <title>お酒一覧表</title>
        <meta name="description" content="お酒初心者の方向けに各お酒の度数と原材料を一覧で表示しました。一部のお酒には豆知識が書いてあります。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='mx-5 my-5'>
    <Header />
    </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 m-5'>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Beel_data} type={"ビールカクテル"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Whisky} type={"ハイボール"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Japan_Wine} type={"日本酒"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={shochu} type={"焼酎"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Wine} type={"ワイン"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Gin} type={"ジンカクテル"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Vodka} type={"ウォッカカクテル"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Ram} type={"ラムカクテル"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Liqueur} type={"リキュールカクテル"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Rare} type={"珍しいカクテル"}/>
        </div>
        </div>
    </div>
  )
}
