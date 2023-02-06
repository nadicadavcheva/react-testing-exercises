import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import NewMovieForm from "./NewMovieForm"

describe('NewMovieForm',()=>{
    const movieTitle = 'Black Panter'
    const user = userEvent.setup()
    const createHandler = jest.fn().mockName('createHandler')
    
    it('component shown on page', ()=>{
        render(<NewMovieForm onCreate={createHandler}/>)
        expect(screen.getByLabelText('New movie title')).toBeVisible()
    })
    it('component reset input field after submit',async()=>{
        render(<NewMovieForm onCreate={createHandler}/>)
        await user.type(screen.getByPlaceholderText('New movie title'),movieTitle)
        await user.click(screen.getByRole('button',{name:'Save'}))
        expect(screen.getByPlaceholderText('New movie title')).toHaveValue('')
    })
    it('calls handleSubmit',async()=>{
        render(<NewMovieForm onCreate={createHandler}/>)
        await user.type(screen.getByPlaceholderText('New movie title'),movieTitle)
        await user.click(screen.getByRole('button',{name:'Save'}))
        expect(createHandler).toHaveBeenCalledWith(movieTitle)

    })
})