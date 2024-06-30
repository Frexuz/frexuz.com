import { MenuLink, Wrapper } from '@/components'

const styles = {
  wrapper: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
}

export const Menu = () => (
  <Wrapper>
    <div style={styles.wrapper}>
      <MenuLink text="Work" />
    </div>
  </Wrapper>
)
