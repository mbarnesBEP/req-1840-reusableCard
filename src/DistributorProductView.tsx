import React, { useRef, ReactElement, useLayoutEffect, useState } from "react"
import ViewHeader from "./ViewHeader"
import { Card, Grid, Text, Box, ScrollArea, Group } from '@mantine/core'
import { withResizeDetector } from 'react-resize-detector'
import { Allotment } from "allotment"
import "allotment/dist/style.css"

// Just a temp place holder for the section components to come later


interface distProdViewProps {
  title: string,
  minWidth?: string,
  maxWidth?: string,
  topGroupHeight?: string,
  section1: ReactElement,
  section2: ReactElement,
  section3: ReactElement,
  section4: ReactElement,
}

const DistributorProductView = ({
  title,
  minWidth = '550px',
  maxWidth = '1034px',
  topGroupHeight = '400px',
  section1,
  section2,
  section3,
  section4

}: distProdViewProps) => {
  const lowerSectionHeight = (`calc((98vh - ${topGroupHeight}) /2)`)

  return (

    <Box maw={maxWidth} miw={minWidth} mx={'md'}>
      <Box typeof="span" >
        <ViewHeader titleText={title} />
      </Box>
      <Group grow mt={'md'}>
        <ScrollArea h={topGroupHeight}>
          <Card h={topGroupHeight} shadow="sm" withBorder>
            {section1}
          </Card>
        </ScrollArea>
        <Card h={topGroupHeight} shadow="sm" withBorder p={'lg'}>
          {section2}
        </Card>
      </Group>
      <Group py={'md'} grow>
        <Card h={lowerSectionHeight} shadow="sm" withBorder mx='auto'>
          <ScrollArea.Autosize mah={lowerSectionHeight}>
            {section3}
          </ScrollArea.Autosize>
        </Card>
      </Group>
      <Group grow>
        <Card h={lowerSectionHeight} shadow="sm" withBorder>
          {section4}
        </Card>
      </Group>
    </Box>

    // <ScrollArea maw={maxWidth} miw={minWidth} id='scrollView' >
    //   <Box w='98%' p='10px' >
    //     <ViewHeader titleText="Distributor product - DMID: 123456789" />
    //     <Grid gutter={'sm'} gutterXs={'sm'} grow h={'calc(100vh - 14px)'}>
    //       <Grid.Col span={6} mt='md'>
    //         <PlaceHolder PlaceHolderText='Product Details place holder' />
    //       </Grid.Col>
    //       <Grid.Col span={6} mt='md'>
    //         <PlaceHolder PlaceHolderText='Pack Parsing Status place holder' />
    //       </Grid.Col>
    //       <Grid.Col>
    //         <PlaceHolder PlaceHolderText='Import Data Place Holder' />
    //       </Grid.Col>
    //       <Grid.Col>
    //         <PlaceHolder PlaceHolderText='Purchased By Place Holder' />
    //       </Grid.Col>
    //     </Grid>
    //   </Box>
    // </ScrollArea>
  )
}
export default DistributorProductView