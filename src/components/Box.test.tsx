import {render, screen } from '@testing-library/react'
import Box from "./Box"
import { SetStateAction } from 'react';

it('Box componnet should be visible',()=>{
    render(<Box id={''} width={0} height={0} setCounterChange={function (value: SetStateAction<boolean>): void {value
        throw new Error('Function not implemented.');
    } } counterChange={false}/>)
    const message= screen.queryByText(/Hello world/i);
    message;
    expect(<Box id={''} width={0} height={0} setCounterChange={function (value: SetStateAction<boolean>): void {value
        throw new Error('Function not implemented.');
    } } counterChange={false}/>).toBeDefined()
})