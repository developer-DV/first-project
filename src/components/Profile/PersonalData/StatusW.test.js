//import { create } from '@testing-library/react';
import React from "react";
import StatusWithHooks from './StatusWithHooks';
import {create} from 'react-test-renderer';

test('length of posts should be incremented', () => {
    const component = create(<StatusWithHooks status="Testing"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Testing");
});

