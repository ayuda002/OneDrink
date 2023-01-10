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
        <title>お酒一覧表|お酒の種類を一覧表でわかりやすく表示!!</title>
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
        <Accordion_Menu alcohol={Beel_data} type={"ビールカクテル"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Whisky} type={"ハイボール"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Japan_Wine} type={"日本酒"} url={"/"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={shochu} type={"焼酎"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Wine} type={"ワイン"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Gin} type={"ジンカクテル"} url={"/jin_description"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Vodka} type={"ウォッカカクテル"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Ram} type={"ラムカクテル"} url={"/"}/>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Liqueur} type={"リキュールカクテル"} url={"/"}/>
        </div>
        <div className='flex flex-col mx-3'>
        <div className='mt-3' />
        <Accordion_Menu alcohol={Rare} type={"珍しいカクテル"} url={"/"}/>
        <iframe className='mt-5 m-auto' src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=amazonstudent&banner=1EXM3ZCBAGEJJSPD8ZG2&f=ifr&linkID=ba00ebab63cbe6aa0d56d7a4b4021c4e&t=onedrink-22&tracking_id=onedrink-22" width="300" height="250" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        </div>
        </div>
    </div>
  )
}
