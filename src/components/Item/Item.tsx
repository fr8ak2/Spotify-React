'use client';

import { Icon } from '@shared/Icon/Icon';
import { Tag } from "@shared/Tag/Tag";
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';

import styles from './Item.module.scss';

interface ItemProps {
    images: any | unknown;
    id: string;
    alt?: string;
    heading: string;
    subheading?: string;
    type: string;
}

export const Item: FC<ItemProps> = ({ images, id, alt = '', heading = '', subheading = '', type }) => {
    const thumbnailRef = useRef<HTMLImageElement | null>(null);

    return (
        <Link className={styles.link} href={`/${type}/${id}`} passHref>
            <div className={styles.inner}>
				<div className={styles.img}>
					{images.length > 0 ? (
						<Image
							src={images[0].url}
							width={images[0].width ? images[0].width : 300}
							height={images[0].height ? images[0].height : 300}
							ref={thumbnailRef}
							alt={alt ? alt : heading}
							loading="lazy"
						/>
					) : (
						<div className={styles.icon}>
							<Icon id="music" />
						</div>
					)}
				</div>

				<div className={styles.content}>
					{heading && <Tag className={styles.title} type="h2" visualType="h6">{heading}</Tag>}
					{subheading && <span className={styles.text}>{subheading}</span>}
				</div>
            </div>
        </Link>
    );
};
