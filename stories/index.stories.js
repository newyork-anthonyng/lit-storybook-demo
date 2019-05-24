import {
  storiesOf,
  withKnobs,
  html
} from "@open-wc/demoing-storybook";
import "../src/counter";

storiesOf("Demo|Example", module)
  .addDecorator(withKnobs)
  .add(
    "Counter",
    () => html`
      <my-counter></my-counter>
      <my-counter></my-counter>
      <my-counter></my-counter>
    `
  );

