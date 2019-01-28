import Button from '../components/buttonTag';
// import {shallow} from 'enzyme'; 
import React from 'react';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Button',()=>
{
    
    it("Button in defined in Button component",()=>{
        expect(Button).toBeDefined();
    });

    it('Button render on ui',()=>
        {
                const tree = shallow(
                    <Button name='btn test' />
                )
                expect(tree).toMatchSnapshot();
            })

})
 