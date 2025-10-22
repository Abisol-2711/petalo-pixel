export interface Product {
    id: string,
slug: string,
name: string,
description: string,
price_base: number,
images: string[],
category_id: string,
color_tags: string[],
occasion_tags: string[],
is_active: boolean,
created_at: string,
}
