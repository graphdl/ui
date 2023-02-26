import { Admin } from 'ui'

export default Admin

export const getStaticProps = ({ params }) => ({ props: { params, view: 'list' } })
export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' })
export const config = { runtime: 'experimental-edge' }