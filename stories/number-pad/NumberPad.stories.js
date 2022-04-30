import '@aclue-de/web-components/index.js';

export default {
  title: 'Web Components/NumberPad',
};

const Template = ({min, max, value}) => `<number-pad minimum="${min}" maximum="${max}" value="${value}"></number-pad>`;

export const NumberPad = Template.bind({})
NumberPad.args = {
  min: 0,
  max: 10,
  value: 1,
}
