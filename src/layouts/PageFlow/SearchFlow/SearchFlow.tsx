'use client';

import { CategoriesList } from '@components/CategoriesList/CategoriesList';
import { Categories } from '@lib/types';
import { Tag } from '@shared/Tag/Tag';
import { useCallback, useEffect, useState } from 'react';

import styles from './SearchFlow.module.scss';

export const SearchFlow = () => {
    const [categoryItems, setCategoryItems] = useState<Categories | null>(null);

    const categoryList = useCallback(async () => {
        const resp = await fetch(`/api/categories`);
        const json = (await resp.json()) as Categories;

        setCategoryItems(json);
    }, []);

    useEffect(() => {
        categoryList().catch(e => console.log(e));
    }, [categoryList]);

    return (
        <>
            <div className={styles.categories}>
                <Tag type="h2" visualType="h4">Browse Categories</Tag>
                <CategoriesList categories={categoryItems?.categories?.items} />
            </div>
        </>
    );
};
