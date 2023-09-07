import React from 'react'
import { Text, Container, Menu, ActionIcon, Center } from '@mantine/core'
import './App.css'
import MainCard from './MainCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleInfo, faEllipsisVertical, faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

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
  const leftIconClick = (item: string) => {
    console.log('Clicked', item)
  }
  const titleLeftIcon = <FontAwesomeIcon onClick={() => console.log('clickedIcon')} data-testid='titleLeftIcon' icon={faStar} />
  const titleRightIcon = <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#CF3F7C" }} />
  const trendUpIcon = <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: "#6ee62d" }} />
  const trendDownIcon = <FontAwesomeIcon icon={faArrowTrendDown} style={{ color: "#DC3545" }} />
  const warningIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#FF9518" }} />
  const errorIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#F61D1D" }} />
  const waitingIcon = <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#49A4DA" }} />

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

  const bodyClick = (value: string) => {
    console.log('clicked: ', value)
  }

  const cardFooter = <Text>This is a footer</Text>

  return (
    <Container fluid>
      <Center>
        <MainCard
          leftIconClick={leftIconClick}
          titleLeftIcon={titleLeftIcon}
          title={'File Parsing Errors'}
          dropMenu={menu}
          bodyLeftIcon={errorIcon}
          handleBodyClick={bodyClick}
          bodyText={'255'}
          bodyRightIcon={trendDownIcon}
        />
      </Center>
      {/* <MainCard title={'This is going to be the title LONG LONG TITLE'} titleLeftIcon={titleLeftIcon} titleRightIcon={titleRightIcon} dropMenu={menu} bodyLeftIcon={errorIcon} handleBodyTextClick={bodyTextClick} bodyText={'855'} bodyRightIcon={trendDownIcon} footer={cardFooter} footerPosition='center' /> */}

      {/* <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card> */}
      {/* {cards} */}
    </Container>

  )
}

export default App
