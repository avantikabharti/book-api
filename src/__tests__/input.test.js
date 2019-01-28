import Input from '../components/inputTag' 
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Input',()=>
{
    it('Input is defined in Component',()=>
    {
        expect(Input).toBeDefined();
    })
    it('Input should render', ()=>{
        const tree =  shallow(
            <Input name="input test" value='123' onChange='function test' />
        )
        expect(tree).toMatchSnapshot();
    })
})