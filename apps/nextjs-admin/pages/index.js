import { Admin } from 'ui'

export default Admin

export const getStaticProps = () => ({ props: { view: 'dashboard' } })
export const config = { runtime: 'experimental-edge' }