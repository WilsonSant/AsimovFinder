import { useAtom } from 'jotai';
import { filterAtom } from './atoms';

function FilterInput() {
    const [filter, setFilter] = useAtom(filterAtom);

    return <input value={filter} onChange={(e) => setFilter(e?.target?.value)} />;
}

export default FilterInput;
