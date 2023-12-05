import { SearchFlow } from '@layouts/PageFlow/SearchFlow/SearchFlow';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Search',
};

const Search: NextPage = () => {
    return (
        <>
            <SearchFlow />
        </>
    );
};

export default Search;
