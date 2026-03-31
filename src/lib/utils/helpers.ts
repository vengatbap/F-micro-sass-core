export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}