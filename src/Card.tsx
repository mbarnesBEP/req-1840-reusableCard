import React from 'react'
import { Text, Image, Group, Divider, createStyles, Card } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown, faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
// import warningIcon from '../../assets/warningIcon.svg'
// import waitingIcon from '../../assets/waitingIcon.svg'
// import exceptionIcon from '../../assets/exceptionIcon.svg'
// import trendDownArrow from '../../assets/trendDownArrow.svg'
// import trendUpArrow from '../../assets/trendUpArrow.svg'

const useStyles = createStyles(() => ({
  cardValueGroup: {
    '& > div': {
      cursor: 'pointer'
    }
  }
}))

interface props {
  title?: string,
  value?: number,
  trend?: string | null,
  icon?: string | null,
  width?: number,
  height?: number,
  handleClick: (val: string) => void,
}

const KpiCard = ({ title, value, trend, icon, width = 0, height = 0, handleClick }: props) => {
  const { classes } = useStyles()
  let iconImg = null
  const iconW = '28px'
  let iconH = '25px'
  const cardHeight = height > 0 ? `${height}px` : ''
  const cardWidth = width > 0 ? `${width}px` : ''
  const trendUpIcon = <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: "#6ee62d", height: `${iconH}`, width: `${iconW}` }} />
  const trendDownIcon = <FontAwesomeIcon icon={faArrowTrendDown} style={{ color: "#DC3545", height: `${iconH}`, width: `${iconW}` }} />
  const warningIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#FF9518", height: `${iconH}`, width: `${iconW}` }} />
  const errorIcon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#F61D1D", height: `${iconH}`, width: `${iconW}` }} />
  const waitingIcon = <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#49A4DA", height: `${iconH}`, width: `${iconW}` }} />

  let trendImg = trend === 'up' ? trendUpIcon : trendDownIcon

  switch (icon) {
    case 'exception':
      iconImg = errorIcon
      break
    case 'waiting':
      iconImg = waitingIcon
      iconH = '28px'
      break
    case 'warning':
      iconImg = warningIcon
      break
    default:
      break
  }
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder style={{ width: cardWidth, height: cardHeight }}>
      <Card.Section id="card-header">
        <Text fz="1rem" c='dimmed' truncate>{title}</Text>

      </Card.Section>
      <Group mt='md' mb='xs' className={classes.cardValueGroup}>
        {icon && iconImg}
        <Text fz="2rem" onClick={() => handleClick('Value')}>{value}</Text>
        {trend && trendImg}
      </Group>

    </Card>


  )
}

export default KpiCard