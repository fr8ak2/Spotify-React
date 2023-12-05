import { GenreFlow } from '@layouts/PageFlow/GenreFlow/GenreFlow';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Gene',
};

const Genre: FC<{ params: { slug: string } }> = ({ params }) => {
    const slug = params.slug;

    return (
        <>
            <GenreFlow slug={slug} />
        </>
    );
};

export default Genre;
