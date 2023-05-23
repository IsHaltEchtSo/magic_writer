import React from 'react'
import { render, screen } from '@testing-library/react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "@testing-library/jest-dom"

import AuthenticationPage from '../src/authentication'
import DownloadPage from '../src/download'
import IndexPage from '../src/index'
import MagicWriterPage from '../src/magicwriter';

const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/authentication",
      element: <AuthenticationPage />,
    },
    {
      path: "/download",
      element: <DownloadPage />,
    },
    {
      path: '/writer',
      element: <MagicWriterPage />
    }
  ]);

describe('Testing Landing Page', () => {
    beforeEach(() => {
      render(<RouterProvider router={router} />)
    })

    test('the header', () => {

        const header = screen.getByText('Landing Page')
        expect(header).toBeInTheDocument()
    })

    test('the body', () => {

      const paragraph = screen.getByText(/This is/)
      const paragraphTwo = screen.getByText(/be pictures/)

      expect(paragraph).toBeInTheDocument()
      expect(paragraphTwo).toBeInTheDocument()

    })
})