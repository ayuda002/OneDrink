// import { Accordion} from "flowbite-react";
// import { AccordionPanelProps } from "flowbite-react/lib/esm/components/Accordion";
import { Fragment, useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Card } from "flowbite-react";

import Alcohol from '../../src/alchol_detal.json';

import Modal from "./modal";

type Props = {
  type: string;
  alcohol: AlcoholData[];
};

type AlcoholData = {
  name: string;
  degrees: string;
  detail: string;
  coment:string;
  key: number;
};

type Alcohol_Detail = {
  name:string,
  alchol:string,
  detail:string,
}

type Alcohol = Alcohol_Detail

const Accordion_Menu: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(0);

  const [osake,setOsake] = useState({})

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  // useEffect(()=>{
  //   Alcohol.map((item)=>{
  //     if(item.name === props.type){
  //       setOsake(item);
  //     }
  //   })
  // },[])

  // console.log(osake)

  return (
    <Card>
      <div className="flex flex-row justify-between">
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.type}</h5>
      </div>
      <Fragment>
        <div className="flex flex-col">
          {props.alcohol.map((item) => (
            <Accordion
              open={open === item.key}
              animate={customAnimation}
              key={item.key}
            >
              <AccordionHeader onClick={() => handleOpen(item.key)}>
                <p className="text-base">{item.name}</p>
              </AccordionHeader>
              <AccordionBody>
                <p className="text-sm font-semibold">アルコール度数：{item.degrees}</p>
                <p className="text-sm font-semibold">原材料：{item.detail}</p>
                <p className="my-3 text-sm">{item.coment}</p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </Fragment>
    </Card>
  );
};

export default Accordion_Menu;
