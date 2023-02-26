export const Layout = props => html`<!DOCTYPE html>
<html>
  <head>
    <title>${props.title}</title>
  </head>
  <body>
    ${props.children}
  </body>
</html>`