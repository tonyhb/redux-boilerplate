// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./base.css";

type Props = {|
  children: React.Element<*>,
|}

const Base = ({ children }: Props) =>
  <div>
    <div styleName="header">
      <Link to="/" styleName="dashboard">Dashboard</Link>
    </div>
    {children}
  </div>;

export default Base;
