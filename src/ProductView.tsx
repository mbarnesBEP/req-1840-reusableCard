import React from 'react'
import { Box, Center, Stack, Flex, Text } from '@mantine/core'
// import ImportData from './ImportData'

const ProductView = ({ width, height, data }: any) => {
  // const formSectionHeight = 550
  const TOPSECTIONHEIGHT = 550
  const TOPSTACK_P = 10
  const TOPFLEX_P = 5
  const TOP_P_TO_REMOVE = (TOPSTACK_P * 2) + (TOPFLEX_P * 2)
  const HEADER_HEIGHT = 50
  const HEADER_P = 10
  const EXTRA_SPACE_ON_BOTTOM = 60
  const LOWER_STACK_P = 10
  const RANDOM_LOWER_BOX_HEIGHT = 40

  const BoxComp = ({ children }: any) => {
    return (
      <Box
        pl={10}
        w={width / 2 - TOP_P_TO_REMOVE}
        h={TOPSECTIONHEIGHT - 10}
        sx={() => ({
          overflowY: 'auto',
          overflowX: 'hidden',
          background: '#a395ee',
          border: '1px solid gray',
          borderRadius: 5
        })}
      >
        {children}
      </Box>
    )
  }
  return (
    <Stack spacing={0}>
      {/* HEADER */}
      <Box h={HEADER_HEIGHT} p={HEADER_P} sx={() => ({ background: '#a2f0a6' })}>
        <Center h={HEADER_HEIGHT}>
          <Text fz={24} fw={600}>
            Header section for product's title, search invoices, and other
            elements
          </Text>
        </Center>
      </Box>
      {/* IN-LINE SECTIONS BLOCK */}
      <Stack
        h={TOPSECTIONHEIGHT}
        p={TOPSTACK_P}
        sx={() => ({ background: '#b8a2f5' })}
      >
        <Flex
          mih={TOPSECTIONHEIGHT - 10}
          bg='rgba(0, 0, 0, .3)'
          gap={5}
          justify='flex-start'
          align='flex-start'
          direction='row'
          wrap='wrap'
          p={TOPFLEX_P}
        >
          <BoxComp>
            {data}
          </BoxComp>
          <BoxComp>
            <Center h={TOPSECTIONHEIGHT - 10}>
              {`${Math.floor(width)} x ${Math.floor(height)}`}
            </Center>
          </BoxComp>

        </Flex>
      </Stack>
      {/* LIST SECTIONS BLOCK */}
      <Stack p={LOWER_STACK_P} bg='red' h={height - TOPSECTIONHEIGHT - HEADER_HEIGHT - EXTRA_SPACE_ON_BOTTOM}>
        <Box
          pl={10}
          h={(height - TOPSECTIONHEIGHT - HEADER_HEIGHT) / 2 - RANDOM_LOWER_BOX_HEIGHT}
          sx={() => ({
            overflow: 'auto',
            background: '#8beea1',
            border: '1px solid gray',
            borderRadius: 5
          })}
        >
          {data}
        </Box>
        <Box
          pl={10}
          h={(height - TOPSECTIONHEIGHT - HEADER_HEIGHT) / 2 - RANDOM_LOWER_BOX_HEIGHT}
          sx={() => ({
            overflow: 'auto',
            background: '#8beea1',
            border: '1px solid gray',
            borderRadius: 5
          })}
        >
          {data}
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProductView
