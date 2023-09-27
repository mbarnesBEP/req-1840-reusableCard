import React from "react"
import { Box, Button, Text, Divider, Group, Collapse, createStyles } from "@mantine/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const useStyles = createStyles((theme: any) => ({
  custBtn: {
    color: '#303E6F',
    borderColor: '#303E6F'
  },
  collapseBtn: {
    color: '#C04B7B',
  }
}))

interface InformationCardProps {
  title: string,
  opened?: boolean,
  setOpen?: React.Dispatch<React.SetStateAction<any>>,
  buttons?: object[],
  data: any,
}

const InformationCard = ({ title = "Title Text", opened = true, setOpen,
  buttons, data }: InformationCardProps) => {
  const { classes } = useStyles()

  return (
    <Box>
      <Group mt={'md'} noWrap>
        <Divider size="xl" orientation="vertical" color="#CF3F7C" ml={'md'} />
        <Text fw={500} fz={'xl'}>{title}</Text>
        <Group ml={'auto'}>
          {buttons &&
            buttons.map((button: any) => (
              <>
                <Button
                  className={classes.custBtn}
                  variant={button.variant}
                  onClick={() => button.clickHandler()}>
                  {button.title}
                </Button>
                <Divider orientation="vertical" />
              </>

            ))
          }
          {setOpen &&
            <>
              <Button
                variant="subtle"
                onClick={() => setOpen(!opened)}
                className={classes.collapseBtn}
                rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                Collapse

              </Button>
            </>
          }
        </Group>
      </Group>
      <Collapse in={opened}>
        {data}
      </Collapse>
    </Box>
  )
}
export default InformationCard