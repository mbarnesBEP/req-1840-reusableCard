import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleInfo, faEllipsisVertical, faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Menu, ActionIcon } from '@mantine/core'
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
describe('renders Generic card', () => {
  it('renders file Parsing error card', () => {
    render(<MainCard
      title={'File Parsing Errors'}
      handleBodyClick={bodyTextClick}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)
    expect(screen.getByText('File Parsing Errors')).toBeInTheDocument()
    expect(screen.getByTitle('trendUpIcon')).toBeInTheDocument()
    expect(screen.getByText('855')).toBeInTheDocument()
  })

  it('handles click on the card body', () => {
    const handleCLick = jest.fn()
    render(<MainCard
      title={'File Parsing Errors'}
      handleBodyClick={handleCLick}
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
    render(<MainCard
      leftIconClick={handleIconCLick}
      titleLeftIcon={titleLeftIcon}
      title={'File Parsing Errors'}
      // handleBodyClick={handleCLick}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)
    fireEvent.click(screen.getByTestId('title-left-icon'))
    expect(handleIconCLick).toHaveBeenCalledTimes(1)
  })

  it('Has drop menu', () => {
    const menu =
      <Menu withinPortal position="bottom-end" shadow="sm">
        <Menu.Target>
          <ActionIcon>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Test Item 1</Menu.Item>
          <Menu.Item>Test Item 2</Menu.Item>
          <Menu.Item color="red">
            Delete all
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

    render(<MainCard
      title={'File Parsing Errors'}
      dropMenu={menu}
      bodyText={'855'}
      bodyRightIcon={trendUpIcon}
    />)

    expect(screen.queryByText('Test Item 1')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole(/button/))
    expect(screen.getByText('Test Item 1')).toBeInTheDocument()
  })


})