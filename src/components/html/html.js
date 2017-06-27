// @flow
import React from "react";
import Helmet from "react-helmet";

type Props = {|
  children: React.Element<*>,
|}

const HTML = ({ children }: Props) => {
  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body {...bodyAttrs}>
        <div id="app">{children}</div>
        <script src="/assets/client.js" />
      </body>
    </html>
  );
};

export default HTML;
