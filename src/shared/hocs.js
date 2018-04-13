// @flow
import React, { type ComponentType } from "react";
import { branch, renderComponent } from "recompose";

// With is a utility which calls recompose's branch and renders a component
// if the given predicate returns true.
export const With = (
  predicate: (props: Object) => boolean,
  Component: ComponentType<*>
) => branch(predicate, renderComponent(Component));
