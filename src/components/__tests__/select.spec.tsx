import { render, screen } from "@/__tests__/mocks/utils/customRender"
import { Select } from "../Select"

describe("Components", () => {
  it("should render yes select", () => {
    render(<Select variant="YES" />)

    expect(screen.getByText('yes', { exact: false })).toBeTruthy()
  })

  
  it("should render no select", () => {
    render(<Select variant="NO" />)

    expect(screen.getByText('no', { exact: false })).toBeTruthy()
  })
})