import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleInfo, faEllipsisVertical, faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Menu, ActionIcon, Text } from '@mantine/core'
import MainCard from './MainCard'

const titleLeftIcon = <FontAwesomeIcon data-testid='title-left-icon' icon={faStar} />
const trendUpIcon = <FontAwesomeIcon icon={faArrowTrendUp} title='trendUpIcon' style={{ color: "#6ee62d" }} />
const trendDownIcon = <FontAwesomeIcon icon={faArrowTrendDown} style={{ color: "#DC3545" }} />
const warningIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#FF9518" }} />
const errorIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#F61D1D" }} />
const waitingIcon = <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#49A4DA" }} />

const bodyTextClick = (value: string) => {
  console.log('clicked: ', value)
}
afterEach(cleanup)
describe('renders Generic card', () => {
  it('renders file Parsing error card', () => {
    render(<MainCard
      title={'File Parsing'}
      cardClickHandler={bodyTextClick}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)
    expect(screen.getAllByText('File Parsing')[0]).toBeInTheDocument()
    expect(screen.getByTitle('trendUpIcon')).toBeInTheDocument()
    expect(screen.getAllByText('855')[0]).toBeInTheDocument()
  })

  it('handles click on the card body', () => {
    const handleCLick = jest.fn()
    render(<MainCard
      title={'File Parsing Errors'}
      cardClickHandler={handleCLick}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)

    fireEvent.click(screen.getByTestId('card-body'))
    expect(handleCLick).toHaveBeenCalledTimes(1)
    // cant check tool tip, tooltip is based on size and testing component has no size. TODO find a way to reliably set size in test enviroment 
    // fireEvent.mouseOver(baseDom.getByText('File Parsing Errors'))
    // expect(await baseDom.getByTestId('tooltip')).toBeInTheDocument()

  })

  it('Has a clickable Left Icon', () => {
    const handleIconCLick = jest.fn()
    const carIcon = (
      <ActionIcon
        data-testid='title-left-icon'
        variant='filled'
        color='red'
        radius='xl'
        size='xl'
        onClick={(e) => {
          e.stopPropagation()
          handleIconCLick()
        }}
      >
        <Text size={15} weight={500} color='white'>
          CAR
        </Text>
      </ActionIcon>
    )
    render(<MainCard
      titleLeftIcon={carIcon}
      title={'File Parsing Errors'}
      // handleBodyClick={handleCLick}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)
    fireEvent.click(screen.getByTestId('title-left-icon'))
    expect(handleIconCLick).toHaveBeenCalledTimes(1)
  })

  it('Has drop menu', () => {
    const menuItems = [
      {
        title: 'Test Item 1',
        onClick: () => console.log('Clicked Item 1')
      },
      {
        title: 'Test Item 2',
        onClick: () => console.log('Clicked Item 2')
      },
      {
        title: 'Delete',
        onClick: () => console.log('Clicked Delete'),
        color: 'red'
      }
    ]

    render(<MainCard
      title={'File Parsing Errors'}
      dropMenuItems={menuItems}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)

    expect(screen.queryByText('Test Item 1')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole(/button/))
    expect(screen.getByText('Test Item 1')).toBeInTheDocument()
  })


})