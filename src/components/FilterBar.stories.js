import React from 'react';

import FilterBar from './FilterBar';

export default {
  component: FilterBar,
  title: 'FilterBar',
};

const Template = args => <FilterBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};