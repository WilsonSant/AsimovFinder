import { Provider, useAtom } from 'jotai';
import { filterAtom } from './atoms';
import FilterInput from './FilterInput';

function Page() {
  const [filter] = useAtom(filterAtom);

  return (
    <div className='container'>
      <FilterInput />
      <div>{filter}</div>
    </div>
  );
}

export default () => (
  <Provider>
    <Page />
  </Provider>
);
