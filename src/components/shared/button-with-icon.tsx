import { Button } from "@mantine/core";
import { FC } from "react";
import { BiFilter } from 'react-icons/bi';

enum IconPosition{
    leftIcon='leftIcon',
    rightIcon='rightIcon'
}
interface ButtonWithIconProps{
    iconPosition:IconPosition,
    iconComponent:FC,
    label:string
}
export function ButtonWithIcon ({}) {
    return <Button leftIcon={<BiFilter />} variant="default" color="gray" >Filters</Button>;
  }