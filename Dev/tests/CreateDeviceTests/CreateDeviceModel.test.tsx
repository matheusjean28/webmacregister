import { fireEvent, render, screen} from "@testing-library/react";
import React, { useContext } from "react";
import {GlobalContext} from "../../../src/Context/GlobalContext"
import { beforeEach, describe, expect, it, vi } from "vitest";

import CreateDeviceModel from '../../../src//Contents/CreateDeviceModel.jsx'

const mockSetDeviceModel = vi.fn();
const mockSetCreateModel = vi.fn();


const MockedGlobalContextProvider = ({ children }) => (
  <GlobalContext.Provider
    value={{
      deviceModel: [],
      setDeviceModel: mockSetDeviceModel,
      createModel: true,
      setCreateModel: mockSetCreateModel,
    }}
  >
    {children}
  </GlobalContext.Provider>
);



describe('CreateDeviceModel Component', () => {
  it('should update model input correctly', () => {
    render(
      <MockedGlobalContextProvider>
        <CreateDeviceModel />
      </MockedGlobalContextProvider>
    );

    const modelInput = screen.getByPlaceholderText('Device Model');
    fireEvent.change(modelInput, { target: { value: 'New Device' } });

    expect(modelInput.value).toBe('NEW DEVICE'); 
  });

  it('should update owner input correctly', () => {
    render(
      <MockedGlobalContextProvider>
        <CreateDeviceModel />
      </MockedGlobalContextProvider>
    );

    const ownerInput = screen.getByPlaceholderText('Owner');
    fireEvent.change(ownerInput, { target: { value: 'John Doe' } });
    expect(ownerInput.value).toBe('JOHN DOE');
  });
  
});

describe("it should create a new device without errors", () => {
    beforeEach(() => {
        render(
            <MockedGlobalContextProvider>
            <CreateDeviceModel />
        </MockedGlobalContextProvider>
        );
    });
    const deviceModel = screen.getByPlaceholderText("Device Model");
    const deviceOwner = screen.getByPlaceholderText("Owner");
    const deviceMode = screen.getByPlaceholderText("Mode");
    const createButton = screen.getByRole('button', { name: /create/i });
    
    
    fireEvent.change(deviceModel, {targe: {value: 'DEVICE MODEL TEST'}})
    fireEvent.change(deviceOwner, {targe: {value: 'DEVICE OWNER TEST'}})
    fireEvent.change(deviceMode, {targe: {value: 'ROUTER TEST'}})
    fireEvent.click(createButton);
    

})