import { Link } from "remix";
import type { LinksFunction } from "remix"

import stylesUrl from "~/styles/index.css"

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: stylesUrl}]
}

export default function IndexRoute() {
  return (
    <>
      <h1>Hello Index Route</h1>
      <p><Link to="/jokes">Go to jokes</Link></p>
    </>
  )
}
