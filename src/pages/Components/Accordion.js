import style from '@/styles/expenses.module.css';
import { lazy, useState } from 'react';

const Accordion = ({title, content}) => {

    const [open, setOpen] = useState(false);
    const [sign, setSign] = useState("+");

    const toggle = () => {
        if(!open){
            setSign('–');
            setOpen(true);
        }else{
            setSign('+');
            setOpen(false);
        }
    }

  return (
    <div>
      <div className="flex">
        <div className="basis-4/5">
          <h1 className="font-medium text-3xl tracking-tight">{title}</h1>
        </div>
        <div
          className={`flex grow justify-end text-3xl font-thin ${style.plusSign}`}
        >
          <button onClick={toggle}>{sign}</button>
        </div>
      </div>
      <div className={`tracking-tight leading-5 my-3 font-medium ${style.contentColor} ${style.appearAnimation} ${open ? `${style.fadeIn}` : `${style.fadeOut}`}`}>{content}</div>
      <hr className={`${style.outline} my-1`}></hr>
    </div>
  );
};

export default Accordion;
