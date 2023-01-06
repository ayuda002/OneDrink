import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Example() {
  const [size, setSize] = useState(null);
 
  const handleOpen = (value:any) => setSize(value);
 
  return (
    <Fragment>
        <Button onClick={() => handleOpen("xl")} variant="gradient" size="sm">
          !
        </Button>
      <Dialog
        open={size === "xl"}
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}