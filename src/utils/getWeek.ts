const curr = new Date();
const first = curr.getDate() - curr.getDay();
const last = first + 6;
export const firstday = new Date(curr.setDate(first)).toISOString().substring(0, 10);
export const lastday = new Date(curr.setDate(last)).toISOString().substring(0, 10);