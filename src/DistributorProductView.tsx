import React from "react"
import ViewHeader from "./ViewHeader"
import { Card, Grid, Text, Box, ScrollArea } from '@mantine/core'

// Just a temp place holder for the section components to come later
const PlaceHolder = ({ PlaceHolderText, height }: any) => (
  <Card shadow="sm" h={height} withBorder>
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
  </Card>
)

interface distProdViewProps {
  minWidth?: string,
  maxWidth?: string
}

const DistributorProductView = ({ minWidth = '550px', maxWidth = '1034px' }: distProdViewProps) => {
  return (
    <ScrollArea maw={maxWidth} miw={minWidth} h={'calc(100vh - 14px)'}>
      <Box w='98%' p='10px' >
        <ViewHeader titleText="Distributor product - DMID: 123456789" />
        <Grid gutter={'sm'} gutterXs={'sm'} grow>
          <Grid.Col span={6} mt='md'>
            <PlaceHolder PlaceHolderText='Product Details place holder' />
          </Grid.Col>
          <Grid.Col span={6} mt='md' >
            <PlaceHolder PlaceHolderText='Pack Parsing Status place holder' />
          </Grid.Col>
          <Grid.Col>
            <PlaceHolder PlaceHolderText='Import Data Place Holder' height='267px' />
          </Grid.Col>
          <Grid.Col>
            <PlaceHolder PlaceHolderText='Purchased By Place Holder' height='293px' />
          </Grid.Col>
        </Grid>
      </Box>
    </ScrollArea>
  )
}
export default DistributorProductView