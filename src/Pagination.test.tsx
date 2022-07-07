import React from 'react'
import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

describe("Pagination", () => {
    // beforeEach(() => {
    //     jest.mock("./__mocks__/fetch")
    // })

    it('should render list title', async () => {
        render(<Pagination />)
        const listTitle = await screen.findByTestId(`title-item-0`)   
        expect(listTitle).toBeInTheDocument();
    })

    it('should render list multiple 10 title', async () => {
        render(<Pagination />)
        const listTitles = await screen.findAllByTestId(/title-item/i)
        expect(listTitles.length).toBe(10)
    })
})
