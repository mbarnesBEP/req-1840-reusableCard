import React, { useEffect, useState } from 'react'
import { withResizeDetector } from 'react-resize-detector'

type AdaptiveProps = {
  style?: any
  width: number
  height: number
  classes?: any
  children: React.ReactNode
  getSize?: (h: number, w: number) => void
}

const AdaptiveComponent = ({
  style,
  width,
  height,
  classes,
  getSize,
  children
}: AdaptiveProps) => {
  useEffect(() => {
    if (getSize) getSize(height, width)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  const childrenWithProps = React.Children.map(children, function (child: any) {
    return React.cloneElement(child, { width: width, height: height })
  })

  return (
    <div
      className={classes ? classes.dmoBody : null}
      style={style ? style : null}
    >
      {childrenWithProps}
    </div>
  )
}
// const containerStyles = {
//   height: 'calc(100vh - 14px)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// }

// const AdaptiveComponent = ({ width, height }: any) => {
//   const [color, setColor] = useState('red')

//   useEffect(() => {
//     setColor(width > 700 ? 'coral' : 'aqua')
//   }, [width])

//   return <div style={{ backgroundColor: color, ...containerStyles }}>{`${width}x${height}`}</div>
// }

export const AdaptiveWrapper = withResizeDetector(AdaptiveComponent)
