import { useAppSelector } from '../../../redux/hook'
import { ApplicationData } from '../../../redux/reducer/applicationSlice'

export function Hello() {
  
  const value = useAppSelector((state) => state.appData.value)

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Hello World { value }</h2>
    </main>
  );
}
