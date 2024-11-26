import { BreadcrumbsSegmentType } from "@/types";

export const getBreadcrumbSegments = (): BreadcrumbsSegmentType[] => {
    return [
        { title: 'پنل حسابداری' },
        { title: 'حساب‌ها' },
        { title: 'لیست مشتریان' }
    ]
}
