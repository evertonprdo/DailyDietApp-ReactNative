import { PropsWithChildren } from "react"
import { act, renderHook, waitFor } from "@testing-library/react-native"

import { DietContextProvider } from "../DietContext"
import { useDiet } from "@/hooks/useDiet"

const wrapper = ({ children }: PropsWithChildren) => (
  <DietContextProvider initialData={{
    data: [],
    lastId: 0
  }}>
    {children}
  </DietContextProvider>
)


describe("Contexts: Diet Context", () => {
  describe("Reducer", () => {
    it("should render with initial values", () => {
      const { result } = renderHook(() => useDiet(), { wrapper })

      expect(result.current.meals).toHaveLength(0)
    })

    it("should be able to add meal", async () => {
      const { result } = renderHook(() => useDiet(), { wrapper })
      const item = {
        title: 'test',
        description: 'test-description',
        date: 'xx/xx/xxxx',
        isWithinDiet: true,
      }

      await waitFor(() => act(() => result.current.dispatches.added(item)))

      expect(result.current.meals).toHaveLength(1)
      expect(result.current.meals[0].id).toEqual('1')
      expect(result.current.meals[0]).toEqual(expect.objectContaining(item))
    })

    it("should be able to edit meal", async () => {
      const { result } = renderHook(() => useDiet(), { wrapper })
      const item = {
        title: 'test',
        description: 'test-description',
        date: 'xx/xx/xxxx',
        isWithinDiet: true,
      }

      await waitFor(() => act(() => result.current.dispatches.added(item)))
      await waitFor(() => act(() => result.current.dispatches.changed({
        ...item,
        title: 'edited-test',
        id: '1'
      })))

      expect(result.current.meals).toHaveLength(1)
      expect(result.current.meals[0].title).toEqual('edited-test')
    })

    it("should be able to delete meal", async () => {
      const { result } = renderHook(() => useDiet(), { wrapper })
      const item = {
        title: 'test',
        description: 'test-description',
        date: 'xx/xx/xxxx',
        isWithinDiet: true,
      }

      await waitFor(() => act(() => result.current.dispatches.added(item)))
      await waitFor(() => act(() => result.current.dispatches.deleted('1')))

      expect(result.current.meals).toHaveLength(0)
    })
  })

  describe("Statistics", () => {
    it("should return null when are no meals registered", () => {
      const { result } = renderHook(() => useDiet(), { wrapper })

      expect(result.current.statistics).toBeNull()
    })

    it("should return the diet statistics", async () => {
      const { result } = renderHook(() => useDiet(), {
        wrapper: ({ children }) => (
          <DietContextProvider initialData={{
            data: [
              { id: '1', date: '2024-10-11T20:00:00Z', isWithinDiet: true, title: 't', description: 't' },
              { id: '2', date: '2024-10-11T19:00:00Z', isWithinDiet: true, title: 't', description: 't' },
              { id: '3', date: '2024-10-12T20:00:00Z', isWithinDiet: false, title: 't', description: 't' },
              { id: '4', date: '2024-10-13T20:00:00Z', isWithinDiet: true, title: 't', description: 't' },
            ],
            lastId: 3
          }}>
            {children}
          </DietContextProvider>
        )
      })

      expect(result.current.statistics).toEqual({
        percentWithinDiet: 0.75,
        bestStreak: 2,
        mealsAmount: 4,
        withinDiet: 3,
        outsideDiet: 1,
      })
    })
  })
})