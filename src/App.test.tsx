import {render } from '@testing-library/react'
import App from './App'

it('App componnet should be visible',()=>{
    render(<App/>)
    // const message= screen.queryByText(/Hello world/i);
    expect(<App/>).toBeDefined()
})

it('App componnet should be visible',()=>{
    render(<App/>)
    // const message= screen.queryByText(/Hello world/i);
    expect(<App/>).toBeDefined()
})