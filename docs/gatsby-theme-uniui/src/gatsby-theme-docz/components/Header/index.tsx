import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'
import { Menu } from "react-feather"
import { NavBar, Button } from "../../../../../../src"
import * as styles from "./styles";

export const Header = props => {
  const { onOpen } = props
  const {
    repository,
    themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
  } = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Box style={styles.menuIcon}>
        <button style={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <NavBar position="fixed">
        <h1>Uniui</h1>
        <a href={repository}><Button type="borderless">GitHub</Button></a>
        <a href="https://www.npmjs.com/package/react-uniui"><Button type="borderless">NPM</Button></a>
      </NavBar>
    </div>
  )
}
