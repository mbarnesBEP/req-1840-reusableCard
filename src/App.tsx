import React from 'react'
import { Text, Container, Menu, ActionIcon, Center } from '@mantine/core'
import './App.css'
import MainCard from './MainCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEllipsisVertical, faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const FAKEDATA = [
  {
    title: 'Staging Data Review - Staging Data Review - Staging Data Review - Staging Data Review',
    value: 20,
    trend: 'down',
    icon: null
  },
  {
    title: 'File Parsing Errors',
    value: 855,
    trend: 'up',
    icon: null
  },
  {
    title: 'Duplicate Invoinces',
    value: 150,
    trend: 'up',
    icon: 'exception'
  },
  {
    title: 'Invoice Problems',
    value: 50,
    trend: null,
    icon: 'waiting'
  },
  {
    title: 'Unknown Company Codes',
    value: 50,
    trend: null,
    icon: 'waiting'
  }]

function App() {
  const starIcon = <FontAwesomeIcon onClick={() => console.log('clickedIcon')} data-testid='starIcon' size='lg' icon={faStar} />
  const titleRightIcon = <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#CF3F7C" }} />
  const trendUpIcon = <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: "#6ee62d", height: '27px', width: '32px' }} />
  const trendDownIcon = <FontAwesomeIcon icon={faArrowTrendDown} style={{ color: "#DC3545", height: '27px', width: '32px' }} />
  const warningIcon = <FontAwesomeIcon icon={faTriangleExclamation}
    style={{
      width: '28px',
      height: '24.5px',
      color: "#FF9518"
    }} />
  const errorIcon = <FontAwesomeIcon icon={faTriangleExclamation}
    style={{
      width: '28px',
      height: '24.5px',
      color: "#F61D1D"
    }} />
  const waitingIcon = <FontAwesomeIcon icon={faCircleExclamation}
    style={{
      width: '28px',
      height: '24.5px',
      color: "#49A4DA"
    }} />

  const carIcon = (
    <ActionIcon
      variant='filled'
      color='red'
      radius='xl'
      size='xl'
    >
      <Text size={15} weight={500} color='white'>
        CAR
      </Text>
    </ActionIcon>
  )

  const bwiIcon = (
    <ActionIcon
      variant='filled'
      color='blue'
      radius='xl'
      size='xl'
    >
      <Text size={15} weight={500} color='white'>
        BWI
      </Text>
    </ActionIcon>
  )

  const bodyClick = (value: string) => {
    console.log('clicked: ', value)
  }

  const cardFooter = <Text>This is a footer</Text>

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

  return (
    <Container fluid>
      <Center>
        {/* With drop Down */}
        <MainCard
          title={'Customers'}
          dropMenuItems={menuItems}
          bodyClickHandler={bodyClick}
          bodyText={'1,200'}
          withBorder={false}
        />
        {/* With Right Icon*/}
        <MainCard
          title={'File Parsing Errors'}
          bodyClickHandler={bodyClick}
          bodyText={'855'}
          bodyRightIcon={trendUpIcon}
          withBorder={false}
        />
        <MainCard
          title={'Staging Data Review'}
          bodyClickHandler={bodyClick}
          bodyText={'20'}
          bodyRightIcon={trendDownIcon}
          withBorder={false}
        />
        {/* With Left Icon */}
        <MainCard
          title={'Exceptions on Tasks'}
          bodyClickHandler={bodyClick}
          bodyLeftIcon={errorIcon}
          bodyText={'25'}
          withBorder={false}
        />
        <MainCard
          title={'Runners in Waiting State'}
          bodyClickHandler={bodyClick}
          bodyLeftIcon={warningIcon}
          bodyText={'25'}
          withBorder={false}
        />
        {/* Long header */}
        <MainCard
          title={'Super LOOOONG Header'}
          bodyClickHandler={bodyClick}
          bodyLeftIcon={warningIcon}
          bodyText={'25'}
          withBorder={false}
        />
        {/* Long Body */}
        <MainCard
          title={'Test Header'}
          bodyClickHandler={bodyClick}
          bodyText={'Super LOOOOONG Body'}
          bodyTextSize='1rem'
        />
        <MainCard
          title={'Runners in Warning State'}
          bodyClickHandler={bodyClick}
          bodyLeftIcon={waitingIcon}
          bodyText={'25'}
          withBorder={false}
        />
        {/* Report/Search cards */}
        <MainCard
          titleLeftIcon={carIcon}
          titleRightIcon={starIcon}
          bodyText='Cost Avoidance Report'
          bodyTextSize='1rem'
        />
        <MainCard
          titleLeftIcon={bwiIcon}
          titleRightIcon={starIcon}
          bodyText='BI WorldWide Invoices Report'
          bodyTextSize='1rem'
        />
      </Center>
    </Container>

  )
}

export default App
