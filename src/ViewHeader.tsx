import React from "react"
import { Button, Group, Text, Divider, createStyles } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'

const useStyles = createStyles((theme: any) => ({
  saveBtn: {
    cursor: 'default',
    backgroundColor: theme.fn.lighten('#49A4DA', 0.8),
    color: '#49A4DA',
    fontSize: 20,
    height: 30,
    width: 30,
    paddingLeft: 2,
    paddingRight: 0,
    '&:hover': {
      backgroundColor: theme.fn.lighten('#49A4DA', 0.8),
      color: '#49A4DA'
    }
  },
  searchBtn: {
    color: '#303E6F',
    borderColor: '#303E6F'
  }
}))

interface titleProps {
  titleText: string
  aRef: any
}

const ViewHeader = ({ titleText, aRef }: titleProps) => {
  const { classes } = useStyles()
  return (
    <Group noWrap ref={aRef}>
      <Text fz="xl" fw={700}>
        {titleText}
      </Text>
      <Group ml='auto' noWrap>
        <Button
          leftIcon={<FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />} variant="outline"
          className={classes.searchBtn}
          onClick={() => alert('clicked search button')}
        >
          Find Invoices
        </Button>
        <Divider orientation="vertical" />
        <Button className={classes.saveBtn} onClick={() => alert('clicked saved button')}>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </Button>
      </Group>
    </Group>

  )
}

export default ViewHeader