import React, { useRef, useState, useEffect, ReactElement } from "react"
import { Card, Text, Group, Tooltip, ActionIcon, createStyles, GroupPosition } from '@mantine/core'


interface props {
  title?: string
  titleLeftIcon?: ReactElement
  leftIconClick?: (value: string) => void
  titleRightIcon?: ReactElement
  dropMenu?: ReactElement
  children?: ReactElement
  bodyLeftIcon?: ReactElement
  handleBodyClick?: (value: string) => void
  bodyText?: string
  bodyRightIcon?: ReactElement
  footer?: ReactElement
  footerPosition?: GroupPosition
  cardWidth?: string
  cardHeight?: string
}

const useStyles = createStyles(() => ({
  cardValueGroup: {
    '& > div': {
      cursor: 'pointer'
    }
  }
}))

/**
 * Description
 * @param {string} title title for the card
 * @param {ReactElement} titleLeftIcon Icon to be displayed to the left side of the title
 * @param {Function} leftIconClick Action for when the left title icon is clicked 
 * @param {ReactElement} titleRightIcon Icon to be displayed to the left side of the title
 * @param {ReactElement} dropMenu drop menu to display on the top of the card
 * @param {ReactElement} children
 * @param {ReactElement} bodyLeftIcon Icon to be displayed on the left side of the body of the card
 * @param {Function} handleBodyClick Action for when body of the card is clicked
 * @param {string} bodyText Text to display in the card
 * @param {ReactElement} bodyRightIcon Icon to be displayed on the right side of the body of the card
 * @param {ReactElement} footer jsx element to display in the footer of the card
 * @param {GroupPosition} footerPosition Defines justify-content property - i.e (left, right, center, apart) 
 * @param {string} cardHeight setHeight for card default to 110px
 * @param {string} cardWidth set width for card default to 520px
 */
const MainCard = ({ title, titleLeftIcon, leftIconClick, titleRightIcon, dropMenu, children, bodyLeftIcon, handleBodyClick, bodyText, bodyRightIcon, footer, footerPosition, cardHeight = '110px', cardWidth = '250px' }: props) => {
  const { classes } = useStyles()
  const titleRef = useRef<null | HTMLDivElement>(null)
  const [isOverFlown, setIsOverFlown] = useState(false)

  useEffect(() => {
    const titleElement = titleRef.current
    if (titleElement) {
      setIsOverFlown(titleElement.scrollWidth > titleElement.clientWidth)
    }
  }, [])
  return (
    <Card shadow="sm" padding="sm" radius="md" m='md' withBorder px='lg' w={cardWidth} h={cardHeight}>
      <Card.Section>
        <Group noWrap position={!title ? 'apart' : undefined}>
          {titleLeftIcon &&
            <ActionIcon onClick={() => leftIconClick && leftIconClick('value')}>
              {titleLeftIcon}
            </ActionIcon>
          }
          {title &&
            <Tooltip label={title} data-testid='tooltip' disabled={!isOverFlown}>
              <Text fz="1rem" c='dimmed' data-testid='title' truncate ref={titleRef}>{title}</Text>
            </Tooltip>
          }
          {titleRightIcon}
          {dropMenu}
        </Group>
      </Card.Section>
      <Card.Section
        onClick={() => handleBodyClick && handleBodyClick('Value')}
        className={classes.cardValueGroup}
        data-testid='card-body'>
        {children &&
          <Card.Section>
            {children}
          </Card.Section>
        }
        <Card.Section>
          <Group mt='md' mb='xs' position="left" mx='md' noWrap>
            {bodyLeftIcon && bodyLeftIcon}
            <Text fz="2rem">{bodyText}</Text>
            {bodyRightIcon && bodyRightIcon}
          </Group>
        </Card.Section>
      </Card.Section>

      {footer &&
        <Card.Section>
          <Group position={footerPosition}>
            {footer}
          </Group>
        </Card.Section>
      }

    </Card>
  )
}

export default MainCard