// Date with Full Month Name
export const dateWithMonthName = (dateParam?: Date) => {
    const date = !!dateParam ? dateParam : new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}