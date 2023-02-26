import { Shell } from './Shell'
import { CodeList } from '../lists/CodeList'

export const Admin = ({ graph, params, view, children }) => (
  <Shell params={params} view={view}>
    {view === 'create' && <h1>Create {params.noun}</h1>}
    {CodeList}
  </Shell>
)

