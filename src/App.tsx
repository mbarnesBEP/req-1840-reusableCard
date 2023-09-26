import React from 'react'
import { Text, Box, Card, Menu, ActionIcon, Center, Container, Flex, ScrollArea } from '@mantine/core'
import './App.css'
import MainCard from './MainCard'
import DistributorProductView from './DistributorProductView'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEllipsisVertical, faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { AdaptiveWrapper } from './AdaptiveWrapper'
import { AdaptiveContainer } from './ContentWrapper'
import ProductView from './ProductView'

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
  const starIcon = (
    <ActionIcon onClick={(e) => {
      e.stopPropagation()
      alert('clicked on the star icon')
    }} sx={{
      '&:hover': { background: 'transparent' }
    }}
      mx='0px'
    >
      <FontAwesomeIcon data-testid='starIcon' size='lg' icon={faStar} />
    </ActionIcon>
  )
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
      onClick={(e) => {
        e.stopPropagation()
        alert('clicked on avitar icon')
      }}
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
      component="span"
      mx='0px'
      onClick={(e) => {
        e.stopPropagation()
        alert('Clicked avitar icon')
      }}
    >
      <Text size={15} weight={500} color='white'>
        BWI
      </Text>
    </ActionIcon>
  )

  const bodyClick = (value: string) => {
    console.log('clicked: ', value)
    alert('clicked card body')
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

  const PlaceHolder = ({ PlaceHolderText, height }: any) => {
    console.log('height', height)
    return (

      < Container>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
      </Container >
    )
  }

  const PlaceHolder2 = ({ PlaceHolderText, height }: any) => {
    console.log('height', height)
    return (

      < Container>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
        <Text>{PlaceHolderText}</Text>
      </Container >
    )
  }

  const distProdView = true
  const mainCardView = false
  const contentWrapper = true

  const fakeDataGenerator = (size: number) =>
    [...Array(size)].map(() => {
      const randomStr = '1234567890abcdefghijklmnopqrstuvwxyz/?<>*&%$#@'
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('')
      return <Text>{randomStr.slice(0, Math.random() * 46 + 2)}</Text>
    })
  const data = fakeDataGenerator(40)
  return (

    <Box className='container' >
      {/* <Box className='header' />
      <AdaptiveContainer>
        <ProductView data={data} />
      </AdaptiveContainer> */}
      {/* <Box className='footer' /> */}

      {distProdView &&

        // <ScrollArea.Autosize id='scrollView' mah='95vh'>
        <>
          <Box className='header' />
          <AdaptiveContainer>

            <DistributorProductView
              width
              height
              title="Distributor product - DMID: 123456789"
              headerButtonText="Find Invoices"
              minWidth='550px'
              section1={<PlaceHolder PlaceHolderText='Place Holder 1' />}
              section2={<PlaceHolder2 PlaceHolderText='Place Holder 2' />}
              section3={<PlaceHolder PlaceHolderText='Place Holder 3' />}
              section4={<PlaceHolder PlaceHolderText='Place Holder 4' />} />
          </AdaptiveContainer>
        </>
        // </ScrollArea.Autosize>

      }
      {mainCardView &&
        <Flex
          mih={110}
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"

        >
          <MainCard
            title={'Customers'}
            dropMenuItems={menuItems}
            cardClickHandler={bodyClick}
            bodyText={'1,200'}
          />
          {/* With Right Icon*/}
          <MainCard
            title={'File Parsing Errors'}
            cardClickHandler={bodyClick}
            bodyText={'855'}
            bodyRightIcon={trendUpIcon}
            withBorder={false}
          />
          <MainCard
            title={'Staging Data Review'}
            cardClickHandler={bodyClick}
            bodyText={'20'}
            bodyRightIcon={trendDownIcon}
            withBorder={false}
          />
          {/* With Left Icon */}
          <MainCard
            title={'Exceptions on Tasks'}
            cardClickHandler={bodyClick}
            bodyLeftIcon={errorIcon}
            bodyText={'25'}
            withBorder={false}
          />
          <MainCard
            title={'Runners in Waiting State'}
            cardClickHandler={bodyClick}
            bodyLeftIcon={warningIcon}
            bodyText={'25'}
            withBorder={false}
          />
          {/* Long header */}
          <MainCard
            title={'Super LOOOOOOOOOOOOOOOOOOOOOOOOOOOONG Header'}
            cardClickHandler={bodyClick}
            bodyLeftIcon={warningIcon}
            bodyText={'25'}
            withBorder={false}
          />
          {/* Long Body & Differing card size */}
          <MainCard
            title={'Test Header'}
            cardClickHandler={bodyClick}
            bodyText={'Super LOOOOOOOOOOOOOOOOOOOOOOOOONG Body'}
            bodyTextSize='1rem'
            cardHeight='80px'
          />
          <MainCard
            title={'Runners in Warning State'}
            cardClickHandler={bodyClick}
            bodyLeftIcon={waitingIcon}
            bodyText={'25'}
            withBorder={false}
          />
          {/* Report/Search cards */}
          <MainCard
            titleLeftIcon={carIcon}
            titleRightIcon={starIcon}
            cardClickHandler={bodyClick}
            bodyText='Cost Avoidance Report'
            bodyTextSize='1rem'
          />
          <MainCard
            //titleLeftIcon={bwiIcon}
            titleRightIcon={starIcon}
            cardClickHandler={bodyClick}
            bodyText='BI WorldWide Invoices Report'
            bodyTextSize='1rem'
          />
        </Flex>
      }
    </Box>
    // <Flex
    //   mih={110}
    //   gap="xs"
    //   justify="flex-start"
    //   align="flex-start"
    //   direction="row"
    //   wrap="wrap"

    // >
    //   <MainCard
    //     title={'Customers'}
    //     dropMenuItems={menuItems}
    //     cardClickHandler={bodyClick}
    //     bodyText={'1,200'}
    //   />
    //   {/* With Right Icon*/}
    //   <MainCard
    //     title={'File Parsing Errors'}
    //     cardClickHandler={bodyClick}
    //     bodyText={'855'}
    //     bodyRightIcon={trendUpIcon}
    //     withBorder={false}
    //   />
    //   <MainCard
    //     title={'Staging Data Review'}
    //     cardClickHandler={bodyClick}
    //     bodyText={'20'}
    //     bodyRightIcon={trendDownIcon}
    //     withBorder={false}
    //   />
    //   {/* With Left Icon */}
    //   <MainCard
    //     title={'Exceptions on Tasks'}
    //     cardClickHandler={bodyClick}
    //     bodyLeftIcon={errorIcon}
    //     bodyText={'25'}
    //     withBorder={false}
    //   />
    //   <MainCard
    //     title={'Runners in Waiting State'}
    //     cardClickHandler={bodyClick}
    //     bodyLeftIcon={warningIcon}
    //     bodyText={'25'}
    //     withBorder={false}
    //   />
    //   {/* Long header */}
    //   <MainCard
    //     title={'Super LOOOOOOOOOOOOOOOOOOOOOOOOOOOONG Header'}
    //     cardClickHandler={bodyClick}
    //     bodyLeftIcon={warningIcon}
    //     bodyText={'25'}
    //     withBorder={false}
    //   />
    //   {/* Long Body & Differing card size */}
    //   <MainCard
    //     title={'Test Header'}
    //     cardClickHandler={bodyClick}
    //     bodyText={'Super LOOOOOOOOOOOOOOOOOOOOOOOOONG Body'}
    //     bodyTextSize='1rem'
    //     cardHeight='80px'
    //   />
    //   <MainCard
    //     title={'Runners in Warning State'}
    //     cardClickHandler={bodyClick}
    //     bodyLeftIcon={waitingIcon}
    //     bodyText={'25'}
    //     withBorder={false}
    //   />
    //   {/* Report/Search cards */}
    //   <MainCard
    //     titleLeftIcon={carIcon}
    //     titleRightIcon={starIcon}
    //     cardClickHandler={bodyClick}
    //     bodyText='Cost Avoidance Report'
    //     bodyTextSize='1rem'
    //   />
    //   <MainCard
    //     //titleLeftIcon={bwiIcon}
    //     titleRightIcon={starIcon}
    //     cardClickHandler={bodyClick}
    //     bodyText='BI WorldWide Invoices Report'
    //     bodyTextSize='1rem'
    //   />
    // </Flex>
    // <Center>
    //   <DistributorProductView />

    // </Center>
    // <Container fluid>
    //   <SimpleGrid
    //     cols={4}
    //     breakpoints={[
    //       { maxWidth: '62rem', cols: 3, spacing: 'md' },
    //       { maxWidth: '48rem', cols: 2, spacing: 'sm' },
    //       { maxWidth: '36rem', cols: 1, spacing: 'sm' },
    //     ]}
    //   >
    //     {/* With drop Down */}

    //   </SimpleGrid>
    // </Container>

  )
}

export default App
//terrik99@gmail.com
