import React, { useRef, ReactElement, useLayoutEffect, useState } from "react"
import ViewHeader from "./ViewHeader"
import { Box, Group, Stack } from '@mantine/core'


// Just a temp place holder for the section components to come later


interface distProdViewProps {
  width: any,
  height: any,
  title: string,
  headerButtonText: string,
  minWidth?: string,
  topGroupHeight?: string | number | any,
  section1: ReactElement,
  section2: ReactElement,
  section3: ReactElement,
  section4: ReactElement,
}

const DistributorProductView = ({
  width,
  height,
  title,
  headerButtonText,
  minWidth = '450px',
  topGroupHeight = 450,
  section1,
  section2,
  section3,
  section4

}: distProdViewProps) => {
  const HEADER_HEIGHT = 100
  const lowerSectionHeight = (height - topGroupHeight - HEADER_HEIGHT) / 2 - 10

  const BoxComp = ({ height, minHeight, children }: any) => (
    <Box
      h={height}
      mih={minHeight}
      sx={() => ({
        overflowY: 'auto',
        overflowX: 'hidden',
        background: '#a395ee',
        border: '1px solid gray',
        boxShadow: '0px 1px 4px 0',
        borderRadius: 5
      })}
    >
      {children}
    </Box>
  )

  return (

    <Box maw={width} miw={minWidth} mx={'md'} h={height} my={'sm'}>
      <Box typeof="span" >
        <ViewHeader titleText={title} headerButtonText={headerButtonText} />
      </Box>
      <Group grow my={'md'}>
        <BoxComp height={topGroupHeight}>
          {section1}
        </BoxComp>
        <BoxComp height={topGroupHeight}>
          {section2}
        </BoxComp>
      </Group>
      <Stack>
        <BoxComp height={lowerSectionHeight} minHeight={100}>
          {section3}
        </BoxComp>
        <BoxComp height={lowerSectionHeight} minHeight={100}>
          {section4}
        </BoxComp>
      </Stack>
    </Box>
  )
}
export default DistributorProductView