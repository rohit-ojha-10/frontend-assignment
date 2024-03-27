import Button from "./Button"
import {render, screen } from '@testing-library/react'
it('Box componnet should be visible',()=>{
    render(<Button/>)
    const message= screen.queryByText(/Hello world/i);
    message;
    expect(<Button/>).toBeDefined()
})