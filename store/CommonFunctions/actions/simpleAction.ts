/** универсальный экшин, создан чтобы не создать простые экшины */
const simpleAction = (type: string) => (payload?: any) => ({
  type,
  payload,
})

export default simpleAction
