import { Text } from '@mantine/core'

/**
 * Description
 * @param {number} wordCount number of words to generate
 * @returns {any} Text block with generated words
 */
const LoremIpsum = (wordCount: number) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra pharetra auctor. Curabitur augue lectus, rutrum eget pellentesque vitae, dictum ac dui. In convallis augue at sapien gravida, ornare aliquet tellus mattis. Curabitur pharetra pellentesque nibh. Proin justo elit, dapibus vel eros ut, rutrum pulvinar massa. Duis ligula mi, varius ac mauris vel, euismod tempor leo. Sed cursus auctor laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae aliquam quam, tempus gravida massa. Donec tristique nulla vel mauris interdum feugiat. Quisque vestibulum, risus accumsan tristique interdum, ipsum odio tincidunt nisi, ut convallis nibh mi eu tellus. Fusce blandit scelerisque mi sit amet eleifend."
  const words = lorem.split(' ')
  let text = ""
  for (let i = 0; i < wordCount; i++) {
    text += words[Math.floor(Math.random() * words.length)]
    text += '\n'

  }
  return (
    <Text>
      {text}
    </Text>
  )
}

export default LoremIpsum