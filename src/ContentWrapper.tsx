import React from 'react'
import { withResizeDetector } from 'react-resize-detector'

const ContentWrapper = ({ width, height, children }: any) => {
  const [contentWidth, setContentWidth] = React.useState(width)
  const [contentHeight, setContentHeight] = React.useState(height)

  React.useEffect(() => {
    setContentWidth(width)
    setContentHeight(height)
  }, [width, height])

  const childrenWithProps = React.Children.map(children, function (child: any) {
    return React.cloneElement(child, { width: contentWidth, height: contentHeight })
  })
  return <div className='content'>
    {childrenWithProps}
  </div>
}

export const AdaptiveContainer = withResizeDetector(ContentWrapper)