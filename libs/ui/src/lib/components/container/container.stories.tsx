import { Container} from './container';
import type { Meta, Story} from '@storybook/react';
export default {
    title: 'Components/Container', // Title for the component group in Storybook
    component: Container, // The component you're documenting
    argTypes: {
      backgroundColor: { control: 'color' }, // Control for backgroundColor prop
    },
  } as Meta;

export const Default = {
    render: () => <Container>Your Content Goes Here</Container>,
}

  

  
 
  