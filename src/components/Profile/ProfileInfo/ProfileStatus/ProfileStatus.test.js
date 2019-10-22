import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("In local state should be text correct", () => {
        const component = create(<ProfileStatus status="Hello" />);
        const instance = component.root;
        const span = instance.findByType("span")
        expect(span.children[0]).toBe("Hello");

    });
    test("After double click on span input value should be correct", () => {
        const component = create(<ProfileStatus status="Hello" />);
        const instance = component.root;
        const span = instance.findByType("span")
        act(() => span.props.onDoubleClick())
        const input = instance.findByType("input")
        expect(input.props.value).toBe("Hello");

    });
    test("Test call back", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="Hello" updateProfileStatus={mockCallBack}/>);
        const instance = component.root;
        const span = instance.findByType("span")
        act(() => span.props.onDoubleClick())
        const input = instance.findByType("input")
        act(() => input.props.onBlur())
        expect(mockCallBack.mock.calls.length).toBe(1);

    });
});