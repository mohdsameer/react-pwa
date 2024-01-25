import { useSelector } from 'react-redux'

export function Hello() {
  
  const value = (useSelector as any)((state: any) => state.appData.value)

  const list = (window as any).getList()

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Hello { (window as any).myCustomProperty }</h2>
      {value}
      <br/>
      { list.name }
    </main>
  );
}
