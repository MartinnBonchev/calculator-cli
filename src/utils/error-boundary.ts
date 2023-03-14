export default function errorBoundary<TData>(fn: () => TData) {
  try {
    const data = fn();
    return { data: data, error: null };
  } catch (err) {
    return { data: null, error: err as string };
  }
}
