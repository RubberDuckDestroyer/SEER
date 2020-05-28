import ConditionContainer from './ConditionContainer';
import { render } from "@testing-library/react";
import { Dropdown } from "@material-ui/core";
import sinon from "sinon"
import { mount } from "enzyme"
import React from "react";
import { SearchJointInfo } from "../bloc/SearchBloc";

test('Condition Container exists', () => {
    const { queryByTestId } = render(
        <ConditionContainer style={{}} jointFilter={new SearchJointInfo()}/>
    );
    expect(queryByTestId).toBeTruthy();
});

test('Select exists inside container', () => {
    const { queryByTestId } = render(
        <ConditionContainer style={{}}/>
    );
    expect(queryByTestId(/condition/)).toBeTruthy();
});