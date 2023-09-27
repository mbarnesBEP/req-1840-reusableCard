import React, { useRef, ReactElement, useLayoutEffect, useState } from "react"
import ViewHeader from "./ViewHeader"
import { Box, Group, Stack, Text } from '@mantine/core'
import InformationCard from './InformationCard'
import LoremIpsum from "./LoremIpsum"

const data = LoremIpsum()

interface distProdViewProps {
  width?: number,
  height?: number,
  title: string,
  headerButtonText: string,
  minWidth?: string,
  topGroupHeight?: string | number | any,
}

const DistributorProductView = ({
  width = 0,
  height = 0,
  title,
  headerButtonText,
  minWidth = '450px',
  topGroupHeight = 450,

}: distProdViewProps) => {
  const [section3Open, setSec3Open] = useState<boolean>(true)
  const [section4Open, setSec4Open] = useState<boolean>(true)
  const HEADER_HEIGHT = 100
  let addTopHeight = 0
  const lowerSectionHeight = (height - topGroupHeight - HEADER_HEIGHT) / 2 - 10
  let section3Height = !section3Open ? 100 : lowerSectionHeight
  let section4Height = !section4Open ? 100 : lowerSectionHeight
  if (!section3Open && section4Open) {
    section4Height = height - topGroupHeight - HEADER_HEIGHT - section3Height - 10
  }
  if (!section4Open && section3Open) {
    section3Height = height - topGroupHeight - HEADER_HEIGHT - section4Height - 10
  }

  if (!section3Open && !section4Open) {
    addTopHeight = height - topGroupHeight - HEADER_HEIGHT - section3Height - section4Height - 20
  }

  const BoxComp = ({ height, children }: any) => (
    <Box
      h={height}
      sx={() => ({
        overflowY: 'auto',
        overflowX: 'hidden',
        border: '1px solid gray',
        boxShadow: '0px 1px 4px 0',
        borderRadius: 5
      })}
    >
      {children}
    </Box>
  )

  const buttons = [
    {
      title: 'Customize Table',
      clickHandler: () => alert('Customize Table Btn'),
      variant: "outline"
    }
  ]
  return (

    <Box maw={width} miw={minWidth} mx={'md'} h={height} my={'sm'}>
      <Box typeof="span" >
        <ViewHeader titleText={title} headerButtonText={headerButtonText} />
      </Box>
      <Group grow my={'md'}>
        <BoxComp height={(topGroupHeight + addTopHeight)}>
          <InformationCard title="Product Information" data={data} />
        </BoxComp>
        <BoxComp height={(topGroupHeight + addTopHeight)}>
          <InformationCard title="Manufacturer Product Information" data={data} />
        </BoxComp>
      </Group>
      <Stack>
        <BoxComp height={section3Height}>
          <InformationCard title="Import Data" opened={section3Open} setOpen={setSec3Open} buttons={buttons} data={data} />
        </BoxComp>
        <BoxComp height={section4Height}>
          <InformationCard title="Purchased By" opened={section4Open} setOpen={setSec4Open} data={data} />
        </BoxComp>
      </Stack>
    </Box>
  )
}
export default DistributorProductView