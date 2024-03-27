import {render, screen } from '@testing-library/react'
import Home from "./Home"

it('Home componnet should be visible',()=>{
    render(<Home/>)
    const message= screen.queryByText(/Hello world/i);
    message
    expect(<Home/>).toBeDefined()
})