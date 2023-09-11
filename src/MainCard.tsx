import React, { useRef, useState, useEffect, ReactElement } from "react"
import { Card, Text, Group, Tooltip, ActionIcon, createStyles, GroupPosition, Menu } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'


interface menuItemProps {
  title: string
  onClick: () => void
  color?: string
}

interface props {
  title?: string
  titleLeftIcon?: ReactElement
  titleRightIcon?: ReactElement
  dropMenuItems?: Array<menuItemProps>
  children?: ReactElement
  bodyLeftIcon?: ReactElement
  cardClickHandler?: (value: string) => void
  bodyText?: string
  bodyTextSize?: string
  bodyRightIcon?: ReactElement
  footer?: ReactElement
  footerPosition?: GroupPosition
  cardWidth?: string
  cardHeight?: string
  withBorder?: boolean
}

const useStyles = createStyles(() => ({
  cardValueGroup: {
    '& > div': {
      cursor: 'pointer'
    }
  }
}))

/**
 *  Reusable generic card component for Reports/Search Landing and Dashboard pages
 * @param {string} title title for the card
 * @param {ReactElement} titleLeftIcon Icon to be displayed to the left side of the title
 * @param {ReactElement} titleRightIcon Icon to be displayed to the left side of the title
 * @param {Array} dropMenuItems drop menu items to display in the optional drop menu
 * @param {ReactElement} children
 * @param {ReactElement} bodyLeftIcon Icon to be displayed on the left side of the body of the card
 * @param {Function} cardClickHandler Action for when body of the card is clicked
 * @param {string} bodyText Text to display in the card
 * @param {string} bodyTextSize Text size for body text default to 2rem
 * @param {ReactElement} bodyRightIcon Icon to be displayed on the right side of the body of the card
 * @param {ReactElement} footer jsx element to display in the footer of the card
 * @param {GroupPosition} footerPosition Defines justify-content property - i.e (left, right, center, apart) 
 * @param {string} cardHeight set height for card default to 110px
 * @param {string} cardWidth set width for card default to 520px
 * @param {boolean} withBorder add boarder to card default to true
 */

const MainCard = ({
  title,
  titleLeftIcon,
  titleRightIcon,
  dropMenuItems,
  children,
  bodyLeftIcon,
  cardClickHandler,
  bodyText,
  bodyTextSize = '2rem',
  bodyRightIcon,
  footer,
  footerPosition,
  cardHeight = '110px',
  cardWidth = '250px',
  withBorder = true }: props) => {
  const { classes } = useStyles()
  const titleRef = useRef<null | HTMLDivElement>(null)
  const bodyRef = useRef<null | HTMLDivElement>(null)
  const [isTitleOverFlown, setTitleIsOverFlown] = useState(false)
  const [isBodyOverFlown, setBodyIsOverFlown] = useState(false)
  let dropMenu

  if (dropMenuItems) {
    dropMenu = (
      <Menu withinPortal position="bottom-end" shadow="sm">
        <Menu.Target>
          <ActionIcon>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {dropMenuItems.map((item) => (
            <Menu.Item onClick={item.onClick} key={item.title} color={item.color}>{item.title}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    )
  }


  useEffect(() => {
    const titleElement = titleRef.current
    const bodyTextElement = bodyRef.current
    if (titleElement) {
      setTitleIsOverFlown(titleElement.scrollWidth > titleElement.clientWidth)
    }
    if (bodyTextElement) {
      setBodyIsOverFlown(bodyTextElement.scrollWidth > bodyTextElement.clientWidth)
    }
  }, [])

  return (
    <Card
      radius="md"
      m='md'
      withBorder={withBorder}
      w={cardWidth}
      h={cardHeight}
      onClick={() => cardClickHandler && cardClickHandler('Value')}
      className={cardClickHandler ? classes.cardValueGroup : ''}>
      <Card.Section>
        <Group position={!title ? 'apart' : undefined} noWrap id='card-header-group' px='md' pt={titleLeftIcon ? 'md' : '0'} pb='md'>
          {titleLeftIcon}
          {title &&
            <Tooltip.Floating label={title} multiline data-testid='tooltip' color="gray" disabled={!isTitleOverFlown}>
              <Text fz="1rem" c='dimmed' data-testid='title' truncate ref={titleRef}>{title}</Text>
            </Tooltip.Floating>
          }
          {titleRightIcon}
          {dropMenu &&
            <Card.Section ml='auto'>
              {dropMenu}
            </Card.Section>
          }
        </Group>
      </Card.Section>
      <Card.Section

        data-testid='card-body'>
        {children &&
          <Card.Section>
            {children}
          </Card.Section>
        }
        <Card.Section>
          <Group position="left" mx='md' px='md' noWrap>
            {bodyLeftIcon && bodyLeftIcon}
            <Tooltip.Floating label={bodyText} multiline data-testid='body-tooltip' color="gray" disabled={!isBodyOverFlown}>
              <Text fz={bodyTextSize} truncate ref={bodyRef}>{bodyText}</Text>
            </Tooltip.Floating>
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